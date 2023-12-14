import React from 'react'


import Logo2 from "../../assets/Footer/Logo2.svg"
import Fb from "../../assets/Footer/fb.svg"
import Ig from "../../assets/Footer/ig.svg"
import Mapa from "../../assets/Footer/Mapa.svg"


const Footer = () => {
  return (
    <footer className="Navbar w-full h-auto  flex flex-col items-center sm:text-sm lg:text-base  bg-turqueza text-white">
      <div className='w-full flex flex-col px-2 sm:flex-row items-center'>
        <div className="flex sm:flex-col w-full h-full sm:w-1/3 sm:h-60 justify-center items-center ">

          <img className="Logo h-28 sm:h-32 lg:h-40 w-full" src={Logo2} />
          <div className='w-full flex flex-col items-center'>
            <p className="font-bold">Lilia Ramos S.</p>
            <p className="font-medium"> Cosmiatra</p>
          </div>

        </div>
        <div className="Logo w-full py-3 sm:w-1/3 sm:h-40 flex-col space-y-3 justify-center items-center inline-flex sm:px-3">

          <p className=' pb-2 font-semibold'>Siguenos en Nuestras Redes Sociales:</p>

          <div className="flex flex-row w-full items-center ">
            <div className=' flex items-center justify-center pl-[20%] w-full'><a className='hover:scale-125 transition-all duration-200' href="https://www.facebook.com/clinicadebellezaenmorelia" ><img className="Logo h-11  sm:h-12 lg:h-14" src={Fb} /></a></div>
            <div className=' flex items-center justify-center pr-[20%] w-full'><a className='hover:scale-125 transition-all duration-200' href="https://www.instagram.com/clinica_de_belleza_lily" ><img className="Logo h-11  sm:h-12 lg:h-14" src={Ig} /></a></div>
          </div>
        </div>
        <div className="Ubic flex flex-row w-full py-3 sm:w-4/12 sm:h-40 items-center ">

          <div className="flex flex-col items-center pr-2 w-full">
            <p className=" font-bold">Encuentranos en:</p>

            <p className=" font-medium">Thomas Alva Edison No. 335</p>
            <p className=" font-medium">Col. Electricistas, C.P. 58290</p>
            <p className=" font-medium pt-6">Morelia, Michoacan</p>
            <p className=" font-medium"> 44 35 87 60 57</p>

          </div>
          <div className='w-full flex items-center justify-center'>
            <a href="https://www.google.com/maps/place/Thomas+Alva+Edison+335,+Electricistas,+58290+Morelia,+Mich."><img className="Logo h-40 hover:-translate-y-1 hover:scale-110 duration-200" src={Mapa} /></a>
          </div>

        </div>
      </div>
      <div className=" text-xs md:text-sm w-full h-auto text-center bg-[#3b96a8]">
        <p className="font-medium w-full h-1/3" >2023 © Clinica de Belleza Lily. todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer;