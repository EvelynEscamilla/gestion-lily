import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { useState } from 'react';

const Carousel = () => {
    const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE']; // Los colores de los cuadros
    const [currentIndex, setCurrentIndex] = useState(0); // El índice del cuadro que se muestra actualmente
  
    const goLeft = () => {
      setCurrentIndex(currentIndex === 0 ? meses.length - 1 : currentIndex - 1);
    };
  
    const goRight = () => {
      setCurrentIndex(currentIndex === meses.length - 1 ? 0 : currentIndex + 1);
    };
  
    return (
      <div>
          <div className="ml-4">
         <p className="mt-10 ml-52 font-medium text-xl">Selecciona la fecha de tu cita</p>
         </div>
      <div className="flex items-center mb-10 mt-5 ml-10">
        <button className="p-2 bg-gray-300 rounded-full mr-4" onClick={goLeft}>←</button>
        <div className="flex justify-center w-2/5 h-96 bg-azulNav rounded-lg"><p className="mt-5">{meses[currentIndex]}</p></div>
        <button className="p-2 bg-gray-300 rounded-full ml-4" onClick={goRight}>→</button>
        <div className="flex justify-center w-1/3 h-96 bg-azulNav ml-8 rounded-lg"><p className="mt-5">Servicios disponibles:</p></div>
      </div>
      </div>
    );
  };
  



function Calendario() {

  return (
    <div>
    <Navbar/>  
    <Carousel/>
    <Footer/>
    </div>
  );
}

export default Calendario;
