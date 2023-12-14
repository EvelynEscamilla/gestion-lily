import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Boton from '../boton/Boton';
import { useAuth } from '../../context/authContext';

const FormEditAdminInfo = () => {
    const auth = useAuth();
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
      <div className=" flex  items-center flex-col md:pt-60 pt-40 bg-gray-100 min-h-screen">
        
        <div className=" px-2 pt-5 w-full sm:w-11/12 md:w-10/12 lg:w-8/12">
          <div className=" px-4 md:py-5  border-2 rounded-2xl bg-white">
            <p className=" md:text-3xl text-2xl md:px-6 py-4 font-bold">Informacion Basica</p>
            <p className=" md:px-6 py-2">Encontrarás tu información de perfil. </p>
            <div className=" grid md:grid-cols-2">
              
              <div className=" py-3 border-b-2 md:border-b-0 md:px-6">
                <p className=" text-sm md:text-base">Nombre</p>
                <p className="md:text-xl w-full p-2  ">{auth.userData.nombreCompleto}</p>
              </div>

              <div className=" py-3 border-b-2 md:border-b-0 md:px-6">
                <p className=" text-sm md:text-base">Correo:</p>
                <p className="md:text-xl w-full p-2  ">{auth.userData.email}</p>
              </div>
              <div className=" py-3 border-b-2 md:border-b-0 md:px-6">
                <p className=" text-sm md:text-base">Telefono de Contacto:</p>
                <p className="md:text-xl w-full p-2  ">{auth.userData.telefono}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
        </>
    )
}

export default FormEditAdminInfo