import React from "react";
import { Link } from 'react-router-dom'
import { useAuth } from "../../context/authContext";
import useForm from "../../hooks/useForm";
import Boton from "../boton/Boton";
import TextField from "../TextField/TextField";
import BtnLink from "../btnLink/BtnLink";

const FormLogin = () => {
  const { logIn } = useAuth();
  const { formData, handleFormDataChange } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn(formData.email, formData.password);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-azulNav bg-opacity-70 lg:bg-opacity-90 text-center p-8 lg:w-1/2 flex flex-col justify-center items-center"
    >
      <img
        className="lg:w-1/2 mx-auto py-7 w-3/4 "
        src="Images/Login/Lily-hor.png"
      ></img>
      <p className=" text-3xl py-3">Inicio de Sesión</p>
      <div className=" w-full justify-center items-center flex">
        <div className=" lg:w-4/5 block">
          <TextField onChange={handleFormDataChange} name="email" type="email" placeholder="Correo" />
          <TextField onChange={handleFormDataChange} name="password" type="password" placeholder="Contraseña" />
        </div>
      </div>

      <Link to="/gestion-lily/RecuperarContraseña" className="texto-fuente font-medium text-center py-3 lg:text-base text-turqueza">
       ¿Has olvidado tu contraseña?
      </Link>
      <div className="flex py-3 w-full items-center">
        <div className=" w-1/2 ">
          
        <BtnLink BG="" TC="turqueza" direccion="/gestion-lily/crear-cuenta">
              Crear Cuenta
            </BtnLink>
          
        </div>
        <div className=" w-1/2 ">
          <Boton BG="morado" TC="white">
            Iniciar Sesion
          </Boton>
        </div>
      </div>
    </form>
  );
};

export default FormLogin;
