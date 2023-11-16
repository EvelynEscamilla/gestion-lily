import Logo from "../../assets/Nav/Logo.svg";
import "./Navbar.css";

import DropAdministrador from "./DropAdministrador"

const Navbar = ({ handleScreen }) => {
  return (
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
      </div>
      <div className="IS w-[23%] sm:w-[20%] h-20 flex items-center  justify-end">
        <DropAdministrador></DropAdministrador>
      </div>
    </div>
  );
};

export default Navbar;