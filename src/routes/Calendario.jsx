import React, { useState } from "react";
import useForm from "../hooks/useForm";
import CalendarComp from "../Components/calendar/CalendarComp";


const Calendario = () => {
  const { formData, handleFormDataChange } = useForm();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div >
      <CalendarComp></CalendarComp>
        <form onSubmit={(e) =>{e.preventDefault}} className=" w-full lg:flex sm:block justify-center items-center min-h-screen ">
          <div className=" lg:w-1/2 ">
          
          </div>
          <div className=" lg:w-2/6 bg-blue-200">
            {" "}
            <input
              name="Servicios"
              type="text"
              onChange={handleFormDataChange}
              placeholder="Servicios"
            />
          </div>
          <div className="lg:w-1/6 bg-slate-400">
            {" "}
            <input
              name="Hora"
              type="text"
              onChange={handleFormDataChange}
              placeholder="Hora"
            />
          </div>
          <button type="submit">WAOS</button>
        </form>
      </div>
    </>
  );
};

export default Calendario;
