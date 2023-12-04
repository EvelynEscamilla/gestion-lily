import { Link } from 'react-router-dom'
import DropAdministrador from "./DropAdministrador"

const Navbar = () => {
  return (
    <div className="Navbar w-full h-24 sticky top-0 shadow flex items-center text-[11px] md:text-sm lg:text-base justify-between bg-azulNav">
      <Link to="/gestion-lily/" className="Logo w-[23%] sm:w-[20%] h-20  justify-center items-center inline-flex cursor-pointer">
        <img className="Logo h-[5rem]" src="Images/Nav/Logo.svg" />
      </Link>
      <div className="Lista h-20 flex justify-center items-center ">
        <Link to="/gestion-lily/servicios" className="Servicios sm:px-10  text-center text-black font-normal cursor-pointer" onClick={() => handleScreen("MostrarServicios")}>
          SERVICIOS
        </Link>
        <div className="flex justify-center items-center sm:space-x-0">
          <div className="Line2 w-0 h-5 origin-top-left mx-2 border border-black"></div>
          <Link to="/gestion-lily/nosotros" className="Contacto sm:px-10 text-center text-black font-normal cursor-pointer" onClick={() => handleScreen("NosotrosScreen")}>
            NOSOTROS
          </Link>
          <div className="Line2 w-0 h-5 origin-top-left mx-2 border border-black"></div>
          <Link to="/gestion-lily/calendario" className="Reservaciones  sm:px-10 text-center text-black font-normal cursor-pointer" onClick={() => handleScreen("Calendario")}>
            CITAS
          </Link>
        </div>
      </div>
      <div className="IS w-[23%] sm:w-[20%] h-20 flex items-center  justify-end z-10">
        <DropAdministrador></DropAdministrador>
      </div>
    </div>
  );
};

export default Navbar;