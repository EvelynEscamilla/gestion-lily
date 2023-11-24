import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calendario = () => {
  return (
    <>
      <div className=" w-full lg:flex sm:block">
        <div className=" lg:w-1/2  bg-azulNav">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </div>
        <div className=" lg:w-2/6 bg-blue-200">Calendario</div>
        <div className="lg:w-1/6 bg-slate-400">Calendario</div>
      </div>
    </>
  );
};

export default Calendario;
