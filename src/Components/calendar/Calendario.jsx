import { useState } from "react";
import Calendar from "react-calendar";

const Calendario = () => {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    
    setValue(nextValue);
  }
  return (
    <>
      <div className="  flex justify-center lg:p-10 sm:p-5 py-3">
        <div className="w-fit  rounded-lg border-2 border-azul  bg-azulNav  flex flex-col text-center  ">
          <div className=" bg-azul">
            <p className=" font-medium text-xl p-3">
              Selecciona la fecha de tu cita
            </p>
          </div>
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </>
  );
};

export default Calendario;
