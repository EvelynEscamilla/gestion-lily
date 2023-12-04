import React, { useState, useEffect } from 'react';
import InputImage from "../../Components/inputImage/InputImage";
import Boton from "../../Components/boton/Boton";
import { putServicio, updateServicio } from '../../controllers/servicios.controller';
import { deleteServicio } from '../../controllers/servicios.controller';

import useServicio from '../../hooks/useServicio'
import useForm from '../../hooks/useForm';

const FormUpdateService = ({ idServicio }) => {

  const { formData, handleFormDataChange, handleFormFileChange, setInitialState } = useForm()
  useServicio(idServicio, setInitialState)


  const handleSubmit = async (e) => {
    e.preventDefault()
    await putServicio(idServicio, formData)

  }

  return (
    <section className="p-6 text-black">
      <form onSubmit={handleSubmit} action="" className="container flex flex-col mx-auto space-y-12">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-azulClaro">
          <div className="col-span-full lg:col-span-1 justify-center">
            <div className="flex flex-col h-full">
              <div className='lg:w-full h-full'>
                <InputImage onChange={handleFormFileChange} id={0} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="text-xl">Nombre del Servicio</label>
              <input
                id="nombre"
                type="text"
                name='nombre'
                placeholder=""
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                value={formData?.nombre}
                onChange={handleFormDataChange}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-xl">Precio</label>
              <input
                id="precio"
                name='precio'
                type="text"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                value={formData?.precio}
                onChange={handleFormDataChange}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-xl">Tipo del Servicio</label>
              <select
                name='tipo'
                id="tipo"
                type="text"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                value={formData?.tipo}
                onChange={handleFormDataChange}
              >
                <option value="corporal">Corporal</option>
                <option value="facial">Facial</option>
              </select>
            </div>
            <div className="col-span-full">
              <label className="text-xl">Descripción del Servicio</label>
              <textarea
                name='descripcion'
                id="descripcion"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 p-2"
                value={formData?.descripcion}
                onChange={handleFormDataChange}
              ></textarea>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-xl">Duración</label>
              <input
                name='duracion'
                id="duracion"
                type="text"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                value={formData?.duracion}
                onChange={handleFormDataChange}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-xl">Número Máximo de Personas</label>
              <input
                name='maximoClientes'
                id="max"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                value={formData?.maximoClientes}
                onChange={handleFormDataChange}
              />
            </div>
          </div>
          <div className="col-span-full sm:col-span-2 relative w-full">
            <div className="absolute bottom-0 space-x-1 w-full flex">
              <button type='submit'>Actualizar</button>
              <button onClick={(e) => { e.preventDefault(); deleteServicio(idServicio) }}>Eliminar</button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default FormUpdateService;