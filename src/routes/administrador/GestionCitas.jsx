import { useAuth } from '../../context/authContext';
import useHistorial from "../../hooks/useHistorial";
import React, { useState} from 'react';
import AdministrarCitas from "../../Components/citas/AdministrarCitas"
import CitasAceptadas from "../../Components/citas/CitasAceptadas"

const Citas = () => {
 
    const { citas } = useHistorial();
    const cita=citas

    const citasFiltradas = cita.filter(item => {
        const estadoCita = item.Estado;
        
        return estadoCita === "en espera" ;
        
    });

    return (
        <>
            <div className="rounded-2xl border-azulClaro border-2 justify-center w-[90%] h-[35rem] bg-azulNav lg:ml-8 ml-auto mr-auto mt-5 mb-20 overflow-hidden">
                <div className="flex justify-items-center lg:mb-5 mb-2">

                </div>
                
                <div className="scroll-m-0 overflow-y-scroll lg:h-[30rem] h-[100%] mb-11">
                {citasFiltradas.map((item, index) => (
                    <AdministrarCitas
                    key={index}
                    item={item}
                    aceptada={false}
                    />
                    ))}
                    <div className='mb-48 lg:mb-11'></div>
                </div>


            </div>
        </>
    );
};

const CitasA = () => {

    const { citas } = useHistorial();
    const cita=citas

    const citasFiltradasA = cita.filter(item => {
        const estadoCita = item.Estado;
        
        return estadoCita === "aceptada" ;
        
    });

    return (
        <>
            <div className="rounded-2xl border-azulClaro border-2 justify-center w-[90%] h-[35rem] bg-azulNav lg:ml-6 ml-auto mr-auto mt-5 mb-20 overflow-hidden">

            
                <div className="scroll-m-0 overflow-y-scroll h-[30rem]">
                {citasFiltradasA.map((item, index) => (
                    <AdministrarCitas
                    key={index}
                    item={item}
                    aceptada={true}
                    />
                    ))}
                    
                </div>


            </div>
        </>
    );
};





const GestionCitas = () => {
  
    return (
        <>
            <div className="lg:flex justify-center grid grid-rows-2 pt-10 ">
                <div className=' w-screen'>
                    <p className="font-medium flex justify-center text-4xl ">Citas solicitadas</p>
                    <Citas />
                </div>
                <div className=' w-screen'>
                    <p className="font-medium flex justify-center text-4xl ">Citas aceptadas</p>
                    <CitasA />
                </div>

            </div>

        </>
    );
}

export default GestionCitas;