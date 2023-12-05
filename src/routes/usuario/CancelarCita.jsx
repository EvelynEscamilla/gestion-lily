import Programadas from "../../Components/citas/CitasAgendadas";
import { useAuth } from '../../context/authContext';
import useHistorial from "../../hooks/useHistorial";
import React, { useState} from 'react';

const Advertencia = () => {
  return (
    <>
      <div className="flex items-center lg:mt-64 w-full h-[8rem] lg:mb-20 mb-5 text-justify border-2 border-azul bg-azulNav">
        <p className="text-2xl px-6 cursor-pointer" >
          Recuerda cancelar tu cita con al menos un día de anticipación
        </p>
      </div>
    </>
  );
};


const CancelarCita = () => {
  return (
    <>
      <div className="flex justify-center w-1/2 ml-8 mt-10">
        <p className="font-medium justify-center text-4xl">Citas programadas</p>
      </div>
      <div className="lg:flex grid grid-rows-1">
        <div className="w-full">
          <Programadas />
        </div>
        <div className="w-full lg:w-1/2 lg:mr-11"> 
          <Advertencia />
        </div>
      </div>
    </>
  );
};

export default CancelarCita;