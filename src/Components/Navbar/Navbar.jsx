import { Link } from 'react-router-dom'


<<<<<<< HEAD
const Navbar = () => {

  return (
    <div className="Navbar w-full h-24 relative shadow flex items-center justify-between bg-azulNav">
      <Link className="Logo w-[260px] h-20 left-[69px]  justify-center items-center inline-flex cursor-pointer" to="/gestion-lily/">
        <div className="Imagen21 h-20 pl-[2.64px] pr-[2.37px]   justify-center items-center gap-[6.54px] inline-flex">
          <img className="Logo h-20" src="Images/Nav/Logo.svg" />
        </div>
      </Link>
      <div className="Group25 h-20 flex justify-center items-center">
        <Link className="Servicios px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer" to="/gestion-lily/Servicios">
          SERVICIOS
        </Link>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <Link className="Contacto  px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer" to="/gestion-lily/Nosotros">
          NOSOTROS
        </Link>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <Link className="Reservaciones px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer" to="/gestion-lily/Calendario">
          CITAS
        </Link>
      </div>
      <div className="IS w-[260px] h-20 flex items-center space-x-2 justify-center ">
        <Link className="IniciarSesion text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer" to="/gestion-lily/Login">
=======
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
      <div className="IS w-[23%] sm:w-[20%] h-20 flex items-center  justify-center ">
        <p className="IniciarSesion text-center text-black font-normal cursor-pointer" onClick={() => handleScreen("Login2")}>
>>>>>>> main
          INICIAR SESIÓN
        </Link>
        <img
<<<<<<< HEAD
          className="Logoi1  h-20 "
          src="Images/Nav/login.png"
=======
          className="Logoi1 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 "
          src={login}
>>>>>>> main
        />
      </div>
    </div >
  );
};

export default Navbar;
