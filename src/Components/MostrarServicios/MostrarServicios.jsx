import "./MostrarServicios.css";
import Galeria from "../Galeria/Galeria";
import GaleriaTipos from "../Galeria/GaleriaTipos";
import imagenes from "../Imagenes/Imagenes";
import ImagenesTipos from "../Imagenes/ImagenesTipos";
import Servicios from "../Servicios/Servicios";

import { useState } from "react";
export const MostrarServicios = () => {
  const primera = (imagenes[0])

  const [nombre, setNombre] = useState(primera.nombre);
  const [descripcion, setdescripcion] = useState(primera.descripcion);
  const [precio, setprecio] = useState(primera.precio);
  const [imagenSer, setimagenSer] = useState(primera.imagen);



  const handleDFC = (data) => {
    setNombre(data.nombre);
    setdescripcion(data.descripcion)
    setprecio(data.precio)
    setimagenSer(data.imagen)
    console.log("Datos recibidos desde Mostrar Servicios", data);
  };

  return (
    <div className="flex justify-center">
      <div className=" w-1/2 p-3 pl-20">
        <div>
          <GaleriaTipos imagenesTipos={ImagenesTipos} />
        </div>

        <div className=" grid grid-cols-3 place-content-center py-2">
          {imagenes.map((item, index) => (
            <Servicios
              key={index}
              sendDataToParent={handleDFC}
              item={item}
            ></Servicios>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <div className="p-3 pr-14">
          <div className=" py-4 flex justify-center items-center">
          <img
              src={imagenSer}
              alt="Mi Imagen"
              className=" h-72 object-cover rounded-3xl"
            />
          </div>
          <div>
            <p className=" text-6xl py-2"> {nombre}</p>
          </div>
          <div>
            <p className=" text-lg py-2 leading-none">
              {descripcion}
            </p>
          </div>
          <div className="flex flex-row justify-end h-14 items-center py-2">
            <div>
              <p className=" text-3xl px-10">{precio}</p>
            </div>
            <button className=" bg-turqueza rounded-3xl px-10 py-2 text-xl text-white">
              RESERVA YA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
