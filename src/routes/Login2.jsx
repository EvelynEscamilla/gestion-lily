import React from "react";
import { Link } from "react-router-dom";
import TextField from "../Components/TextField/TextField";
import Boton from "../Components/boton/Boton";

const Login2 = () => {
  const divStyle = {
    backgroundImage: `url("Images/Login/Spa-img2.jpg")`,
  };
  return (
    <div className=" flex justify-center items-center">
      <div
        className=" w-5/6 h-screen justify-end flex bg-cover bg-center"
        style={divStyle}
      >

        <div className="w-[100%] bg-azulNav bg-opacity-70 lg:bg-opacity-90 text-center p-8 lg:w-1/2">
          <img className="lg:w-1/2 mx-auto py-7 w-3/4 " src="Images/Login/Lily-hor.png"></img>
          <p className=" text-3xl py-3">Inicio de Sesión</p>
          <div className="py-3">
            <input
              className="text-3xl py-3 lg:w-3/4 w-full text-center rounded-3xl"
              type="text"
              placeholder="Correo electrónico"
            ></input>
          </div>
          <div className="py-3">
            <input
              className=" text-3xl py-3 lg:w-3/4 w-full text-center rounded-3xl"
              type="text"
              placeholder="Contraseña"
            ></input>
          </div>

          <p className="texto-fuente text-center py-3  text-turqueza text-xl">
            <a href="">¿Has olvidado tu contraseña?</a>
          </p>
          <div className="flex py-3">
            <div className=" w-1/2 ">

              <Link to="/gestion-lily/crear-cuenta">
                <p className=" text-2xl text-turqueza py-2">
                  <button >Crear cuenta</button>
                </p></Link>

            </div>
            <div className=" w-1/2 ">
              <Boton BG="morado" TC="white">
          Iniciar Sesion
        </Boton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;
