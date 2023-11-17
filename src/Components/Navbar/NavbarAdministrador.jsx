import { Link } from 'react-router-dom'

import DropAdministrador from "./DropAdministrador"

const Navbar = () => {

  return (
    <div className="Navbar w-full h-24 relative shadow flex items-center justify-between bg-azulNav">
      <Link to="/gestion-lily/" className="Logo w-[260px] h-20 left-[69px]  justify-center items-center inline-flex cursor-pointer" >
        <div className="Imagen21 h-20 pl-[2.64px] pr-[2.37px]   justify-center items-center gap-[6.54px] inline-flex">
          <img className="Logo h-20" src="Images/Nav/Logo.svg" />
        </div>
      </Link>
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
      </div>
      <div className="IS w-[260px] h-20 flex items-center space-x-2 justify-center z-10 ">
        <DropAdministrador></DropAdministrador>
      </div>
    </div>
  );
};

export default Navbar;
