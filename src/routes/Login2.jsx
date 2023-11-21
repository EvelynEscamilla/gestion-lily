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
        <div className="w-1/2 bg-azulNav bg-opacity-90  text-center p-8">
          <img
            className="w-1/2 mx-auto py-7 "
            src="Images/Login/Lily-hor.png"
          ></img>
          <p className=" text-3xl py-3">Inicio de Sesión</p>
          <TextField
            name="ejemplo"
            type="email"
            placeholder="Correo electronico"
          />
          <TextField name="ejemplo" type="password" placeholder="Contraseña" />
          <p className="texto-fuente text-center py-3  text-turqueza text-xl">
            <a href="">¿Has olvidado tu contraseña?</a>
          </p>
          <div className="flex py-3">
            <div className=" w-1/2 ">
              <Link to="/gestion-lily/Crear-Cuenta">
                <Boton BG="" TC="turqueza">
                  Crear Cuenta
                </Boton>
              </Link>
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
