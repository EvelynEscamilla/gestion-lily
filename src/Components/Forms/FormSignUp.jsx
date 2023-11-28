import React from "react";
import { useAuth } from "../../context/authContext";
import { useState } from 'react';
import useForm from "../../hooks/useForm";
import Boton from "../boton/Boton";
import TextField from "../TextField/TextField";
import BtnLink from "../btnLink/BtnLink";
import ModCrearCuenta from "../modals/ModCrearCuenta";
import ModCrearCuentaFallida from "../modals/ModCrearCuentaFallida";


const FormSignUp = () => {
  const { signUp } = useAuth();
  const { formData, handleFormDataChange } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [showModalFailed, setShowModalFailed] = useState(false); // Estado para controlar la visualización del modal

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      nombreCompleto: formData.nombreCompleto,
      telefono: formData.telefono,
      email: formData.email,
    };

    try {
      await signUp(userData, formData.email, formData.password);
      // Si el registro es exitoso, mostramos el modal
      setShowModal(true);
    } catch (error) {
      // Manejo de errores si el registro falla
      setShowModalFailed(true);
      console.error('Error al registrar:', error);
    }
  };

  const closeModal = () => {
    // Función para cerrar el modal y resetear el estado
    setShowModal(false);
    // Aquí podrías realizar alguna otra lógica adicional después de cerrar el modal
  };

  const closeModalFailed = () => {
    // Función para cerrar el modal y resetear el estado
    setShowModalFailed(false);
    // Aquí podrías realizar alguna otra lógica adicional después de cerrar el modal
  };

  return (
    <>
    <form
    
      onSubmit={handleSubmit}
      className="w-full bg-azulNav bg-opacity-70 lg:bg-opacity-90 text-center p-8 lg:w-1/2 flex flex-col justify-center items-center"
    >
      <img
        className="lg:w-1/2 mx-auto py-7 w-3/4 "
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
            type="tel"
            placeholder="Numero de Celular"
          />
          <TextField
            onChange={handleFormDataChange}
            name="email"
            type="email"
            placeholder="Correo electronico"
          />
          <TextField
            onChange={handleFormDataChange}
            name="password"
            type="password"
            placeholder="Contraseña"
          />
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

    {/* Modal */}
    {showModal && (
        <ModCrearCuenta onClose={closeModal}>
          {/* Contenido del modal, por ejemplo un mensaje de éxito */}
          <p>¡La cuenta se registró correctamente!</p>
        </ModCrearCuenta>
      )}

{showModalFailed && (
        <ModCrearCuentaFallida onClose={closeModalFailed}>
          {/* Contenido del modal, por ejemplo un mensaje de éxito */}
          <p>¡La cuenta se registró correctamente!</p>
        </ModCrearCuentaFallida>
      )}
    </>
  );
};


export default FormSignUp;

