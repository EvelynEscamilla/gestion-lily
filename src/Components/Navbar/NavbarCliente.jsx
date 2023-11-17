import { Link } from 'react-router-dom'
import DropCliente from "./DropCliente";

const Navbar = ({ handleScreen }) => {
  return (
<<<<<<< HEAD
    <div className="Navbar w-full h-24 relative shadow flex items-center justify-between bg-azulNav">
      <div className="Logo w-[260px] h-20 left-[69px]  justify-center items-center inline-flex cursor-pointer" >
        <div className="Imagen21 h-20 pl-[2.64px] pr-[2.37px] items-center gap-[6.54px] inline-flex">
        <Link to="/gestion-lily/">
          <img className="Logo h-20" src="Images/Nav/Logo.svg" />
          </Link>
        </div>
      </div>
      <div className="Group25 h-20 flex justify-center items-center">
      <Link to="/gestion-lily/Servicios" className="Servicios px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer">
          SERVICIOS
        </Link>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <Link to="/gestion-lily/Nosotros" className="Contacto  px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer">
          NOSOTROS
        </Link>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <Link to="/gestion-lily/Calendario" className="Reservaciones px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer">
          CITAS
        </Link>
=======
    <div className="Navbar w-full h-24 relative shadow flex items-center text-[11px] md:text-sm lg:text-base justify-between bg-azulNav">
      <div className="Logo w-[23%] sm:w-[20%] h-20  justify-center items-center inline-flex cursor-pointer"
        onClick={() => handleScreen("Inicio")}>

        <img className="Logo h-[5rem]" src={Logo} />

      </div>
      <div className="Lista h-20 flex justify-center items-center ">
        <a className="Servicios sm:px-10  text-center text-black font-normal cursor-pointer" onClick={() => handleScreen("MostrarServicios")}>
          SERVICIOS
        </a>
        <div className="flex justify-center items-center sm:space-x-0">
          <div className="Line2 w-0 h-5 origin-top-left mx-2 border border-black"></div>
          <p className="Contacto sm:px-10 text-center text-black font-normal cursor-pointer" onClick={() => handleScreen("NosotrosScreen")}>
            NOSOTROS
          </p>
          <div className="Line2 w-0 h-5 origin-top-left mx-2 border border-black"></div>
          <p className="Reservaciones  sm:px-10 text-center text-black font-normal cursor-pointer" onClick={() => handleScreen("Calendario")}>
            CITAS
          </p>
        </div>
>>>>>>> main
      </div>
      <div className="IS w-[23%] sm:w-[20%] h-20 flex items-center  justify-end ">
        <DropCliente></DropCliente>
      </div>
    </div>
  );
};

export default Navbar;