
import Logo from "../../assets/Nav/Logo.svg";
import login from "../../assets/Nav/login.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar w-full h-24 relative shadow flex items-center justify-between bg-azulNav">
      <div className="Logo w-[260px] h-20 left-[69px]  justify-center items-center inline-flex">
        <div className="Imagen21 h-20 pl-[2.64px] pr-[2.37px]   justify-center items-center gap-[6.54px] inline-flex">
          <img className="Logo h-20" src={Logo} />
        </div>
      </div>
      <div className="Group25 h-20 flex justify-center items-center">
        <a href="#" className="Servicios px-10 text-center text-black text-base font-normal font-['Roboto Condensed']">
          SERVICIOS
        </a>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <a href="#" className="Contacto  px-10 text-center text-black text-base font-normal font-['Roboto Condensed']">
          CONTACTO
        </a>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <a href="#" className="Reservaciones px-10 text-center text-black text-base font-normal font-['Roboto Condensed']">
          RESERVACIONES
        </a>
      </div>
      <div className="IS w-[260px] h-20 flex items-center space-x-2 justify-center ">
        <a href="#" className="IniciarSesion text-center text-black text-base font-normal font-['Roboto Condensed']">
          INICIAR SESION
        </a>
        <img
          className="Logoi1  h-12 "
          src={login}
        />
      </div>
    </div>
  );
};

export default Navbar;
