import { Link } from 'react-router-dom'
import DropCliente from "./DropCliente";

const Navbar = ({ handleScreen }) => {
  return (
    <div className="Navbar w-full h-24 relative shadow flex items-center justify-between bg-azulNav">
      <div className="Logo w-[260px] h-20 left-[69px]  justify-center items-center inline-flex cursor-pointer" >
        <div className="Imagen21 h-20 pl-[2.64px] pr-[2.37px] items-center gap-[6.54px] inline-flex">
        <Link to="/gestion-lily/">
          <img className="Logo h-20" src="Images/Nav/Logo.svg" />
          </Link>
        </div>
      </div>
      <div className="Group25 h-20 flex justify-center items-center">
      <Link to="/gestion-lily/servicios" className="Servicios px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer">
          SERVICIOS
        </Link>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <Link to="/gestion-lily/nosotros" className="Contacto  px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer">
          NOSOTROS
        </Link>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <Link to="/gestion-lily/calendario" className="Reservaciones px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer">
          CITAS
        </Link>
      </div>
      <div className="IS w-[23%] sm:w-[20%] h-20 flex items-center  justify-end ">
        <DropCliente></DropCliente>
      </div>
    </div>
  );
};

export default Navbar;