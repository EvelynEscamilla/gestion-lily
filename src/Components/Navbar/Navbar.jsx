
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Nav/Logo.svg";
import login from "../../assets/Nav/login.png";
import { Link } from 'react-router-dom'


const Navbar = ({ handleScreen }) => {
  const navigate = useNavigate();

  return (
    <div className="Navbar w-full h-24 relative shadow flex items-center justify-between bg-azulNav">
      <div className="Logo w-[260px] h-20 left-[69px]  justify-center items-center inline-flex cursor-pointer" onClick={() => handleScreen("Inicio")}>
        <div className="Imagen21 h-20 pl-[2.64px] pr-[2.37px]   justify-center items-center gap-[6.54px] inline-flex">
          <img className="Logo h-20" src={Logo} />
        </div>
      </div>
      <div className="Group25 h-20 flex justify-center items-center">
        <Link className="Servicios px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer" to="/gestion-lily/Nosotros">
          SERVICIOS
        </Link>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <p className="Contacto  px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer" onClick={() => navigate("/gestion-lily/Nosotros")}>
          NOSOTROS
        </p>
        <div className="Line2 w-0 h-5 origin-top-left  border border-black"></div>
        <p className="Reservaciones px-10 text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer" onClick={() => handleScreen("Calendario")}>
          CITAS
        </p>
      </div>
      <div className="IS w-[260px] h-20 flex items-center space-x-2 justify-center ">
        <p className="IniciarSesion text-center text-black text-base font-normal font-['Roboto Condensed'] cursor-pointer" onClick={() => handleScreen("Login2")}>
          INICIAR SESIÓN
        </p>
        <img
          className="Logoi1  h-20 "
          src={login}
        />
      </div>
    </div >
  );
};

export default Navbar;
