import { Link } from "react-router-dom";
import GaleriaTipos from "../../Components/mostrarServicios/GaleriaTipos";
import imagenes from "../../Components/mostrarServicios/Imagenes";
import ImagenesTipos from "../../Components/mostrarServicios/ImagenesTipos";
import Servicios from "../../Components/mostrarServicios/Servicios";
import { useState } from "react";


export const MostrarServicios = ({handleScreen}) => {
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
    <>
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
          <div className=" mr-10 py-4 flex justify-center items-center">
          <img
              src={imagenSer}
              alt="Mi Imagen"
              className=" h-72 object-cover rounded-3xl"
            />
          </div>
          <div>
            <p className="mr-10 text-center text-6xl py-2"> {nombre}</p>
          </div>
          <div>
            <p className="mr-10 text-justify text-lg py-2 leading-none">
              {descripcion}
            </p>
          </div>
          <div className="flex flex-row justify-end h-14 items-center py-2">
            <div>
              <p className=" text-3xl px-10">{precio}</p>
            </div>
            <Link to="/gestion-lily/calendario">
            <button className="mr-10 bg-turqueza rounded-3xl px-10 py-2 text-xl text-white hover:-translate-y-1 hover:scale-110 duration-200" >
              RESERVA YA
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MostrarServicios