import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const PerfilCliente = () => {
  const auth = useAuth();

  return (
    <>
      <div className=" flex  items-center flex-col md:pt-60 pt-40 bg-gray-100 min-h-screen">
        
        <div className=" px-2 pt-5 w-full sm:w-11/12 md:w-10/12 lg:w-8/12">
          <div className=" px-4 md:py-5  border-2 rounded-2xl bg-white">
            <p className=" md:text-3xl text-2xl md:px-6 py-4 font-bold">Informacion Basica</p>
            <p className=" md:px-6 py-2">Encontrarás tu información de perfil y las opciones para administrarla. </p>
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
            <div className=" flex md:justify-end w-full">
              <div className=" py-3  w-full flex items-center justify-between md:w-96 ">
                <Link to="/gestion-lily/Editar-Datos">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    Editar
                  </button>
                </Link>
                <Link to="/gestion-lily/Eliminar-Cuenta">
                  <button
                    value="Eliminar cuenta"
                    className="bg-red-600 text-white px-4 py-2 rounded-full flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    Borrar Cuenta
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilCliente;
