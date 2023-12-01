import React, { useRef, useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import CitasCalendario from "../citas/CitasCalendario";
import ModalCitas from "../citas/ModalCitas";
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
  const [activeComponent, setActiveComponent] = useState(0);
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

    console.log(component);
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
    resetForm,
  } = useForm();

  const { serviciosBy } = useServicios(Servicio);
  const [maxVariableLocal, setMaxVariableLocal] = useState(null);

  useEffect(() => {
    if (serviciosBy && serviciosBy.length > 0) {
      const { max } = serviciosBy[0];
      const parsedMax = parseInt(max, 10);
      setMaxVariableLocal(parsedMax);
    }
  }, [serviciosBy]);
  const VerificarServ = () => {
    console.log(citasFechaServicio);
    // Verificar si la nueva cita se sobrepone con las citas existentes
    const duracion = serviciosBy[0].duracion;
    const newAppointmentStartTime = new Date(Fecha);
    const newAppointmentEndTime = new Date(
      newAppointmentStartTime.getTime() + duracion * 60000
    );

    const cantidadServHoras = citasFechaServicio.some((serv) => {
      const appointmentStartTime = new Date(serv.Fecha);
      const appointmentEndTime = new Date(
        appointmentStartTime.getTime() + duracion * 60000
      );

      return (
        (newAppointmentStartTime >= appointmentStartTime &&
          newAppointmentStartTime < appointmentEndTime) ||
        (newAppointmentEndTime > appointmentStartTime &&
          newAppointmentEndTime <= appointmentEndTime) ||
        (newAppointmentStartTime <= appointmentStartTime &&
          newAppointmentEndTime >= appointmentEndTime)
      );
    });
    if (!cantidadServHoras) {
      alert("La nueva cita es aceptable");
    } else {
      alert(
        "La nueva cita se superpone con una cita existente. Por favor, elija otro horario."
      );
    }
  };
  useEffect(() => {
    if (formData !== null) {
      if (formData.fecha !== undefined) {
        setFecha(formData.fecha);
      }
      if (formData.grupoServicios !== undefined) {
        setServicio(formData.grupoServicios);
      }
    }
  }, [formData]);
  const opciones = maxVariableLocal
    ? [
        <option key="0" value="1" disabled selected>
          Seleccione el máximo
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

  const horasRenderizadas = horas12.map((hora, index) => (
    <div key={index} className="p-1">
      <div className=" bg-gray-300 px-3 py-1 mb-1 rounded-full w-fit">
        {hora}
      </div>
    </div>
  ));
  const hayHorasParaRenderizar =
    horasRenderizadas && horasRenderizadas.length > 0;
  
  return (
    <div className="form flex flex-col justify-center items-center">
      <botton onClick={() => scrollToComponent(1)}>Boton</botton>
      <div className="progressbar"></div>
      <div className="form-container  w-full sm:w-11/12 md:w-10/12 lg:w-8/12 ">
        {activeComponent === 1 && (
          <ContendorElementosCal
            ref={componentRef1}
            titulo="Escoge el dia de que mas se ajuste a ti"
            consejos="No es posible agendar citas para fechas pasadas, No se pueden programar citas los sábados y domingos"
          >
            <CitasCalendario onChange={handleDateChange} />
            <div>
              <BotonCalendario
                oC={() => scrollToComponent(2)}
                
                disabled={activeComponent === 2}
                BG="morado"
                TC="white"
              >
                <p>Seleccionar Servicio</p>
              </BotonCalendario>
            </div>
          </ContendorElementosCal>
        )}

        {activeComponent === 2 && (
          <ContendorElementosCal
            ref={componentRef2}
            titulo="Selecciona el servicio que quieras"
            consejos="Cada servicio es por persona individual. Para seleccionar la cantidad de personas primero escoge un Servicio"
          >
            <CitasServicios onChange={handleFormPrecioDataChange} />
            <div className="flex w-full justify-center items-center px-5">
              {" "}
              <p className=" text-lg font-semibold leading-tight">
                Numero de Personas:
              </p>
              <label className=" w-full   ">
                <select
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
                oC={() => scrollToComponent(1)}
                disabled={activeComponent === 1}
                BG="morado"
                TC="white"
              >
                <p>Atras</p>
              </BotonCalendario>
              <BotonCalendario
                oC={() => scrollToComponent(3)}
                
                disabled={activeComponent === 3}
                BG="morado"
                TC="white"
              >
                <p>Seleccionar Horario</p>
              </BotonCalendario>
            </div>
          </ContendorElementosCal>
        )}
        {activeComponent === 3 && (
          <ContendorElementosCal
            ref={componentRef3}
            titulo="Escoge el horario que quieras"
            consejos="No es posible agendar citas para fechas pasadas, No se pueden programar citas los sábados y domingos"
          >
            <div className="flex justify-between px-10 md:pl-5 md:pr-0 w-full">
              <div className=" w-full block  ">
                <CitasHorarios onChange={handleTimeChange} />
              </div>

              {hayHorasParaRenderizar && (
                <>
                  <div className="p-2 ">
                    <p className="p-2">
                      Estos horarios YA ESTAN OCUPADOS, elige un horario que no
                      se interponga entre estos
                    </p>
                    <div className="flex">{horasRenderizadas}</div>
                  </div>
                </>
              )}
            </div>
            <div className="flex">
              <BotonCalendario
                oC={() => scrollToComponent(2)}
                disabled={activeComponent === 2}
                BG="morado"
                TC="white"
              >
                <p>Atras</p>
              </BotonCalendario>
              <BotonCalendario oC={VerificarServ} BG="morado" TC="white">
                <p>Verificar Horario</p>
              </BotonCalendario>
            </div>
            <BotonCalendario oC={mostrarDatosEnModal} BG="morado" TC="white">
              <p>Confirmar Cita</p>
            </BotonCalendario>
          </ContendorElementosCal>
        )}

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
                    <Dialog.Panel className="  w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title className="">
                        Resumen del Formulario
                      </Dialog.Title>
                      <Dialog.Description>
                        <input
                          type="text"
                          placeholder={formData.Cliente}
                          onChange={handleFormDataChange}
                          name="Cliente"
                        ></input>
                        <input
                          type="number"
                          placeholder={formData.Contacto}
                          onChange={handleFormDataChange}
                          name="Contacto"
                        ></input>
                        <ResumenFormulario formData={formData} />
                      </Dialog.Description>
                      <button type="button" onClick={cerrarModal}>
                        Cerrar Modal
                      </button>
                      <button type="submit">Enviar</button>
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
