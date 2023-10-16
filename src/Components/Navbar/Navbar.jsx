
import Logo from "../../assets/Logo.svg";
import login from "../../assets/login.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar w-screen h-30 relative shadow flex items-center justify-between bg-azulNav">
      <div className="Logo w-[260px] h-20 left-[69px]  justify-center items-center inline-flex">
        <div className="Imagen21 h-20 pl-[2.64px] pr-[2.37px]   justify-center items-center gap-[6.54px] inline-flex">
          <img className="Logo h-20" src={Logo} />
        </div>
      </div>
      <div className="Group25 h-20 flex justify-center items-center">
        <div className="Servicios px-10 text-center text-black text-base font-normal font-['Roboto Condensed']">
          SERVICIOS
        </div>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <div className="Contacto  px-10 text-center text-black text-base font-normal font-['Roboto Condensed']">
          CONTACTO
        </div>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <div className="Reservaciones px-10 text-center text-black text-base font-normal font-['Roboto Condensed']">
          RESERVACIONES
        </div>
      </div>
      <div className="IS w-[260px] h-20 flex items-center space-x-2 justify-center ">
        <div className="IniciarSesion text-center text-black text-base font-normal font-['Roboto Condensed']">
          INICIAR SESION
        </div>
        <img
          className="Logoi1  h-12 "
          src={login}
        />
      </div>
    </div>
  );
};

export default Navbar;
