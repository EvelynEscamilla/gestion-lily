import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useForm from "../../hooks/useForm";
import {
  putNombre,
  putTelefono,
} from "../../controllers/user.controller";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../context/authContext";

const FormEditClient = () => {
  const auth = useAuth();
  const { formData, handleFormDataChange } = useForm();

  const [nomUsr, setValorNombre] = useState(auth.userData.nombreCompleto);

  const [tel, setValorNumero] = useState(auth.userData.telefono);
  const a = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.telefono) {
      await putTelefono(a.currentUser.uid, formData);
    }

    if (formData.nombreCompleto) {
      await putNombre(a.currentUser.uid, formData);
    }
    window.location.reload();
  };

  const handleChangeNom = (event) => {
    handleFormDataChange(event);
    setValorNombre(event.target.value);
  };


  const handleChangeNum = (event) => {
    handleFormDataChange(event);
    setValorNumero(event.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className=" flex  items-center flex-col md:pt-60 pt-40 bg-gray-100 min-h-screen"
      >
        {" "}
        <div className=" px-2 pt-5 w-full sm:w-11/12 md:w-10/12 lg:w-8/12">
          <div className=" px-4 md:py-5  border-2 rounded-2xl bg-white">
            <p className=" md:text-3xl text-2xl md:px-6 py-4 font-bold">
              Edita tus Datos
            </p>
            <p className=" md:px-6 py-2">
              Edita tu Nombre y numero de Telefono
            </p>
            <div className=" grid md:grid-cols-2">
              <div className=" py-3 border-b-2 md:border-b-0 md:px-6">
                <p className=" text-sm md:text-base">Nombre</p>
                <input
                  className="md:text-xl bg-azulNav w-full p-2 border-2 "
                  type="text"
                  id="nombreCompleto"
                  name="nombreCompleto"
                  placeholder=""
                  onChange={handleChangeNom}
                  value={nomUsr}
                />
              </div>

              <div className=" py-3 border-b-2 md:border-b-0 md:px-6">
                <p className=" text-sm md:text-base">Telefono de Contacto:</p>
                <input
                  className="md:text-xl bg-azulNav w-full p-2 border-2"
                  type="text"
                  id="telefono"
                  name="telefono"
                  placeholder="Nuevo numero de telefono"
                  onChange={handleChangeNum}
                  value={tel}
                />
              </div>
            </div>
            <div className=" flex md:justify-end w-full">
              <div className=" py-3  w-full flex items-center justify-between md:w-96 ">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full flex"
                >
                  Guardar
                </button>
                <Link to="/gestion-lily/perfil">
                  <button
                    value="Eliminar cuenta"
                    className="bg-red-600 text-white px-4 py-2 rounded-full flex"
                  >
                    Cancelar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormEditClient;
