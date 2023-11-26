import React, { useState } from "react";
import Calendar from "../Components/calendar/Calendar";
import FormSeleccionServicios from "../Components/forms/FormSeleccionServicios";
import FormHorario from "../Components/forms/FormHorario";
import CalendarComponent from "../Components/calendar/CalendarComponent";
const Calendario = () => {
  const [fecha, setFecha] = useState("");
  const [servicio, setServicio] = useState("");
  const [hora, setHora] = useState("");

  const handleActualizarFecha = (nuevaFecha) => {
    console.log("Fecha desde el padre: " + fecha);
    setFecha(nuevaFecha);
  };
  const handleActualizarServicio = (nuevoServicio) => {
    setServicio(nuevoServicio);
    console.log("servicio desde el padre: " + servicio);
  };
  const handleActualizarHora = (nuevaHora) => {
    console.log('Hora desde el padre: '+hora)
    setHora(nuevaHora);
  };
  return (
    <>
      <div className="w-full lg:flex sm:block justify-center items-center min-h-screen bg-gray-900 ">
        <div className=" lg:w-2/6">
          <Calendar
            actualizarFecha={handleActualizarFecha}
            fechaActual={fecha}
          />
        </div>

        <div className=" lg:w-1/2 ">
          <FormSeleccionServicios
            actualizarServicio={handleActualizarServicio}
            servicioActual={servicio}
          />
        </div>
        <div className="lg:w-1/6">
          <FormHorario
            actualizarHora={handleActualizarHora}
            horaActual={hora}
          />
        </div>
      </div>
    </>
  );
};

export default Calendario;
