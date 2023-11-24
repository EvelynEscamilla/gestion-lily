import * as React from "react";
import Calendar from "../Components/calendar/Calendar";

const Calendario = () => {
  return (
    <>
      <div className=" w-full lg:flex sm:block justify-center items-center min-h-screen ">
        <div className=" lg:w-1/2 ">
          
          <Calendar/>
        </div>
        <div className=" lg:w-2/6 bg-blue-200">Calendario</div>
        <div className="lg:w-1/6 bg-slate-400">Calendario</div>
      </div>
    </>
  );
};

export default Calendario;
