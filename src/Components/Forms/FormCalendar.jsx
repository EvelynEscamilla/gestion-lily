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

const FormCalendar = () => {
  const [valDia, setValDia] = useState(false);
  const [valServ, setValServ] = useState(false);
  const [valHora, setValHora] = useState(false);
  const [valForm, setValForm] = useState(false);
  const [activeComponent, setActiveComponent] = useState(1);

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
      const { max } = serviciosBy[0];
      const parsedMax = parseInt(max, 10);
      setMaxVariableLocal(parsedMax);
      setduracionServicio(serviciosBy[0].duracion);
      console.log(serviciosBy);
    }
  }, [serviciosBy]);
  const VerificarServ = () => {
    console.log(citasFechaServicio);
    // Verificar si la nueva cita se sobrepone con las citas existentes
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
      alert("La nueva cita es aceptable");
    } else {
      setValForm(false);
      alert(
        "La nueva cita se superpone con una cita existente. Por favor, elija otro horario."
      );
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
            console.log("Ponga otro valor");
            setValServ(false);
          }
        }
      }
    }
  }, [formData]);
  const opciones = maxVariableLocal
    ? [
        <option key="0" value="0">
          0
        </option>,
        ...Array.from({ length: maxVariableLocal }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        )),
      ]
    : [];
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    // Lógica onSubmit
    console.log("Formulario enviado");
    await postCita(formData);
  };
  useEffect(() => {
    if (userData) {
      formCliente({ userData });
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
        <div className=" bg-gray-300 px-3 py-1 mb-1 rounded-2xl w-fit">
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
          titulo="Escoge el dia de que mas se ajuste a ti"
          consejos="No es posible agendar citas para fechas pasadas, No se pueden programar citas los sábados y domingos"
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
          titulo="Selecciona el servicio que quieras"
          consejos="Cada servicio es por persona individual. Para seleccionar la cantidad de personas primero escoge un Servicio"
        >
          <div className="flex w-full flex-col justify-center items-center px-5">
            <CitasServicios
              onChange={(event) => {
                handleFormPrecioDataChange(event), setMaxVariableLocal(0);
              }}
            />

            <p className=" text-lg font-semibold leading-tight">
              Numero de Personas:
            </p>
            <label className=" w-full   ">
              <select
                defaultValue={"0"}
                name="personas"
                onChange={handleFormDataChange}
                className=" block py-2.5 px-3 w-full   border-2 border-azul  focus:outline-none focus:ring-0 focus:border-gray-200 rounded "
              >
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
          titulo="Escoge el horario que quieras"
          consejos="No es posible agendar citas para fechas pasadas, No se pueden programar citas los sábados y domingos"
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
                    Estos horarios YA ESTAN OCUPADOS, elige un horario que no se
                    interponga entre estos
                  </p>
                  <div className="flex">{horasRenderizadas}</div>
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
                          (Recuerda que puedes cambiar el nombre y numero para
                          alguien mas)
                        </p>
                      </Dialog.Title>
                      <Dialog.Description>
                        <div className=" flex flex-col justify-center items-center w-full">
                          <img
                            className="Logo h-[5rem]"
                            src="Images/Nav/Logo.svg"
                          />
                        </div>

                        <div className="    ">
                          <p className=" font-bold  ">Nombre de Contacto: </p>
                          <input
                            className=" w-full"
                            type="text"
                            defaultValue={formData.Cliente}
                            name="Cliente"
                            onChange={handleFormDataChange}
                          />
                        </div>
                        <div className="    ">
                          <p className=" font-bold  ">Telefono de Contacto: </p>
                          <input
                            type="text"
                            defaultValue={formData.Contacto}
                            name="Cliente"
                            onChange={handleFormDataChange}
                          />
                        </div>
                        <div className="   ">
                          <p className=" font-bold   ">Correo de Contacto: </p>
                          <input
                            type="text"
                            defaultValue={formData.Correo}
                            name="Cliente"
                            onChange={handleFormDataChange}
                          />
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
    </div>
  );
};

export default FormCalendar;
