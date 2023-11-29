import React from 'react'
import { useState } from 'react';
import Boton from '../boton/Boton';


const FormEditAdminInfo = () => {
    const [NombreUsuario, setValorNombre] = useState('Nombre de usuario cool');
    const [CorreoElectronico, setValorCorreo] = useState('CorreoElectronico@Gmail.com');
    const [Contraseña, setValorContraseña] = useState('');
    const [ConfContraseña, setValorConfContraseña] = useState('');

    const handleChangeNom = (event) => {
        setValorNombre(event.target.value);
    };

    const handleChangeCorr = (event) => {
        setValorCorreo(event.target.value);
    };

    const handleChangeCon = (event) => {
        setValorContraseña(event.target.value);
    };

    const handleChangeConf = (event) => {
        setValorConfContraseña(event.target.value);
    };

    return (
        <>
            <form className="bg-gray-100 flex flex-col justify-center items-center h-[200%] lg:h-screen ">
                <div className="bg-white rounded-lg pb-2 lg:p-10 shadow-lg ">

                    <div className="  text-white bg-morado px-2 lg:px-5 lg:py-2 rounded-md items-center justify-center text-center">
                        <div className='lg:flex grid grid-rows-2'>
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
                            <div className='lg:ml-4'>
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
                        
                        <div className='lg:flex grid grid-rows-2'>
                            <div className=''>
                                <p className="text-xl   font-bold">Nueva contraseña</p>
                                <div className='pt-2'>
                                    <input
                                        className="w-[300px] text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                                        type="password"
                                        placeholder='Nueva contraseña'
                                        onChange={handleChangeCon}
                                        value={Contraseña}
                                    ></input>
                                </div>
                            </div>
                            <div className='lg:ml-4'>
                                <span className="text-xl   font-bold">Confirmar contraseña</span>
                                <div className='pt-2'>
                                    <input
                                        className="w-[300px] text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                                        type="password"
                                        placeholder='Confirmar contraseña'
                                        onChange={handleChangeConf}
                                        value={ConfContraseña}
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center px-4 pt-2">
                        <div className='text-left'>
                            <Boton BG="red-600" TC="white">
                                Cancelar
                            </Boton>
                        </div>
                        <div className='text-right'>
                        <Boton BG="morado" TC="white">
                                Guardar
                            </Boton>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormEditAdminInfo