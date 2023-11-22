import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import useForm from "../../hooks/useForm";
import Boton from "../boton/Boton";
import TextField from "../textField/TextField";

const FormSignUp = () => {
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
      <p className=" text-3xl py-3">Crea una cuenta en nuestro sitio</p>
      <div className=" w-full justify-center items-center flex">
        <div className=" lg:w-4/5 block">
          <TextField name="nombreCompleto" type="text" placeholder="Nombre Completo" />
          <TextField name="telefono" type="tel" placeholder="Numero de Celular" />
          <TextField name="email" type="email" placeholder="Correo electronico" />
          <TextField name="password" type="password" placeholder="Contraseña" />
          <TextField name="passwordOt" type="password" placeholder="Confirmar Contraseña"
          />
        </div>
      </div>

      <p className="texto-fuente">Utiliza mínimo ocho caracteres combinados</p>
      <p className="texto-fuente">Letras, números y símbolos</p>
      <div className="flex py-3">
        <div className=" w-1/2 ">
          <Link to="/gestion-lily/crear-cuenta">
            <Boton BG="morado" TC="white">
              Cancelar
            </Boton>
          </Link>
        </div>
        <div className=" w-1/2 ">
          <Boton BG="morado" TC="white" type="submit">
            Crear Cuenta
          </Boton>
        </div>
      </div>
    </form>
  );
};

export default FormSignUp;
