import Programadas from "../../Components/citas/CitasAgendadas";
import { useAuth } from "../../context/authContext";
import useHistorial from "../../hooks/useHistorial";
import AdministrarCitas from "../../Components/citas/AdministrarCitas";
import React, { useState } from "react";

const CancelarCita = () => {
  const { citas } = useHistorial();
  const cita = citas;
  const auth = useAuth();
  const cliente = auth.userData.email;

  const citasFiltradas = cita.filter((item) => {
    const estadoCita = item.Estado;

    return (
      (estadoCita === "en espera" || estadoCita === "aceptada") &&
      item.Correo === cliente
    );
  });

  return (
    <>
      <div className="lg:flex justify-center pt-10 h-fit ">
        <div className=" lg:w-1/2 flex flex-col">
          <p className="font-medium flex justify-center text-4xl ">
            Citas solicitadas
          </p>
          <div className="rounded-2xl border-azulClaro border-2 justify-center w-[90%] h-[35rem] bg-azulNav lg:ml-8 ml-auto mr-auto mt-5 mb-20 overflow-hidden">
            <div className="flex justify-items-center lg:mb-5 mb-2"></div>

            <div className="scroll-m-0 overflow-y-scroll h-full ">
              {citasFiltradas.map((item, index) => (
                <AdministrarCitas key={index} item={item} aceptada={true} />
              ))}
              
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col  items-center justify-center ">
          <div className=" border-2 border-azul bg-azulNav w-3/4 p-5 rounded-3xl">
            <p className="text-2xl px-6 cursor-pointer">
              Recuerda cancelar tu cita con al menos un día de anticipación
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelarCita;
