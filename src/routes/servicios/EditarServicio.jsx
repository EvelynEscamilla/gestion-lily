import React from "react";
import InputImage from "../../Components/inputImage/InputImage";
import Boton from "../../Components/boton/Boton";
import FormUpdateService from "../../Components/Forms/FormUpdateService";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";





const EditarServicio =  () => {

  const location = useLocation();
  console.log(location.state);
  return (
    
    <FormUpdateService/>
  );
};

export default EditarServicio;
