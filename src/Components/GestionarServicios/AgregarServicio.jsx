import React from "react";

const AgregarServicio = () => {
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
      </div>
    </>
  );
};

export default AgregarServicio;
