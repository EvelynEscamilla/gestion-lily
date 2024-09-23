import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Servicios from "../../Components/mostrarServicios/Servicios";
import useServicios from "../../hooks/useServicios";
import ModMostrarServicios from "../../Components/modals/ModMostrarServicios";

// Product 
const Servicio = ({ nombre, descripcion, precio, duracion, maximoPer, url, sendDataToParent, oC, tipo }) => {
  return (
    <div className={`servicio ${tipo}`}>
      <Servicios
        sendDataToParent={sendDataToParent}
        item={{ nombre, descripcion, precio, duracion, maximoPer, url }}
        oC={oC}
      />
    </div>
  );
};

// Concrete Products
const ServicioTipoA = (props) => <Servicio {...props} />;
const ServicioTipoB = (props) => <Servicio {...props} />;

// Creator 
const ServicioFactory = (tipo) => {
  switch (tipo) {
    case 'facial':
      return ServicioTipoA;
    case 'corporal':
      return ServicioTipoB;
    default:
      return Servicio;
  }
};

// Concrete Creator
export const MostrarServicios = () => {
  const { servicios } = useServicios();
  const [tipoServicio, setTipoServicio] = useState(''); 
  const [nombre, setNombre] = useState("Elige el Servicio que gustes");
  const [descripcion, setdescripcion] = useState("Te dará una breve descripción de lo que es cada servicio");
  const [precio, setprecio] = useState("");
  const [imagenSer, setimagenSer] = useState("Images/Nav/Logo.svg");
  const [duracion, setDuracion] = useState(null);
  const [maximoPer, setMaximoPer] = useState(null);
  const [divVisible, setDivVisible] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);

  const toggleDiv = () => setDivVisible(true);

  const handleDFC = (data) => {
    setNombre(data.nombre);
    setdescripcion(data.descripcion);
    setprecio(data.precio);
    setimagenSer(data.url);
    setDuracion(data.duracion);
    setMaximoPer(data.maximoClientes);
  };

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  // Filtrar servicios 
  const filteredServicios = tipoServicio
    ? servicios.filter(item => item.tipo.toLowerCase() === tipoServicio.toLowerCase())
    : servicios;

  return (
    <>
      
      <div className="filter-buttons flex justify-start mb-4 ml-6 mt-2">
        <button onClick={() => setTipoServicio('facial')} className="mx-2 p-2 bg-blue-500 text-white rounded">
          Facial
        </button>
        <button onClick={() => setTipoServicio('corporal')} className="mx-2 p-2 bg-green-500 text-white rounded">
          Corporal
        </button>
        <button onClick={() => setTipoServicio('')} className="mx-2 p-2 bg-gray-500 text-white rounded">
          Mostrar Todos
        </button>
      </div>

      <div className="lg:flex grid grid-rows-1 justify-center text-center">
        <div className="lg:w-1/2 w-[95%] lg:p-3 lg:pl-2 justify-center lg:h-screen lg:overflow-y-auto">
          <div onClick={abrirModal} className="grid md:hidden lg:grid-cols-3 grid-cols-2 place-content-center pt-2 lg:pb-28">
            {filteredServicios.map((item, index) => {
              const ServicioComponente = ServicioFactory(item.tipo);
              return (
                <ServicioComponente
                  key={index}
                  sendDataToParent={handleDFC}
                  {...item}
                  oC={toggleDiv}
                />
              );
            })}
          </div>
          <div className="hidden md:grid lg:grid-cols-3 grid-cols-2 place-content-center pt-2 lg:pb-28">
            {filteredServicios.map((item, index) => {
              const ServicioComponente = ServicioFactory(item.tipo);
              return (
                <ServicioComponente
                  key={index}
                  sendDataToParent={handleDFC}
                  {...item}
                  oC={toggleDiv}
                />
              );
            })}
          </div>
        </div>
        <div className="md:block hidden lg:w-1/2 w-[90%] ml-auto mr-auto items-center justify-center pb-5 lg:pb-0">
          <div className="lg:p-3 lg:pr-14 justify-center items-center">
            <div className="lg:mr-10 py-4 flex justify-center items-center text-center">
              <img
                src={imagenSer}
                alt="Mi Imagen"
                className="h-72 object-cover rounded-3xl"
              />
            </div>
            <div>
              <p className="lg:mr-10 text-center md:text-6xl text-5xl py-2">{nombre}</p>
            </div>
            {divVisible && (
              <div className="h-72">
                <p className="lg:mr-10 text-justify py-2 leading-none">
                  <span className="font-semibold text-lg">DESCRIPCION:</span> {descripcion}
                </p>
                <p className="lg:mr-10 text-justify py-2 leading-none">
                  <span className="font-semibold text-lg">DURACION:</span> {duracion} minutos
                </p>
                <p className="lg:mr-10 text-justify py-2 leading-none">
                  <span className="font-semibold text-lg">MAXIMO DE PERSONAS POR SERVICIO:</span> {maximoPer}
                </p>
                <div className="flex flex-row justify-end h-14 items-center py-2">
                  <p className="text-3xl px-10">PRECIO: {precio}$ MXN</p>
                  <Link to="/gestion-lily/Calendario">
                    <button className="mr-10 bg-turqueza rounded-3xl px-10 py-2 text-xl text-white hover:-translate-y-1 hover:scale-110 duration-200">RESERVA YA</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

     
      <ModMostrarServicios
        isOpen={modalAbierto}
        onClose={cerrarModal}
        title={nombre}
        descripcion={descripcion}
        duracion={duracion}
        maxPer={maximoPer}
        precio={precio}
      />
    </>
  );
};

export default MostrarServicios;
