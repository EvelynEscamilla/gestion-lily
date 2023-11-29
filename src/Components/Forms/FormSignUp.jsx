import React, { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import useForm from "../../hooks/useForm";
import Boton from "../boton/Boton";
import TextField from "../TextField/TextField";
import BtnLink from "../btnLink/BtnLink";
import { useState } from "react";

const FormSignUp = () => {
  const { signUp } = useAuth();
  const { formData, handleFormDataChange } = useForm([]);
  const [emailTextError, setEmailTextError] = useState('')
  const [passwordTextError, setPasswordTextError] = useState('')

  const findEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const wellPassword = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(?=.{8,16})/

  const emailErrorMSG = "El correo no es válido."
  const passwordErrorMSG = "La contraseña debe contener mínimo de 8 caractares, una mayúscula, un caracter especial y un número"
  useEffect(() => {
    if (formData !== null) {
      dataFieldCheck(event)
    }

  }, [formData])


  const dataFieldCheck = (event) => {
    const { name, value } = event.target
    if (name === 'email') {
      if (!value.match(findEmail) && value.trim() !== '') setEmailTextError(emailErrorMSG)
      else setEmailTextError('')
    }
    else if (name === 'password') {
      if (!value.match(wellPassword) && value.trim() !== '') setPasswordTextError(passwordErrorMSG)
      else setPasswordTextError('')
    }
  }


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
      className="w-full bg-azulNav bg-opacity-70 lg:bg-opacity-90 text-center p-8 py-2 lg:w-1/2 flex flex-col justify-center items-center"
    >
      <img
        className="lg:w-1/2 mx-auto py-3 w-3/4 "
        src="Images/Login/Lily-hor.png"
      ></img>
      <p className=" text-3xl py-3">Crea una cuenta en nuestro sitio</p>
      <div className=" w-full justify-center items-center flex">
        <div className=" lg:w-4/5 block">
          <TextField
            onChange={handleFormDataChange}
            name="nombreCompleto"
            type="text"
            placeholder="Nombre Completo"
          />
          <TextField
            onChange={handleFormDataChange}
            name="telefono"
            type="number"
            placeholder="Numero de Celular"
          />
          <TextField
            onChange={handleFormDataChange}
            name="email"
            type="email"
            placeholder="Correo electronico"
          />
          {emailTextError && (
            <p className="text-red-500 text-xs">{emailTextError}</p>
          )}
          <TextField
            onChange={handleFormDataChange}
            name="password"
            type="password"
            placeholder="Contraseña"
          />
          {passwordTextError && (
            <p className="z-30 text-red-500 text-center text-xs -translate-y-2">{passwordTextError}</p>
          )}
          <TextField
            onChange={handleFormDataChange}
            name="passwordConfirmation"
            type="password"
            placeholder="Confirmar Contraseña"
          />

        </div>
      </div>

      <p className="texto-fuente">Utiliza mínimo ocho caracteres combinados</p>
      <p className="texto-fuente">Letras, números y símbolos</p>
      <div className="flex py-3 w-full">
        <div className=" w-1/2 justify-between ">
          <BtnLink BG="morado" TC="white" direccion="/gestion-lily/login">
            Iniciar Sesion
          </BtnLink>
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

