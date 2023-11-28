import React from "react";
import FormUpdateService from "../../Components/Forms/FormUpdateService";
import { useLocation } from "react-router";

const EditarServicio = () => {
  const location = useLocation();
  const servicioData = location.state?.objeto || {};

  console.log("ID del servicio que se pasa a FormUpdateService:", servicioData.id);

  return (
    
    <FormUpdateService servicioData={servicioData} />
  );
};

export default EditarServicio;
