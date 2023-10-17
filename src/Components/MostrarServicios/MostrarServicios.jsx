import { useState } from "react";
import Servicios from "../Servicios/Servicios";
import ejemplo from "../../assets/ejemplo.svg";

import "./MostrarServicios.css";
import Galeria from "../Galeria/Galeria";
import GaleriaTipos from "../Galeria/GaleriaTipos";
import imagenes from "../Imagenes/Imagenes";
import ImagenesTipos from "../Imagenes/ImagenesTipos";
export const MostrarServicios = () => {
  return (
    <div className="flex justify-center">
      <div className=" w-1/2 p-3 pl-20">
        <div>
          <GaleriaTipos imagenesTipos={ImagenesTipos} />
        </div>

        <div>
          <Galeria imagenes={imagenes} />
        </div>
      </div>
      <div className="w-1/2">
        <div className="p-3 pr-14">
          <div className=" py-4 flex justify-center items-center">
            <img
              src={ejemplo}
              alt="Mi Imagen"
              className=" h-72 object-cover rounded-3xl"
            />
          </div>
          <div>
            <p className=" text-6xl py-2"> Auriculoterapia</p>
          </div>
          <div>
            <p className=" text-lg py-2 leading-none">
              {" "}
              La auriculoterapia es una técnica similar a la acupuntura que
              implica aplicar presión en puntos específicos de la oreja para
              ayudar en el tratamiento de problemas de salud como la
              osteoartritis, la migraña, las lesiones musculares y el insomnio,
              por ejemplo.
            </p>
          </div>
          <div className="flex flex-row justify-end h-14 items-center py-2">
            <div>
              <p className=" text-3xl px-10">$250.00</p>
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
