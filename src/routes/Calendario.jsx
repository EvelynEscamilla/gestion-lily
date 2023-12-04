import React, { useState, useEffect } from "react";

import Calendar from "../Components/calendar/Calendar";
import FormSeleccionServicios from "../Components/forms/FormSeleccionServicios";
import FormHorario from "../Components/forms/FormHorario";
import { postCita } from "../controllers/citas.controller";
import moment from "moment/moment";
import { useAuth } from "../context/authContext";
import ModUsr from "../Components/modals/modUsr";
import useCitasFechas from "../hooks/useCitasFechas";
import useForm from "../hooks/useForm";
import useServicios from "../hooks/useServicios";

const Calendario = () => {
  const { userData } = useAuth();
  const [Fecha, setFecha] = useState(new Date());
  const [Servicio, setServicio] = useState("");
  const [hora, setHora] = useState("");
  const [Cliente, setCliente] = useState(null);
  const [Contacto, setContacto] = useState(null);
  const [Estado, setEstado] = useState("En Espera");
  const [Numero_cliente, setNumero_cliente] = useState("1");
  const [Total, setTotal] = useState("");
  const { citasFechaServicio } = useCitasFechas(Fecha, Servicio);

  const VerificarServ = () => {
    // Verificar si la nueva cita se sobrepone con las citas existentes
    const duracion = serviciosBy[0].duracion
    const newAppointmentStartTime = new Date(Fecha);
    const newAppointmentEndTime = new Date(
      newAppointmentStartTime.getTime() + duracion * 60000
    );
    
    console.log(newAppointmentEndTime.toString());


    const cantidadServHoras = citasFechaServicio.some((serv) => {
      console.log(serv.Fecha);
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
      alert('La nueva cita es aceptable');
    } else {
      alert('La nueva cita se superpone con una cita existente. Por favor, elija otro horario.');
    }
  };


  //formData.fecha, Servicio
  const { formData, handleFormDataChange, handleDateChange, handleTimeChange } =
    useForm();

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

  console.log(citasFechaServicio);

  useEffect(() => {
    if (userData) {
      setCliente(userData.nombreCompleto);
      setContacto(userData.telefono);
    }
  }, [userData]);

  const { serviciosBy } = useServicios(Servicio);

  console.log(serviciosBy);
  const handleActualizarHora = (nuevaHora) => {
    console.log(
      Fecha +
        " " +
        Servicio +
        " " +
        " " +
        Cliente +
        " " +
        Contacto +
        " " +
        Estado +
        " " +
        Numero_cliente +
        " " +
        Total
    );
    setHora(nuevaHora);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //Funcion de subir
    await postCita({
      Fecha,
      Servicio,
      Cliente,
      Contacto,
      Estado,
      Numero_cliente,
      Total,
    });

    e.target.reset();
  };

  return (
    <>
      <h1 className=" text-2xl"> Fecha: {Fecha.toString()}</h1>
      <h1 className=" text-2xl"> Servicio: {Servicio}</h1>
      {!userData && <ModUsr />}

      {/*      <form
        onSubmit={handleSubmit}
        className="w-full lg:flex sm:block justify-center items-center min-h-screen "
      >
        <input name="Cliente" className=" bg-slate-400" value={Cliente} onChange={handleFormDataChange}></input>
        <input name="Contacto" className=" bg-slate-400" value={Contacto} onChange={handleFormDataChange}></input>
        <div className=" lg:w-2/6">
          <Calendar onChange={handleDateChange} />
        </div>

        <div className=" lg:w-1/2">
          <FormSeleccionServicios onChange={handleFormDataChange} />
        </div>
        <div className="lg:w-1/6">
          <div className="flex items-center lg:flex justify-center p-5 ">
            <div className="w-8/9 h-[31rem] bg-azulNav rounded-lg border-2 border-azul flex flex-col justify-between">
              <div className="mb-10 ">
                <div className=" justify-center inline-block">
                  <FormHorario onChange={handleTimeChange} />
                  <select name="personas" onChange={handleFormDataChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <button>Halo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div>
        <button onClick={VerificarServ}>MMMMAU</button>
      </div> */}
    </>
  );
};

export default Calendario;
