import "./Footer.css";
import Logo2 from "../../assets/Footer/Logo2.svg";
import Fb from "../../assets/Footer/fb.svg";
import Ig from "../../assets/Footer/ig.svg";
import Mapa from "../../assets/Footer/Mapa.svg";

const Footer = () => {
  return (
    <div className="Navbar w-full h-60 flex items-center justify-between bg-azulClaro text-white">
      <div className="Logo w-1/3 h-60  justify-center items-center flex">
        <div className="flex flex-col items-center">
          <div>
            <img className="Logo h-40" src={Logo2} />
          </div>
          <div>
            <p className=" font-bold">Lilia Ramos S.</p>
            <p>Cosmiatra</p>
          </div>
        </div>
      </div>
      <div className="Logo w-1/3 h-40  justify-center items-center inline-flex">
        <div className="flex flex-col items-center space-y-4">
          <div>
            <p>Siguenos en Nuestras Redes Sociales:</p>
          </div>
          <div className="flex justify-between space-x-7 ">
            <img className="Logo h-16" src={Fb} />
            <img className="Logo h-16" src={Ig} />
          </div>
        </div>
      </div>
      <div className="Logo w-1/3 h-40  justify-center items-center inline-flex">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center whitespace-pre-line">
            <div className=" font-bold">Encuentranos en:</div>
            <div>
              <p>Thomas Alva Edison No. 335</p>
              <p>Col. Electricistas, C.P. 58290</p>
              <p className=" pt-6">Morelia, Michoacan</p>
              <p>44 35 87 60 57</p>
            </div>
          </div>
          <div>
            <img className="Logo h-40" src={Mapa} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
