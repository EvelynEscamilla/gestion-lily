import React from 'react'
import CaImg1 from '../../assets/Inicio/Ca-img1.jpg'
import CaImg2 from '../../assets/Inicio/Ca-img2.jpg'
import CaImg3 from '../../assets/Inicio/Ca-img3.jpg'
import MpImg1 from '../../assets/Inicio/Mp-img1.jpg'
import MpImg2 from '../../assets/Inicio/Mp-img2.jpg'
import MpImg3 from '../../assets/Inicio/Mp-img3.jpg'
import './Inicio.css'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Inicio = ({handleScreen}) => {
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
      <div class="texto1 text-black">
        Tratamientos mas populares
      </div>
      <br></br>
      <div>
        <div class="contenedor">
          <div class="imagen-contenedor">
              <div class="imagen-redonda">
                  <img src={MpImg1} alt="Imagen 1"></img>
                  <div class="cuadro-morado">
                      <p>Botox Facial</p>
                  </div>
              </div>
              <div class="imagen-redonda">
                  <img src={MpImg2} alt="Imagen 2"></img>
                  <div class="cuadro-morado">
                      <p>Oxigeneo</p>
                  </div>
              </div>
              <div class="imagen-redonda">
                  <img src={MpImg3} alt="Imagen 3"></img>
                  <div class="cuadro-morado">
                      <p>Carboxiterapia</p>
                  </div>
              </div>
          </div>
      </div>
      </div>
      <br></br><br></br>
      <Footer/>
      </>
  )
}

export default Inicio
