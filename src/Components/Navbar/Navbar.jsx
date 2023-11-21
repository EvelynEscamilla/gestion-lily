import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className="Navbar w-full h-24 relative shadow flex items-center text-[11px] md:text-sm lg:text-base justify-between bg-azulNav">
      <Link className="Logo w-[23%] sm:w-[20%] h-20  justify-center items-center inline-flex cursor-pointer" to="/gestion-lily/">

        <img className="Logo h-[5rem]" src="Images/Nav/Logo.svg" />

      </Link>
      <div className="Lista h-20 flex justify-center items-center ">
        <Link className="Servicios sm:px-10  text-center text-black font-normal cursor-pointer" to="/gestion-lily/servicios">
          SERVICIOS
        </Link>
        <div className="flex justify-center items-center sm:space-x-0">
          <div className="Line2 w-0 h-5 origin-top-left mx-2 border border-black"></div>
          <Link className="Contacto sm:px-10 text-center text-black font-normal cursor-pointer" to="/gestion-lily/nosotros">
            NOSOTROS
          </Link>
          <div className="Line2 w-0 h-5 origin-top-left mx-2 border border-black"></div>
          <Link className="Reservaciones  sm:px-10 text-center text-black font-normal cursor-pointer" to="/gestion-lily/calendario">
            CITAS
          </Link>
        </div>
      </div>
      <div className="IS w-[23%] sm:w-[20%] h-20 flex items-center  justify-center ">
        <Link className="IniciarSesion text-center text-black font-normal cursor-pointer" to="/gestion-lily/login">
          INICIAR SESIÓN
        </Link>
        <img
          className="Logoi1 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 "
          src="Images/Nav/login.png"
        />
      </div>
    </div>
    
  );
};

export default Navbar;