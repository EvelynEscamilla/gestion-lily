import React from "react";
import InputImage from "../../Components/inputImage/InputImage";
import Boton from "../../Components/boton/Boton";
import FormUpdateService from "../../Components/Forms/FormUpdateService";
import { Link } from "react-router-dom";



const EditarServicio = ({ item }) => {
  console.log(item);
  return (
    
    <FormUpdateService/>
  );
};

export default EditarServicio;
