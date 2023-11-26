
import React from "react";
import { Link } from "react-router-dom";
import TextField from "../Components/TextField/TextField";
import Boton from "../Components/boton/Boton";
import FormSignUp from "../Components/Forms/FormSignUp";

const CrearCuenta = () => {
  const divStyle = {
    backgroundImage: `url("Images/Login/Spa-img2.jpg")`,
  };
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div
        className=" w-5/6 min-h-screen justify-end flex bg-cover bg-center"
        style={divStyle}
      >
        <FormSignUp></FormSignUp>
      </div>
    </div>
  );
};

export default CrearCuenta;
