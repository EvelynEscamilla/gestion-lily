import React, { useState, useEffect } from 'react';
import InputImage from "../../Components/inputImage/InputImage";
import Boton from "../../Components/boton/Boton";
import { updateServicio } from '../../controllers/servicios.controller';

const FormUpdateService = ({ servicioData }) => {
  const [nombre, setNombre] = useState(servicioData.nombre || '');
  const [precio, setPrecio] = useState(servicioData.precio || '');
  const [tipo, setTipo] = useState(servicioData.tipo || '');
  const [descripcion, setDescripcion] = useState(servicioData.descripcion || '');
  const [duracion, setDuracion] = useState(servicioData.duracion || '');
  const [max, setMax] = useState(servicioData.maximoClientes || '');  // Ajusta aquí

  useEffect(() => {
    console.log("Estructura de servicioData:", servicioData);
    setNombre(servicioData.nombre || '');
    setPrecio(servicioData.precio || '');
    setTipo(servicioData.tipo || '');
    setDescripcion(servicioData.descripcion || '');
    setDuracion(servicioData.duracion || '');
    setMax(servicioData.max || '');
  }, [servicioData]);

  const handleUpdateServicio = () => {
    console.log('ID del servicio :', servicioData.id);
    // Implementar lógica para actualizar el servicio con los datos del formulario
    const datosActualizados = {
      nombre,
      precio,
      tipo,
      descripcion,
      duracion,
      max,
    };

    updateServicio(servicioData.id, datosActualizados);
  };

  return (
    <section className="p-6 text-black">
      <form action="" className="container flex flex-col mx-auto space-y-12">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-azulClaro">
          <div className="col-span-full lg:col-span-1 justify-center">
            <div className="flex flex-col h-full">
              <div className='lg:w-full h-full'>
                <InputImage id={0} />
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
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-xl">Precio</label>
              <input
                id="precio"
                type="text"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-xl">Tipo del Servicio</label>
              <input
                id="tipo"
                type="text"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </div>
            <div className="col-span-full">
              <label className="text-xl">Descripción del Servicio</label>
              <textarea
                id="descripcion"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 p-2"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-xl">Duración</label>
              <input
                id="duracion"
                type="text"
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                value={duracion}
                onChange={(e) => setDuracion(e.target.value)}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-xl">Número Máximo de Personas</label>
              <input
                id="max"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2"
                value={max}
                onChange={(e) => setMax(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-full sm:col-span-2 relative w-full">
            <div className="absolute bottom-0 space-x-1 w-full flex">
            <button onClick={(e) => { e.preventDefault(); console.log("ID del servicio:", servicioData.id); handleUpdateServicio(); }}>Actualizar</button>
              <Boton BG="red-600" TC="white">
                Eliminar
              </Boton>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default FormUpdateService;