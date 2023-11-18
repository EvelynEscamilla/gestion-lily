import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className="Navbar w-full h-24 relative shadow flex items-center justify-between bg-azulNav">
      <Link className="Logo w-[260px] h-20 left-[69px]  justify-center items-center inline-flex cursor-pointer" to="/gestion-lily/">
        <div className="Imagen21 h-20 pl-[2.64px] pr-[2.37px]   justify-center items-center gap-[6.54px] inline-flex">
          <img className="Logo h-20" src="Images/Nav/Logo.svg" />
        </div>
      </Link>
      <div className="Group25 h-20 flex justify-center items-center">
        <Link className="Servicios px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer" to="/gestion-lily/servicios">
          SERVICIOS
        </Link>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <Link className="Contacto  px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer" to="/gestion-lily/nosotros">
          NOSOTROS
        </Link>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <Link className="Reservaciones px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer" to="/gestion-lily/calendario">
          CITAS
        </Link>
      </div>
      <div className="IS w-[260px] h-20 flex items-center space-x-2 justify-center ">
        <Link className="IniciarSesion text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer" to="/gestion-lily/login">
          INICIAR SESIÓN
        </Link>
        <img
          className="Logoi1  h-20 "
          src="Images/Nav/login.png"
        />
      </div>
    </div >
  );
};

export default Navbar;
