import { useState } from "react";
import Servicios from "../Servicios/Servicios";
import ejemplo from "../../assets/ejemplo.svg";
import './MostrarServicios.css'
export const MostrarServicios = () => {
  let listado = [
    { nombre: "Auriculoterapia", descripcion: "Desc Auri", precio: "$100" },
    { nombre: "Auriculoterapia", descripcion: "Desc Auri", precio: "$100" },
    { nombre: "Auriculoterapia", descripcion: "Desc Auri", precio: "$100" },
    { nombre: "Auriculoterapia", descripcion: "Desc Auri", precio: "$100" },
    { nombre: "Auriculoterapia", descripcion: "Desc Auri", precio: "$100" },
    { nombre: "Auriculoterapia", descripcion: "Desc Auri", precio: "$100" },
    { nombre: "Auriculoterapia", descripcion: "Desc Auri", precio: "$100" },
    { nombre: "Auriculoterapia", descripcion: "Desc Auri", precio: "$100" },
    { nombre: "Auriculoterapia", descripcion: "Desc Auri", precio: "$100" },
    { nombre: "Auriculoterapia", descripcion: "Desc Auri", precio: "$100" },
    { nombre: "Auriculoterapia", descripcion: "Desc Auri", precio: "$100" },
    { nombre: "Auriculoterapia", descripcion: "Desc Auri", precio: "$100" },
  ];
  let tiposd = [
    { nombre: "Tratamientos Faciales" },
    { nombre: "Tratamientos Corporales" },
  ];
  const [serv] = useState(listado);
  const [TiposD] = useState(tiposd);

  console.log(serv);
  return (
    <div className="flex justify-center">
      <div className=" w-1/2 p-3 pl-36">
        <div className=" grid grid-cols-2 place-content-center py-2">
          {TiposD.map((item) => (
            <div
              className="col-span-1 flex justify-center items-center h-40 relative p-3"
              key={item.nombre}
            >
              <div className="bg-gray-200 h-36 rounded-3xl  w-80 relative">
                <div className=" bg-turqueza bg-opacity-90 h-14 bottom-0 absolute inset-x-0  rounded-b-3xl">
                  <p className=" mx-2 absolute text-white bottom-2">
                    {item.nombre}
                  </p>
                </div>
                <img
                  src={ejemplo}
                  alt="Mi Imagen"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          ))}
        </div>
        <div className=" grid grid-cols-3 place-content-center py-2">
          {serv.map((item) => (
            <Servicios key={item.nombre} nombre={item.nombre}></Servicios>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <div className="p-3 pr-36">
          <div className=" py-4">
            <img
              src={ejemplo}
              alt="Mi Imagen"
              className="  w-full object-cover rounded-3xl"
            />
          </div>
          <div>
            <p className=" text-6xl py-4"> Auriculoterapia</p>
          </div>
          <div>
            <p className=" text-xl py-4">
              {" "}
              La auriculoterapia es una técnica similar a la acupuntura que
              implica aplicar presión en puntos específicos de la oreja para
              ayudar en el tratamiento de problemas de salud como la
              osteoartritis, la migraña, las lesiones musculares y el insomnio,
              por ejemplo.
            </p>
          </div>
          <div className="flex flex-row justify-end h-14 items-center py-4">
            <div>
              <p className=" text-3xl px-10">$250.00</p>
            </div>
            <button className=" bg-turqueza rounded-3xl px-10 py-5">
              RESERVA YA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
