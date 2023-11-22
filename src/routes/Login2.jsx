import React from "react";
import { Link } from "react-router-dom";
import TextField from "../Components/TextField/TextField";
import Boton from "../Components/boton/Boton";
import FormLogin from "../Components/Forms/FormLogin";
import { useAuth } from '../context/authContext'

const Login2 = () => {


  const divStyle = {
    backgroundImage: `url("Images/Login/Spa-img2.jpg")`,
  };
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div
        className=" w-5/6 min-h-screen  justify-end flex bg-cover bg-center"
        style={divStyle}
      >
        <FormLogin />
      </div>
    </div>
  );
};

export default Login2;
