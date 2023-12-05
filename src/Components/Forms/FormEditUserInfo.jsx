import React from 'react'
import { useState } from 'react';
import Boton from '../boton/Boton';
import useForm from '../../hooks/useForm';
import { putNombre} from '../../controllers/user.controller';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuth } from '../../context/authContext';

const FormEditClient = () => {
    const auth = useAuth();   
    const { formData, handleFormDataChange } = useForm()
    const [nomUsr, setValorNombre]=useState(auth.userData.nombreCompleto)
    const [correo, setValorCorreo]=useState(auth.userData.email)
    const [tel, setValorNumero]=useState(auth.userData.telefono)
    const a = getAuth();
    console.log(a.currentUser.uid);

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        await putNombre(a.currentUser.uid, formData)
        window.location.reload()
      }

    const handleChangeNom = (event) => {
        handleFormDataChange(event);
        setValorNombre(event.target.value);
       
    };

    const handleChangeCorr = (event) => {
        handleFormDataChange(event);
        setValorCorreo(event.target.value);
    };

    const handleChangeNum = (event) => {
        handleFormDataChange(event);
        setValorNumero(event.target.value);
    };

    const handleChangeCon = (event) => {
        handleFormDataChange(event);
        setValorContraseña(event.target.value);
    };

    const handleChangeConf = (event) => {
        handleFormDataChange(event);
        setValorConfContraseña(event.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit} action="" className="bg-gray-100 flex flex-col justify-center items-center h-[200%] lg:h-screen ">
                <div className="bg-white rounded-lg pb-2 lg:p-10 shadow-lg ">

                    <div className="  text-white bg-morado px-2 lg:px-5 lg:py-2 rounded-md items-center justify-center text-center">
                        <div className='lg:flex grid grid-rows-2'>
                            <div className=''>
                                <p className="text-xl   font-bold">Modificar Nombre de usuario</p>
                                <div className='pt-2'>
                                    <input
                                        className="w-[300px] text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                                        type="text"
                                        id="nombreCompleto"
                                        name="nombreCompleto"
                                        placeholder=''
                                        onChange={handleChangeNom}
                                        value={nomUsr}
                                    ></input>
                                </div>
                            </div>
                            <div className='lg:ml-4'>
                                <span className="text-xl pr-2 font-bold">Modificar Correo Electronico</span>
                                <div className='pt-2'>
                                    <input
                                        className="w-[300px] text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder='Nuevo correo'
                                        onChange={handleChangeCorr}
                                        value={correo}
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
                                    id="telefono"
                                    name="telefono"
                                    placeholder='Nuevo numero de telefono'
                                    onChange={handleChangeNum}
                                    value={tel}
                                ></input>
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
                                        onChange={handleFormDataChange}
                                        value={""}
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
                                        onChange={handleFormDataChange}
                                        value={""}
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
                        <Boton BG="morado" TC="white" type="submit">
                                Guardar
                            </Boton>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormEditClient