import React from 'react';
import { Link } from "react-router-dom";
import Servicios from "../../Components/mostrarServicios/Servicios";
import { useState } from "react";
import useServicios from "../../hooks/useServicios";
import ModMostrarServicios from "../../Components/modals/ModMostrarServicios";

export const MostrarServicios = () => {
  const { servicios } = useServicios();
  const [nombre, setNombre] = useState("Elige el Servicio que gustes");
  const [descripcion, setdescripcion] = useState(
    "Te dara una breve descripcion de lo que es cada servicio"
  );
  const [precio, setprecio] = useState("");
  const [imagenSer, setimagenSer] = useState("Images/Nav/Logo.svg");
  const [duracion, setDuracion] = useState(null);
  const [maximoPer, setMaximoPer] = useState(null);
  const [divVisible, setDivVisible] = useState(false);

  // Función para cambiar el estado de la variable y mostrar/ocultar el div
  const toggleDiv = () => {
    setDivVisible(true);
  };
  const handleDFC = (data) => {
    setNombre(data.nombre);
    setdescripcion(data.descripcion);
    setprecio(data.precio);
    setimagenSer(data.url);
    setDuracion(data.duracion);
    setMaximoPer(data.maximoClientes);
  };

  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };


  return (
    <>
      <div className="lg:flex grid grid-rows-1 justify-center text-center ">
        {/* Servicios */}
        <div className=" lg:w-1/2 w-[95%] lg:p-3 lg:pl-2 justify-center lg:h-screen lg:overflow-y-auto ">
          <div onClick={abrirModal} className=" grid md:hidden lg:grid-cols-3 grid-cols-2 place-content-center pt-2 lg:pb-28 ">
            {servicios.map((item, index) => (
              <Servicios
                key={index}
                sendDataToParent={handleDFC}
                item={item}
                oC={toggleDiv}
              ></Servicios>
            ))}
          </div>
          <div className="hidden md:grid lg:grid-cols-3 grid-cols-2 place-content-center pt-2 lg:pb-28 ">
            {servicios.map((item, index) => (
              <Servicios
                key={index}
                sendDataToParent={handleDFC}
                item={item}
                oC={toggleDiv}
              ></Servicios>
            ))}
          </div>
        </div>
        <div className="md:block hidden lg:w-1/2 w-[90%] ml-auto mr-auto items-center justify-center pb-5 lg:pb-0">
          <div className="lg:p-3 lg:pr-14 justify-center items-center">
            <div className=" lg:mr-10 py-4 flex justify-center items-center text-center">
              <img
                src={imagenSer}
                alt="Mi Imagen"
                className="h-72 object-cover rounded-3xl"
              />
            </div>
            <div>
              <p className="lg:mr-10 text-center md:text-6xl text-5xl py-2">
                {" "}
                {nombre}
              </p>
            </div>
            {divVisible && (
              <div>
                {" "}
                <div className="  h-72 ">
                  <p className="lg:mr-10 text-justify  py-2 leading-none">
                    <p className=" font-semibold text-lg">DESCRIPCION:</p>{" "}
                    {descripcion}
                  </p>
                  <p className="lg:mr-10 text-justify  py-2 leading-none">
                    <p className=" font-semibold text-lg">DURACION:</p>{" "}
                    {duracion} minutos
                  </p>
                  <p className="lg:mr-10 text-justify  py-2 leading-none">
                    <p className=" font-semibold text-lg">
                      MAXIMO DE PERSONAS POR SERVICIO:
                    </p>{" "}
                    {maximoPer}
                  </p>
                </div>
                <div className="flex flex-row justify-end h-14 items-center py-2">
                  <div>
                    <p className=" text-3xl px-10">PRECIO: {precio}$ MXN</p>
                  </div>
                  <Link to="/gestion-lily/Calendario">
                    <button className="mr-10 bg-turqueza rounded-3xl px-10 py-2 text-xl text-white hover:-translate-y-1 hover:scale-110 duration-200">
                      RESERVA YA
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>


        {/* Componente del modal */}
        <ModMostrarServicios
          isOpen={modalAbierto}
          onClose={cerrarModal}
          title={nombre}
          descripcion={descripcion}
          duracion={duracion}
          maxPer={maximoPer}
          precio={precio}
        />
      </div>


    </>
  );
};

export default MostrarServicios;
