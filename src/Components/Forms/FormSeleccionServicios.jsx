import React, { useState } from "react";
import BotonCalendario from "../boton/BotonCalendario";
import useServicios from "../../hooks/useServicios";
import { getUser } from "../../controllers/user.controller";

const FormSeleccionServicios = ({ actualizarServicio, actualizarPrecio }) => {
  const { serviciosPrecioCor } = useServicios();
  const { serviciosPrecioFac } = useServicios();
  const [seleccionado, setSeleccionado] = useState(null);
  const [precio, setPrecio] = useState(null);
  const servCor = serviciosPrecioCor;
  const servFac = serviciosPrecioFac;
  const handleSeleccion = (servicio) => {
    setSeleccionado(servicio.nombre);
    setPrecio(servicio.precio)
  };
  const handleActualizarServicio = () => {
    actualizarServicio(seleccionado);
    actualizarPrecio(precio);
  };

  return (
    <div className="flex items-center lg:flex justify-center">
      <div className="w-[40rem] bg-azulNav rounded-lg border-2 border-azul">
        <div className="flex justify-center bg-azulClaro text-white font-bold">
          <label className="mt-2 text-2xl">Servicios disponibles:</label>
        </div>
        <div className="flex">
          <label className="mt-4 w-1/2 border-2 flex justify-center bg-azul text-white text-bold">
            Corporales
          </label>
          <label className="mt-4 w-1/2 border-2 flex justify-center bg-azul text-white text-bold">
            Faciales
          </label>
        </div>
        <div className="flex">
        <div className="mt-2 w-1/2">
          <div className="overflow-auto h-[20rem]">
            {servCor.map((servicio, index) => (
              <div className="flex justify-left ml-6" key={index}>
                <label className="p-2 text-justify">
                  <input
                    type="radio"
                    name="grupoServicios"
                    value={servicio.nombre}
                    onChange={() => handleSeleccion(servicio)}
                    checked={servicio.nombre === seleccionado}
                  />
                  {servicio.nombre}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 w-1/2">
          <div className="overflow-auto h-[20rem]">
            {servFac.map((servicio, index) => (
              <div className="flex justify-left ml-6" key={index}>
                <label className="p-2 text-justify">
                  <input
                    type="radio"
                    name="grupoServicios"
                    value={servicio.nombre}
                    onChange={() => handleSeleccion(servicio)}
                    checked={servicio.nombre === seleccionado}
                  />
                  {servicio.nombre}
                </label>
              </div>
            ))}
          </div>
        </div>
        </div>
        <BotonCalendario BG="turqueza" TC="white" oC={handleActualizarServicio}>
          Guardar Servicio
        </BotonCalendario>
      </div>
    </div>
  );
};

export default FormSeleccionServicios;
