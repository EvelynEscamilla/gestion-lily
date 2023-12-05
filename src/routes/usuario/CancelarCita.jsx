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
  const { citas } = useHistorial();
  const cita=citas
  const auth = useAuth();
  const cliente = auth.userData.email;

  const citasFiltradas = cita.filter(item => {
    const estadoCita = item.Estado;
    
    return (estadoCita === "en espera" || estadoCita === "aceptada") && item.Correo === cliente;
    
  });

  return (
    <>
      <div className="flex justify-center w-1/2 ml-8 mt-10">
        <p className="font-medium justify-center text-4xl">Citas programadas</p>
      </div>
      <div className="lg:flex grid grid-rows-1">
        <div className="w-full">
        <div className="rounded-2xl border-2 border-azulClaro justify-center lg:w-[80%] w-screen h-[35rem] bg-azulNav lg:ml-8 mt-5 mb-20 overflow-hidden">
          <div className="flex justify-items-stretch">
            <div className="border-2 rounded-2xl bg-morado p-2 flex items-center lg:h-24 lg:w-full ">
            <p className="font-bold text-xl text-white ml-4 mr-4">NOMBRE </p>
              <p className="font-bold text-xl text-white ml-4 mr-4">FECHA </p>
              <p className="font-bold text-xl text-white ml-6 mr-12"> HORA </p>
              <p className="font-bold text-xl text-white ml-4"> SERVICIOS</p>
            </div>
          </div>
        <div className="scroll-m-0 overflow-y-scroll h-[30rem]"> 
        {citasFiltradas.map((item, index) => (
          <Programadas 
          key={index}
          item={item}
        />
        ))}
        </div>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:mr-11"> 
          <Advertencia />
        </div>
      </div>
    </>
  );
};

export default CancelarCita;