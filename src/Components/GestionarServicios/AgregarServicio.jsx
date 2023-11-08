import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import logo from "../../assets/logosolito.svg";

const AgregarServicio = ({ handleScreen }) => {

  return (
    <>
      <Navbar handleScreen={handleScreen}></Navbar>
      <div>
        <section className="p-6  text-black">
          <form
            action=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-azulClaro">
              <div className=" col-span-full lg:col-span-1 justify-center ">
                <div className="flex flex-col  h-full">
                  <div className=" items-center space-x-2 justify-center text-center">
                    <img src={logo} alt="" className=" w-full  " />
                  </div>
                  <div className="flex h-full justify-center items-center">
                    <button
                      type="button"
                      className="px-4 py-2 rounded-3xl  inline-block bg-morado text-white text-xl"
                    >
                      Cambiar
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-xl">Nombre del Servicio</label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2 "
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-xl">Precio</label>
                  <input
                    id="precio"
                    type="text"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2 "
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-xl">Tipo del Servicio</label>
                  <input
                    id="tipo"
                    type="email"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2 "
                  />
                </div>
                <div className="col-span-full">
                  <label className="text-xl">Descripcion del Servicio</label>
                  <textarea
                    id="bio"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 p-2 "
                  ></textarea>
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label className="text-xl">Duracion</label>
                  <input
                    id="duracion"
                    type="text"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label className="text-xl">Numero Maximo de Personas</label>
                  <input
                    id="max"
                    type="text"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-2 relative">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-3xl   inline-block bg-morado text-white text-xl absolute bottom-0 w-full"
                  >
                    Editar
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AgregarServicio;
