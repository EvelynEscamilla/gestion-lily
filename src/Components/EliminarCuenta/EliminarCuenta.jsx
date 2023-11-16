import React from 'react'
import { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PerfilCliente = ({ handleScreen }) => {
    // Estado para almacenar el valor del input
    const [NombreUsuario, setValorNombre] = useState('');
    const [Contraseña, setValorContraseña] = useState('');


    // Función para manejar cambios en el input
    const handleChangeNom = (event) => {
        setValorNombre(event.target.value);
    };

    const handleChangeContraseña = (event) => {
        setValorContraseña(event.target.value);
    };


    return (
        <>
            <body className="bg-gray-100 flex justify-center items-center h-screen">
                <div className="bg-white rounded-lg p-4 shadow-lg items-center">
                    <div className='flex items-center p-4'>
                        
                        <div className="ml-4 text-white bg-morado px-5 py-2 rounded-md ">
                            <div className='flex'>
                                <div className=''>
                                    <p className="text-xl   font-bold">Nombre de usuario a eliminar</p>
                                    <div className='pt-2'>
                                        <input
                                            className="w-[300px] text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                                            type="text"
                                            placeholder='nombre de usuario'
                                            onChange={handleChangeNom}
                                            value={NombreUsuario}
                                        ></input>
                                    </div>
                                </div>
                                <div className='ml-4'>
                                    <span className="text-xl pr-2 font-bold">Contraseña</span>
                                    <div className='pt-2'>
                                        <input
                                            className="w-[300px] text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                                            type="text"
                                            placeholder='Contraseña'
                                            onChange={handleChangeContraseña}
                                            value={Contraseña}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-4">
                        <div className='text-left'>
                            <input
                                type="submit"
                                value="Cancelar"
                                className="text-[20px] text-white bg-blue-500 m-2 px-4 py-2 rounded-full cursor-pointer"
                            />
                        </div>
                        <div className='text-right'>
                            <input
                                type="submit"
                                value="Eliminar"
                                className="text-[20px] text-white bg-red-600 m-2 px-4 py-2 rounded-full cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default PerfilCliente