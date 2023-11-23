import React from 'react'
import { useState } from 'react';

const EditarCliente = () => {
    const [NombreUsuario, setValorNombre] = useState('Nombre de usuario cool');
    const [CorreoElectronico, setValorCorreo] = useState('CorreoElectronico@Gmail.com');
    const [NumeroTelefono, setValorNumero] = useState('4412345678');
    const [Contraseña, setValorContraseña] = useState('');
    const [ConfContraseña, setValorConfContraseña] = useState('');

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
            <body className="bg-gray-100 lg:flex justify-center items-center h-[200%] lg:h-screen ">
                <div className="bg-white rounded-lg  p-1 lg:p-3 shadow-lg items-center w-sreen">
                    <div className='grid grid-rows-1 gap-y-3 lg:flex items-center p-4'>
                        <p>Perfil</p>
                        <div className=" lg:ml-4 text-white bg-morado px-2 lg:px-5 lg:py-2 rounded-md items-center justify-center text-center">
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
                            <div className=' lg:text-left '>
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

                            <div className='lg:flex grid grid-rows-2'>
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
                                <div className='lg:ml-4'>
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

export default EditarCliente