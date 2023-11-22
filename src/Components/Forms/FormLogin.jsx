import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import useForm from "../../hooks/useForm";
import Boton from "../boton/Boton";
import TextField from "../TextField/TextField";

const FormLogin = () => {
  const { signUp } = useAuth();
  const { formData, handleFormDataChange } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      nombreCompleto: formData.nombreCompleto,
      telefono: formData.telefono,
      email: formData.email,
    };
    await signUp(userData, formData.email, formData.password);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[100%] bg-azulNav bg-opacity-70 lg:bg-opacity-90 text-center p-8 lg:w-1/2"
    >
      <img
        className="lg:w-1/2 mx-auto py-7 w-3/4 "
        src="Images/Login/Lily-hor.png"
      ></img>
      <p className=" text-3xl py-3">Inicio de Sesión</p>
      <div className=" w-full justify-center items-center flex">
        <div className=" lg:w-4/5 block">
          <TextField name="Correo" type="email" placeholder="Correo" />
          <TextField name="Contra" type="password" placeholder="Contraseña" />
        </div>
      </div>

      <p className="texto-fuente text-center py-3 md:text-base text-turqueza lg:text-xl">
        <a href="">¿Has olvidado tu contraseña?</a>
      </p>
      <div className="flex py-3">
        <div className=" w-1/2 ">
          <Link to="/gestion-lily/crear-cuenta">
            <Boton BG="" TC="turqueza">
              Crear Cuenta
            </Boton>
          </Link>
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
