import React, {useState} from "react";
import Calendar from "../Components/calendar/Calendar";
import FormSeleccionServicios from "../Components/forms/FormSeleccionServicios";
import FormHorario from "../Components/forms/FormHorario";
import CalendarComponent from "../Components/calendar/CalendarComponent";
const Calendario = () => {
  const [texto, setTexto] = useState('Hola, mundo');

  const handleActualizarTexto = (nuevoTexto) => {
    setTexto(nuevoTexto);
  };
  return (
    <>
    <div>
      <h1>{texto}</h1>
      <CalendarComponent actualizarTexto={handleActualizarTexto} textoActual={texto} />
    </div>
      <div className="w-full lg:flex sm:block justify-center items-center min-h-screen ">
        <div className=" lg:1/2">
          <Calendar/>
        </div>
        <div className=" lg:1/2 ">
        <FormSeleccionServicios />
        </div>
        <div className="lg:1/2">
        <FormHorario />
        </div>
        
      </div>
    </>
  );
};

export default Calendario;
