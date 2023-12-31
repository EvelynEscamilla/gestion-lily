import React, { useRef, useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import CitasCalendario from "../citas/CitasCalendario";
import BotonCalendario from "../boton/BotonCalendario";
import CitasServicios from "../citas/CitasServicios";
import CitasHorarios from "../citas/CitasHorarios";
import useServicios from "../../hooks/useServicios";
import useCitasFechas from "../../hooks/useCitasFechas";
import { Dialog, Transition } from "@headlessui/react";
import ResumenFormulario from "../modals/ResumenFormulario";
import { useAuth } from "../../context/authContext";
import { postCita } from "../../controllers/citas.controller";
import ContendorElementosCal from "../citas/ContendorElementosCal";
import ModCitaCreada from "../modals/ModCitaCreada";
import ModValidacion from "../modals/ModValidacion";

const FormCalendar = () => {
  const [valDia, setValDia] = useState(false);
  const [valServ, setValServ] = useState(false);
  const [valHora, setValHora] = useState(false);
  const [valForm, setValForm] = useState(false);
  const [activeComponent, setActiveComponent] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenCita, setModalOpenCita] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);
  const componentRef3 = useRef(null);

  const scrollToComponent = (component) => {
    setActiveComponent(component);
    const targetRef =
      component === 1
        ? componentRef1
        : component === 2
        ? componentRef2
        : componentRef3;

    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { userData } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const abrirModal = () => {
    setIsOpen(true);
  };

  const cerrarModal = () => {
    setIsOpen(false);
  };

  const mostrarDatosEnModal = () => {
    abrirModal();
  };

  const [Servicio, setServicio] = useState("");
  const [Fecha, setFecha] = useState(new Date());

  const { citasFechaServicio } = useCitasFechas(Fecha, Servicio);

  const {
    formData,
    handleFormDataChange,
    handleDateChange,
    handleTimeChange,
    handleFormPrecioDataChange,
    formCliente,
  } = useForm();

  const { serviciosBy } = useServicios(Servicio);
  const [maxVariableLocal, setMaxVariableLocal] = useState(null);
  const [duracionServicio, setduracionServicio] = useState("");

  useEffect(() => {
    setMaxVariableLocal(0);
    setValServ(false);
    if (serviciosBy && serviciosBy.length > 0) {
      const { maximoClientes } = serviciosBy[0];
      const parsedMax = parseInt(maximoClientes, 10);
      setMaxVariableLocal(parsedMax);
      setduracionServicio(serviciosBy[0].duracion);
    }
  }, [serviciosBy]);
  const VerificarServ = () => {
    const duracion = serviciosBy[0].duracion;
    const maxServicios = serviciosBy[0].max;

    let maximoServicios = maxServicios;

    const newAppointmentStartTime = new Date(Fecha);
    const newAppointmentEndTime = new Date(
      newAppointmentStartTime.getTime() + duracion * 60000
    );

    const cantidadServHoras = citasFechaServicio.some((serv) => {
      const appointmentStartTime = new Date(serv.Fecha);
      const appointmentEndTime = new Date(
        appointmentStartTime.getTime() + duracion * 60000
      );

      const superposicion =
        (newAppointmentStartTime >= appointmentStartTime &&
          newAppointmentStartTime < appointmentEndTime) ||
        (newAppointmentEndTime > appointmentStartTime &&
          newAppointmentEndTime <= appointmentEndTime) ||
        (newAppointmentStartTime <= appointmentStartTime &&
          newAppointmentEndTime >= appointmentEndTime);

      if (superposicion) {
        // Restar uno a maximoServicios si hay superposición
        maximoServicios -= 1;
      }
    });
    if (maximoServicios > 0) {
      setValForm(true);
      setModalContent({
        title: "Nueva cita aceptable",
        content: "La nueva cita es aceptable.",
      });
      setModalOpen(true);
    } else {
      setValForm(false);
      setModalContent({
        title: "Cita superpuesta",
        content:
          "La nueva cita se superpone con una cita existente. Por favor, elija otro horario.",
      });
      setModalOpen(true);
    }
  };
  useEffect(() => {
    if (formData !== null) {
      if (formData.fecha !== undefined) {
        setFecha(formData.fecha);
        setValDia(true);
      }
      if (formData.grupoServicios !== undefined) {
        setServicio(formData.grupoServicios);
        if (formData.personas !== undefined) {
          if (formData.personas !== "0") {
            setValServ(true);
          } else if (formData.personas === "0") {
            setValServ(false);
          }
        }
      }
    }
  }, [formData]);
  const opciones = maxVariableLocal
    ? [
        ...Array.from({ length: maxVariableLocal }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        )),
      ]
    : [];
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      // Lógica onSubmit
      const result = await postCita(formData);
      if (result.success) {
        setModalOpenCita(true);
        // Abre el modal si la cita se ha creado con éxito
      } else {
        console.error("Error al crear la cita:", result.error);
        // Puedes manejar el error de otra manera si lo necesitas
      }
    } catch (error) {
      console.error("Error al procesar el formulario:", error);
      // Puedes manejar el error de otra manera si lo necesitas
    }
  };

  useEffect(() => {
    if (userData) {
      formCliente({ userData });
    } else {
      {
        /*      setModalContent({
        title: "Cita superpuesta",
        content: "La nueva cita se superpone con una cita existente. Por favor, elija otro horario."
      });
    setModalOpen(true);*/
      }
    }
  }, [userData]);

  const horas12 = citasFechaServicio.map((cita) => {
    const fecha = new Date(cita.Fecha);
    const horas = fecha.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return horas;
  });

  const horasRenderizadas = horas12.map((hora, index) => {
    // Parsear la hora actual en formato "h:mm A" a un objeto de tipo Date
    const horaInicio = new Date(`01/01/2023 ${hora}`);

    // Calcular la hora de finalización sumando la duración del servicio en minutos
    const horaFin = new Date(horaInicio.getTime() + duracionServicio * 60000);

    // Formatear las horas para mostrar en el componente
    const horaInicioFormateada = horaInicio.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const horaFinFormateada = horaFin.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return (
      <div key={index} className="p-1">
        <div className=" bg-gray-300 px-3 py-1 mb-1 rounded-2xl w-full">
          {`${horaInicioFormateada} a ${horaFinFormateada}`}
        </div>
      </div>
    );
  });

  const hayHorasParaRenderizar =
    horasRenderizadas && horasRenderizadas.length > 0;

  return (
    <div className="form flex flex-col justify-center items-center">
      <div className="progressbar"></div>
      <div className="form-container  w-full sm:w-11/12 md:w-10/12 lg:w-8/12 ">
        <ContendorElementosCal
          ref={componentRef1}
          titulo="Escoge el dia de que mas se ajuste a tu horario"
          consejos="No es posible agendar citas para fechas pasadas, No se pueden programar citas los sábados y domingos."
        >
          <CitasCalendario onChange={handleDateChange} />
          <div>
            <BotonCalendario
              // oC={}
              oC={() => scrollToComponent(2)}
              desa={valDia}
              BG="morado"
              TC="white"
            >
              <p>Seleccionar Servicio</p>
            </BotonCalendario>
          </div>
        </ContendorElementosCal>

        <ContendorElementosCal
          ref={componentRef2}
          titulo="Selecciona el servicio que desees"
          consejos="Cada servicio es por persona. Para seleccionar la cantidad de personas primero escoge un servicio, Cada que se cambie el servicio se debera escoger la cantidad de personas nuevamente."
        >
          <div className="flex w-full flex-col justify-center items-center ">
            <CitasServicios
              onChange={(event) => {
                handleFormPrecioDataChange(event), setMaxVariableLocal(0);
              }}
            />

            <p className=" text-lg font-semibold leading-tight">
              Numero de Personas:
            </p>
            <label className=" w-full px-5   ">
              <select
                defaultValue={"0"}
                name="personas"
                onChange={handleFormDataChange}
                className=" block py-2.5 px-3 w-full   border-2 border-azul  focus:outline-none focus:ring-0 focus:border-gray-200 rounded "
              >
                <option className="hidden" value="0">
                  0
                </option>
                {opciones}
              </select>
            </label>
          </div>
          <div className="flex">
            <BotonCalendario
              //oC={() => scrollToComponent(1)}

              oC={() => scrollToComponent(1)}
              BG="morado"
              TC="white"
              desa={true}
            >
              <p>Atras</p>
            </BotonCalendario>
            <BotonCalendario
              //oC={() => scrollToComponent(3)}

              oC={() => scrollToComponent(3)}
              desa={valServ}
              BG="morado"
              TC="white"
            >
              <p>Seleccionar Horario</p>
            </BotonCalendario>
          </div>
        </ContendorElementosCal>

        <ContendorElementosCal
          ref={componentRef3}
          titulo="Escoge el horario que desees"
          consejos="El horario de la mañana va desde las 7:00 AM hasta las 2:00 PM. El horario de la tarde va desde las 4:00 PM hasta las 7:00 PM. Antes de confirmar tu cita, deberas verificar si hay cupo disponible en el horario escogido para tu cita. En caso de que no, selecciona otro horario."
        >
          <div className="flex justify-between px-10 md:pl-5 md:pr-0 w-full">
            <div className=" w-full block  ">
              <CitasHorarios
                duracion={duracionServicio}
                setValHora={setValHora}
                onChange={(date) => {
                  handleTimeChange(date);
                }}
              />
            </div>

            {hayHorasParaRenderizar && (
              <>
                <div className="p-2 ">
                  <p className="p-2">
                    Estos horarios ya estan ocupados, elige un horario que no se
                    interponga entre estos
                  </p>
                  <div>{horasRenderizadas}</div>
                </div>
              </>
            )}
          </div>
          <div className="flex">
            <BotonCalendario
              //oC={() => scrollToComponent(2)}

              oC={() => scrollToComponent(2)}
              BG="morado"
              TC="white"
              desa={true}
            >
              <p>Atras</p>
            </BotonCalendario>
            <BotonCalendario
              oC={VerificarServ}
              desa={valHora}
              BG="morado"
              TC="white"
            >
              <p>Verificar Horario</p>
            </BotonCalendario>
          </div>
          <BotonCalendario
            oC={mostrarDatosEnModal}
            desa={valForm}
            BG="morado"
            TC="white"
          >
            Confirmar Cita
          </BotonCalendario>
        </ContendorElementosCal>

        <Transition show={isOpen} as={React.Fragment}>
          <Dialog onClose={cerrarModal} as="div" className="relative z-10">
            <form onSubmit={handleOnSubmit}>
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className=" w-11/12 md:w-3/4 lg:w-2/3 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title className=" font-bold text-4xl text-center">
                        Verifica tu cita
                        <p className=" text-sm font-normal ">
                          (Recuerda que puedes cambiar la informacion de
                          contacto para alguien mas)
                        </p>
                      </Dialog.Title>
                      <Dialog.Description>
                        <div className=" flex flex-col justify-center items-center w-full">
                          <img
                            className="Logo h-[5rem]"
                            src="Images/Nav/Logo.svg"
                          />
                        </div>

                        <div className=" grid lg:grid-cols-2">
                          <div className="    ">
                            <p className=" font-bold  ">Nombre de Contacto: </p>
                            <input
                              required
                              className=" w-full"
                              type="text"
                              defaultValue={formData.Cliente}
                              name="Cliente"
                              onChange={handleFormDataChange}
                            />
                          </div>
                          <div className="    ">
                            <p className=" font-bold  ">
                              Telefono de Contacto:{" "}
                            </p>
                            <input
                              required
                              inputMode="numeric"
                              step="1"
                              className="w-full"
                              type="number"
                              pattern="[0-9]{10}"
                              defaultValue={formData.Contacto}
                              name="Contacto"
                              onChange={handleFormDataChange}
                            />
                          </div>
                          <div className="   ">
                            <p className=" font-bold   ">
                              Correo de Contacto:{" "}
                            </p>
                            <input
                              required
                              className="w-full"
                              type="text"
                              defaultValue={formData.Correo}
                              name="Correo"
                              onChange={handleFormDataChange}
                            />
                          </div>
                        </div>

                        <ResumenFormulario formData={formData} />
                      </Dialog.Description>
                      <div className=" flex justify-center items-center">
                        {" "}
                        <BotonCalendario
                          type="button"
                          oC={cerrarModal}
                          desa={true}
                        >
                          Atras
                        </BotonCalendario>
                        <BotonCalendario
                          type="submit"
                          oC={cerrarModal}
                          desa={true}
                        >
                          Enviar
                        </BotonCalendario>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </form>
          </Dialog>
        </Transition>
      </div>
      <ModValidacion
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
      <ModCitaCreada
        isOpen={modalOpenCita}
        onClose={() => {
          setModalOpenCita(false),
            (window.location.href = "/gestion-lily/calendario");
        }}
        title="Cita creada con éxito"
        content="La cita ha sido creada con éxito."
      />
    </div>
  );
};

export default FormCalendar;
