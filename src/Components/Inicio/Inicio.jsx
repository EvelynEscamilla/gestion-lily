import CaImg1 from '../../assets/Inicio/Ca-img1.jpg'
import CaImg2 from '../../assets/Inicio/Ca-img2.jpg'
import CaImg3 from '../../assets/Inicio/Ca-img3.jpg'
import MpImg1 from '../../assets/Inicio/Mp-img1.jpg'
import MpImg2 from '../../assets/Inicio/Mp-img2.jpg'
import MpImg3 from '../../assets/Inicio/Mp-img3.jpg'
import LChatbot2 from '../../assets/logosolito.svg'
import React, { useState } from 'react';
import './Inicio.css'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Inicio = ({handleScreen}) => {

  const [infoDiv, setInfoDiv] = useState(1);

    const handleClick = () => {
        setInfoDiv(infoDiv + 1);
    }

    const handleClick1 = () => {
      setInfoDiv(infoDiv - 1);
  }

  return (
    <>
    <Navbar handleScreen={handleScreen}/>
    <br></br>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={CaImg1} class="d-block w-100" alt="Ca 1"></img>
    </div>
    <div class="carousel-item">
      <img src={CaImg2} class="d-block w-100" alt="Ca 2"></img>
    </div>
    <div class="carousel-item">
      <img src={CaImg3} class="d-block w-100" alt="Ca 3"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="texto1 bg-blue-100 p-4 text-2xl text-center text-black">
  Tratamientos más populares
</div>
<br></br>
<div class="contenedor flex justify-center items-end h-96">
  <div class="imagen-contenedor flex justify-between max-w-screen-lg w-full">
    <div class="rounded-[10%] overflow-hidden bg-morado  h-96 relative hover:-translate-y-1 hover:scale-110 duration-200 w-[30%]">
      <img  src={MpImg1} alt="Imagen 1" class=" w-full h-full object-cover"></img>
      <div class="bg-morado bg-opacity-70  text-white text-center p-2 absolute bottom-0 left-0 w-full">
        <p class="text-lg font-bold">Botox Facial</p>
      </div>
    </div>
    <div class="rounded-[10%] overflow-hidden w-[30%] h-96 relative hover:-translate-y-1 hover:scale-110 duration-200">
      <img src={MpImg2} alt="Imagen 2" class="w-full h-full object-cover"></img>
      <div class="bg-morado bg-opacity-70 text-white text-center p-2 absolute bottom-0 left-0 w-full">
        <p class="text-lg font-bold">Oxígeno</p>
      </div>
    </div>
    <div class="rounded-[10%] overflow-hidden w-[30%] h-96 relative hover:-translate-y-1 hover:scale-110 duration-200">
      <img src={MpImg3} alt="Imagen 3" class="w-full h-full object-cover"></img>
      <div class="bg-morado bg-opacity-70 text-white text-center p-2 absolute bottom-0 left-0 w-full">
        <p class="text-lg font-bold">Carboxiterapia</p>
      </div>
    </div>
  </div>
  {infoDiv == 1 ?
    <img class="fixed bottom-0 rounded-full bg-azulNav border-2 shadow-lg p-2 right-0 h-24 mx-2 my-4 hover:-translate-y-1 hover:scale-110 duration-200" src={LChatbot2} alt="Mi Imagen Fija" onClick={() => handleClick()}></img>
    :
    <div class='chatScreen absolute bottom-0 right-0 m-2 rounded-xl shadow-2xl border-2 h-80 w-80 bg-azulNav border-turqueza text-white' onClick={() => handleClick1()}>
      <p class='bg-turqueza p-1 m-3 rounded-lg w-36'>
        ¡Hola! ¿En qué puedo ayudarte?
      </p>
      <div class='Preg absolute bottom-0 bg-turqueza rounded-b-xl w-full h-28'>
        <p>Preguntas Frecuentes:</p>
        <p class='border rounded-xl'>¿Dónde se ubica la clínica?</p>
        <p class='border rounded-xl'>¿Qué métodos de pago se aceptan?</p>
        <p class='border rounded-xl'>¿Qué servicios ofrecen?</p>
      </div>
    </div>
  }
</div>
<br></br><br></br>

      <Footer/>
      </>
  )
}

export default Inicio
