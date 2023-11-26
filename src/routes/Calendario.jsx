import * as React from "react";
import Calendar from "../Components/calendar/Calendar";
import FormSeleccionServicios from "../Components/forms/FormSeleccionServicios";
import FormHorario from "../Components/forms/FormHorario";

const Calendario = () => {
  return (
    <>
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
