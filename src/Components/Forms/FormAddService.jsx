import React from 'react'
import InputImage from "../../Components/inputImage/InputImage";
import Boton from "../../Components/boton/Boton";
import useForm from '../../hooks/useForm'
import { postServicio } from '../../controllers/servicios.controller'


const FormAddService = () => {

  //Cuidar ids de labels e inputs
  //Placeholder
  //Evitar decimales

  const { formData, handleFormDataChange, handleFormFileChange, resetForm } = useForm()

  const handleSubmit = async (e) => {
    e.preventDefault()

    //Funcion de subir
    await postServicio(formData)

    resetForm()
    e.target.reset()
  }


  return (
    <section className="p-6  text-black">
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-azulClaro">
          <div className=" col-span-full lg:col-span-1 justify-center ">
            <div className="flex flex-col  h-full">
              <div className=' lg:w-full h-full w-full '>
                <InputImage onChange={handleFormFileChange} id={0} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="text-xl">Nombre del Servicio</label>
              <input
                onChange={handleFormDataChange}
                name='nombre'
                id="nombre"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-xl">Precio</label>
              <input
                onChange={handleFormDataChange}
                name='precio'
                id="precio"
                min="0"
                type="number"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor='tipo' className="text-xl">Tipo del Servicio</label>
              <select defaultValue={"0"} onChange={handleFormDataChange} name="tipo" className='text-xl' id="tipo">
                <option value={"0"} hidden></option>
                <option value="Corporal">Corporal</option>
                <option value="Facil">Facial</option>
              </select>
            </div>
            <div className="col-span-full">
              <label className="text-xl">Descripcion del Servicio</label>
              <textarea
                onChange={handleFormDataChange}
                name='descripcion'
                id="descripcion"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 p-2 "
              ></textarea>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-xl">Duracion (minutos)</label>
              <input
                onChange={handleFormDataChange}
                name='duracion'
                id="duracion"
                type="number"
                min="0"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-xl">Numero Maximo de Personas</label>
              <input
                onChange={handleFormDataChange}
                name='maximoClientes'
                id="maximoClientes"
                type="number"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2 relative w-full">
              <div className="absolute bottom-0 space-x-1 w-full flex flex-col">
                <Boton BG="morado" TC="white">
                  Agregar
                </Boton>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default FormAddService