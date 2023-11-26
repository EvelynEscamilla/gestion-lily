import React, { useState } from "react";
import Calendar from "../Components/calendar/Calendar";
import FormSeleccionServicios from "../Components/forms/FormSeleccionServicios";
import FormHorario from "../Components/forms/FormHorario";
import CalendarComponent from "../Components/calendar/CalendarComponent";
const Calendario = () => {
  const [fecha, setFecha] = useState(new Date());
  const [servicio, setServicio] = useState("");
  const [hora, setHora] = useState("");

  const handleActualizarFecha = (nuevaFecha) => {
    setFecha(nuevaFecha);
  };
  const handleActualizarServicio = (nuevoServicio) => {
    setServicio(nuevoServicio);
  };
  const handleActualizarHora = (nuevaHora) => {
    setHora(nuevaHora);
  };

  return (
    <>
      <div>
        <h1>{fecha}</h1>
        <h1>{servicio}</h1>
        <h1>{hora}</h1>
      </div>
      <div className="w-full lg:flex sm:block justify-center items-center min-h-screen ">
        <div className=" lg:1/2">
          <Calendar
            actualizarFecha={handleActualizarFecha}
            fechaActual={fecha}
          />
        </div>
        {/* 
        <div className=" lg:1/2 ">
          <FormSeleccionServicios
            actualizarFecha={handleActualizarServicio}
            textoActual={servicio}
          />
        </div>
        <div className="lg:1/2">
          <FormHorario
            actualizarFecha={handleActualizarHora}
            textoActual={hora}
          />
        </div>
        */}
      </div>
    </>
  );
};

export default Calendario;
