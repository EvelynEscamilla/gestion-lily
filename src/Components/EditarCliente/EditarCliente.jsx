import React from 'react'
import { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Perfil from '../../assets/PerfilCliente/IMG_Perfil.jpg'

const PerfilCliente = ({ handleScreen }) => {
    // Estado para almacenar el valor del input
    const [NombreUsuario, setValorNombre] = useState('Nombre de usuario cool');
    const [CorreoElectronico, setValorCorreo] = useState('CorreoElectronico@Gmail.com');
    const [NumeroTelefono, setValorNumero] = useState('4412345678');
    const [Contraseña, setValorContraseña] = useState('');
    const [ConfContraseña, setValorConfContraseña] = useState('');

    // Función para manejar cambios en el input
    const handleChangeNom = (event) => {
        setValorNombre(event.target.value);
    };

    const handleChangeCorr = (event) => {
        setValorCorreo(event.target.value);
    };

    const handleChangeNum = (event) => {
        setValorNumero(event.target.value);
    };

    const handleChangeCon = (event) => {
        setValorContraseña(event.target.value);
    };

    const handleChangeConf = (event) => {
        setValorConfContraseña(event.target.value);
    };

    return (
        <>
            <body className="bg-gray-100 flex justify-center items-center h-screen">
                <div className="bg-white rounded-lg p-4 shadow-lg items-center">
                    <div className='flex items-center p-4'>
                        <div className='items-center text-center'>
                            <img src={Perfil} className="hover:-translate-y-1 hover:scale-110 duration-200 border-[5px] border-morado w-64 h-64 rounded-full" alt="Imagen de perfil" />
                            <input className="pt-4" type="file" name="archivo" id="archivo" accept=".jpg, .jpeg, .png"></input>
                        </div>
                        <div className="ml-4 text-white bg-morado px-5 py-2 rounded-md ">
                            <div className='flex'>
                                <div className=''>
                                    <p className="text-xl   font-bold">Modificar Nombre de usuario</p>
                                    <div className='pt-2'>
                                        <input
                                            className="w-[300px] text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                                            type="text"
                                            placeholder='Nuevo nombre de usuario'
                                            onChange={handleChangeNom}
                                            value={NombreUsuario}
                                        ></input>
                                    </div>
                                </div>
                                <div className='ml-4'>
                                    <span className="text-xl pr-2 font-bold">Modificar Correo Electronico</span>
                                    <div className='pt-2'>
                                        <input
                                            className="w-[300px] text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                                            type="text"
                                            placeholder='Nuevo correo'
                                            onChange={handleChangeCorr}
                                            value={CorreoElectronico}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className=' text-left'>
                                <span className="text-xl   font-bold">Modificar Numero de Telefono</span>
                                <div className='pt-2'>
                                    <input
                                        className="w-[300px] text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                                        type="text"
                                        placeholder='Nuevo numero de telefono'
                                        onChange={handleChangeNum}
                                        value={NumeroTelefono}
                                    ></input>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className=''>
                                    <p className="text-xl   font-bold">Modificar Nombre de usuario</p>
                                    <div className='pt-2'>
                                        <input
                                            className="w-[300px] text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                                            type="text"
                                            placeholder='Nueva contraseña'
                                            onChange={handleChangeCon}
                                            value={Contraseña}
                                        ></input>
                                    </div>
                                </div>
                                <div className='ml-4'>
                                    <span className="text-xl   font-bold">Confirmar contraseña</span>
                                    <div className='pt-2'>
                                        <input
                                            className="w-[300px] text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                                            type="text"
                                            placeholder='Confirmar contraseña'
                                            onChange={handleChangeConf}
                                            value={ConfContraseña}
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
                                className="text-[20px] text-white bg-red-600 m-2 px-4 py-2 rounded-full cursor-pointer"
                            />
                        </div>
                        <div className='text-right'>
                            <input
                                type="submit"
                                value="Guardar"
                                className="text-[20px] text-white bg-morado m-2 px-4 py-2 rounded-full cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default PerfilCliente