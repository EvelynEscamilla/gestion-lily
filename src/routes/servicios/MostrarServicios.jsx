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
    <div className="lg:flex grid grid-rows-1 justify-center text-center">
      <div className=" lg:w-1/2 w-[95%] lg:p-3 lg:pl-2 justify-center">
        <div>
          <GaleriaTipos imagenesTipos={ImagenesTipos} />
        </div>

        <div className=" grid lg:grid-cols-3 grid-cols-2 place-content-center py-2">
          {imagenes.map((item, index) => (
            <Servicios
              key={index}
              sendDataToParent={handleDFC}
              item={item}
            ></Servicios>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 w-[90%] ml-auto mr-auto items-center justify-center pb-5 lg:pb-0">
        <div className="lg:p-3 lg:pr-14 justify-center items-center">
          <div className=" lg:mr-10 py-4 flex justify-center items-center text-center">
          <img
              src={imagenSer}
              alt="Mi Imagen"
              className="h-72 object-cover rounded-3xl"
            />
          </div>
          <div>
            <p className="lg:mr-10 text-center md:text-6xl text-5xl py-2"> {nombre}</p>
          </div>
          <div>
            <p className="lg:mr-10 text-justify text-lg py-2 leading-none">
              {descripcion}
            </p>
          </div>
          <div className="flex flex-row justify-end h-14 items-center py-2">
            <div>
              <p className=" text-3xl px-10">{precio}</p>
            </div>
            <Link to="/gestion-lily/Calendario">
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