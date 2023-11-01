import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import logo from "../../assets/logosolito.svg";

const AgregarServicio = ({ handleScreen }) => {
  return (
    <>
      <div>
        <section className="p-6  text-black">
          <form
            action=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-azulClaro">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <label className="text-sm">Imagen</label>
                <div className=" items-center space-x-2 justify-center text-center">
                  <img src={logo} alt="" className=" w-full  " />
                  <div className="p-3">
                    <button
                      type="button"
                      className="px-4 py-2 rounded-3xl   inline-block bg-morado text-white"
                    >
                      Cambiar
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Nombre del Servicio</label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Nombre del Servicio"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Precio</label>
                  <input
                    id="precio"
                    type="text"
                    placeholder="Precio"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Tipo del Servicio</label>
                  <input
                    id="tipo"
                    type="email"
                    placeholder="Tipo del Servicio"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                  />
                </div>
                <div className="col-span-full">
                  <label className="text-sm">Descripcion del Servicio</label>
                  <textarea
                    id="bio"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 p-2"
                  ></textarea>
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label className="text-sm">Duracion</label>
                  <input
                    id="duracion"
                    type="text"
                    placeholder="Duracion"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label className="text-sm">Numero Maximo de Personas</label>
                  <input
                    id="max"
                    type="text"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label className="text-sm">Numero</label>
                  <input
                    id="numero"
                    type="text"
                    placeholder="#"
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </section>
        <div class="relative inline-block text-left">
          <div>
            <button
              type="button"
              class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Options
              <svg
                class="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default AgregarServicio;
