import React, { useState } from 'react';

const Citas = ({ListaCitas}) => {
  
    return (
        <>
        <div className="rounded-2xl border-azulClaro border-2 justify-center w-2/5 h-[35rem] bg-azulNav ml-8 mt-5 mb-20 overflow-hidden">
            <div className="flex justify-center bg-morado mb-5">
                <div className="p-2 mt-4 mb-4 flex items-center mx-2">
                    <p className="font-bold text-base text-white mr-2">FECHA </p>
                    <p className="font-bold text-base text-white mr-2"> |</p>
                    <p className="font-bold text-base text-white mr-2">  HORA</p>
                    <p className="font-bold text-base text-white mr-2"> |</p>
                    <p className="font-bold text-base text-white mr-2">CONTACTO</p>
                    <p className="font-bold text-base text-white mr-2"> |</p>
                    <p className="font-bold text-base text-white mr-2">CLIENTE</p>
                    <p className="font-bold text-base text-white mr-2"> |</p>
                    <p className="font-bold text-base text-white">SERVICIOS</p>
                </div>
            </div>
        <div className="scroll-m-0 overflow-y-scroll h-[30rem]"> 
            {ListaCitas.map(ListaCita => (
                <div>
                <div className="border-2 cursor-pointer border-azul rounded-2xl bg-white p-2 mb-2 mr-4 ml-4">
                    <div className="bg-white p-2 flex items-center mr-2">
                    <p className="text-justify text-base mr-2">{ListaCita.fecha}</p>
                        <p className="text-justify text-xl mr-2"> | </p>
                        <p className="text-justify text-base mr-2">{ListaCita.hora} </p>
                        <p className="text-justify text-xl mr-2"> | </p>
                        <p className="text-justify text-base mr-2">{ListaCita.contacto}  </p>
                        <p className="text-justify text-xl mr-2"> | </p>
                        <p className="text-justify text-base">{ListaCita.cliente}</p>
                    </div>
                    <div className="bg-white p-2 flex items-center mr-2">
                        <p className="text-justify text-base">{ListaCita.servicio}</p>
                    </div>
                </div>
                <div className="flex justify-end mr-4 mb-4">
                
                <button className="mr-4 border-2 rounded-2xl bg-white text-red-700 text-bold p-2">Rechazar</button> 
               
                
                <button className="mr-4 border-2 rounded-2xl bg-white text-lime-500 text-bold p-2">Aceptar</button> 
                
                </div>
                </div>

            ))} 
        </div>
        
        
    </div>
    </>
    );
  };

  const CitasA = ({Acept}) => {
  
    return (
        <>
        <div className="rounded-2xl border-azulClaro border-2 justify-center w-2/5 h-[35rem] bg-azulNav ml-8 mt-5 mb-20 overflow-hidden">
            <div className="flex justify-center bg-morado mb-5">
                <div className="p-2 mt-4 mb-4 mx-4 flex items-center mr-6">
                    <p className="font-bold text-xl text-white">Datos de la cita</p>
                </div>
            </div>
        <div className="scroll-m-0 overflow-y-scroll h-[30rem]"> 
            {Acept.map(Acept => (
                <div>
                <div className="border-2 cursor-pointer border-azul rounded-2xl bg-white p-2 items-center mb-2 mr-2 ml-2">
                    <div className="bg-white p-2 flex items-center mr-2">
                        <p className="text-justify text-base mr-2">{Acept.fecha}</p>
                        <p className="text-justify text-lg mr-2"> | </p>
                        <p className="text-justify text-base mr-2">{Acept.hora} </p>
                        <p className="text-justify text-lg mr-2"> | </p>
                        <p className="text-justify text-base mr-2">{Acept.contacto}  </p>
                        <p className="text-justify text-lg mr-2"> | </p>
                        <p className="text-justify text-base">{Acept.cliente}</p>
                    </div>
                    <div className="bg-white p-2 flex items-center mr-2">
                        <p className="text-justify text-base">{Acept.servicio}</p>
                    </div>
                </div>
                <div className="flex justify-end mr-4 mb-4">
                <button className="mr-4 border-2 rounded-2xl bg-white text-red-700 text-bold p-2">Cancelar</button> 
                </div>
                </div>

            ))} 
        </div>
        
        
    </div>
    </>
    );
  };

  const ListadoCitas = () => {
    const ListaCitas = [
        { id: 1, fecha: '18/10/2023', hora: '10:00 am', cliente: 'Ana Rodriguez', contacto: 1234567890,servicio: 'Masaje'},
        { id: 2, fecha: '23/10/2023', hora: '13:00 pm', cliente: 'Sofía Maldonado', contacto: 1234567890,servicio: 'Masaje, Tratamiento de acné'},
        { id: 3, fecha: '18/10/2023', hora: '10:00 am', cliente: 'Ana Rodriguez', contacto: 1234567890,servicio: 'Masaje, botox, eliminación de tatuajes'},
        { id: 4, fecha: '18/10/2023', hora: '10:00 am', cliente: 'Ana Rodriguez', contacto: 1234567890,servicio: 'Masaje'},
        { id: 5, fecha: '18/10/2023', hora: '10:00 am', cliente: 'Ana Rodriguez', contacto: 1234567890,servicio: 'Masaje'},
        { id: 6, fecha: '18/10/2023', hora: '10:00 am', cliente: 'Ana Rodriguez', contacto: 1234567890,servicio: 'Masaje'},
        { id: 7, fecha: '18/10/2023', hora: '10:00 am', cliente: 'Ana Rodriguez', contacto: 1234567890,servicio: 'Masaje'},
        { id: 8, fecha: '18/10/2023', hora: '10:00 am', cliente: 'Ana Rodriguez', contacto: 1234567890,servicio: 'Masaje'}
    ];

    return <Citas ListaCitas={ListaCitas} />;
};

const Aceptadas = () => {
    const Acept = [
        { id: 1, fecha: '18/10/2023', hora: '10:00 am', cliente: 'Ana Rodriguez', contacto: 1234567890,servicio: 'Masaje, Tratamiento de acné'},
        { id: 2, fecha: '23/10/2023', hora: '13:00 pm', cliente: 'Sofía Maldonado', contacto: 1234567890,servicio: 'Masaje'},
        { id: 3, fecha: '18/10/2023', hora: '10:00 am', cliente: 'Ana Rodriguez', contacto: 1234567890,servicio: 'Valoración'},
        { id: 4, fecha: '18/10/2023', hora: '10:00 am', cliente: 'Ana Rodriguez', contacto: 1234567890,servicio: 'Masaje'},
        { id: 5, fecha: '18/10/2023', hora: '10:00 am', cliente: 'Ana Rodriguez', contacto: 1234567890,servicio: 'Masaje'},
        { id: 6, fecha: '18/10/2023', hora: '10:00 am', cliente: 'Ana Rodriguez', contacto: 1234567890,servicio: 'Masaje'}
    ];

    return <CitasA Acept={Acept} />;
};
  
  const GestionCitas = ({handleScreen}) => {
    return (
        <>
      <div className="flex justify-center">
      <div className="flex justify-center ml-6 w-2/5 mt-10"><p className="font-medium justify-center text-4xl">Citas solicitadas</p></div>
      <div className="mx-16"></div>
      <div className="flex justify-center w-2/5 mt-10"><p className="font-medium justify-center text-4xl">Citas aceptadas</p></div>
      </div>
      <div className="flex justify-center">
      <ListadoCitas/>
      <div className="mx-8"></div>
      <Aceptadas/>
      </div>
  
        </>
    );
  }

  export default GestionCitas;