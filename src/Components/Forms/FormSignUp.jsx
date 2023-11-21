import React from "react";
import { useAuth } from "../../context/authContext";
import useForm from "../../hooks/useForm";
import Boton from "../boton/Boton";
import TextField from "../TextField/TextField";

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
    <form onSubmit={handleSubmit} className="text-center w-4/5">
      <TextField
        name="ejemplo"
        type="text"
        placeholder="Nombre completo"
        onChange={handleFormDataChange}
      />
      <TextField
        name="ejemplo"
        type="tel"
        placeholder="Numero de celular"
        onChange={handleFormDataChange}
      />
      <TextField
        name="ejemplo"
        type="email"
        placeholder="Correo electronico"
        onChange={handleFormDataChange}
      />
      <TextField
        name="ejemplo"
        type="password"
        placeholder="Contraseña"
        onChange={handleFormDataChange}
      />
      <TextField
        name="ejemplo"
        type="password"
        placeholder="Confirmar Contraseña"
        onChange={handleFormDataChange}
      />
      <p className="texto-fuente">Utiliza mínimo ocho caracteres combinados</p>
      <p className="texto-fuente">Letras, números y símbolos</p>
      <div className="mt-4 justify-between flex px-4">
        <Boton BG="morado" TC="white">
          Cancelar
        </Boton>

        <Boton BG="morado" TC="white">
          Crear Cuenta
        </Boton>
      </div>
    </form>
  );
};

export default FormSignUp;
