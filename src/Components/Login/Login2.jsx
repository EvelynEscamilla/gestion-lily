import React from "react";
import Wpr from "./Images/Spa-img2.jpg";
import logo from "./Images/Lily-hor.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Login2 = ({ handleScreen }) => {
  const divStyle = {
    backgroundImage: `url(${Wpr})`,
  };
  return (
    <>
      <Navbar handleScreen={handleScreen} />
      <div className=" flex justify-center items-center">
        <div
          className=" w-5/6 h-screen justify-end flex bg-cover bg-center"
          style={divStyle}
        >
          <div className="w-1/2 bg-azulNav bg-opacity-90  text-center p-8">
            <img className="w-1/2 mx-auto py-7 " src={logo}></img>
            <p className=" text-3xl py-3">Inicio de Sesión</p>
            <div className="py-3">
              <input
                className="datos text-3xl py-3 w-3/4 text-center rounded-3xl"
                type="text"
                placeholder="Correo electrónico"
              ></input>
            </div>
            <div className="py-3">
              <input
                className="datos text-3xl py-3 w-3/4 text-center rounded-3xl"
                type="text"
                placeholder="Contraseña"
              ></input>
            </div>

            <p className="texto-fuente text-center py-3  text-turqueza text-xl">
              <a href="">¿Has olvidado tu contraseña?</a>
            </p>
            <div className="flex py-3">
              <div className=" w-1/2 ">
                <p className=" text-2xl text-turqueza py-2">
                  <button onClick={() => handleScreen("CrearCuenta")}>
                    Crear cuenta
                  </button>
                </p>
              </div>
              <div className=" w-1/2 ">
                <button className=" bg-morado px-4 rounded-3xl text-2xl py-2 text-white">
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login2;
