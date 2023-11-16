import React from 'react'

import "./Footer.css"
import Logo2 from "../../assets/Footer/Logo2.svg"
import Fb from "../../assets/Footer/fb.svg"
import Ig from "../../assets/Footer/ig.svg"
import Mapa from "../../assets/Footer/Mapa.svg"


const Footer = () => {
  return (
    <footer className="Navbar w-full h-60 flex items-center justify-between bg-azulClaro text-white">
      <div className="Logo w-1/3 h-60  justify-center items-center flex">
        <div className="flex flex-col items-center">
          <div>
            <img className="Logo h-40" src={Logo2} />
          </div>
          <div>
            <p className=" font-bold">Lilia Ramos S.</p>
            <p>Cosmiatra</p>
          </div>
        </div>
      </div>
      <div className="Logo w-1/3 h-40  justify-center items-center inline-flex">
        <div className="flex flex-col items-center space-y-4">
          <div>
            <p>Siguenos en Nuestras Redes Sociales:</p>
          </div>
          <div className="flex justify-between space-x-7 ">
            <a href="https://www.facebook.com/clinicadebellezaenmorelia"><img className="Logo h-14" src={Fb} /></a>
            <a href="https://www.instagram.com/clinica_de_belleza_lily"><img className="Logo h-14" src={Ig} /></a>
          </div>
        </div>
      </div>
      <div className="Logo w-1/3 h-40  justify-center items-center inline-flex">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center whitespace-pre-line">
            <div className=" font-bold">Encuentranos en:</div>
            <div>
              <p>Thomas Alva Edison No. 335</p>
              <p>Col. Electricistas, C.P. 58290</p>
              <p className=" pt-6">Morelia, Michoacan</p>
              <p>44 35 87 60 57</p>
            </div>
          </div>
          <div>
            <a href="https://www.google.com/maps/place/Thomas+Alva+Edison+335,+Electricistas,+58290+Morelia,+Mich."><img className="Logo h-40 hover:-translate-y-1 hover:scale-110 duration-200" src={Mapa} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
