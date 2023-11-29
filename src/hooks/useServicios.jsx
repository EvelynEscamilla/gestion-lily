import React, { useEffect, useState } from "react";
import {
  getServicios,
  getServiciosPrecioCorporal,
  getServiciosPrecioFacial,
} from "../controllers/servicios.controller";


const useServicios = () => {
  const [servicios, setServicios] = useState([]);
  const [serviciosPrecioCor, setServiciosPC] = useState([]);
  const [serviciosPrecioFac, setServiciosPF] = useState([]);


  useEffect(() => {
    getServicios().then((allServicios) => setServicios(allServicios))
  }, []);
  useEffect(() => {
    getServiciosPrecioCorporal().then((allServicios) =>
      setServiciosPC(allServicios)
    );
  }, []);
  useEffect(() => {
    getServiciosPrecioFacial().then((allServicios) =>
      setServiciosPF(allServicios)
    );
  }, []);


  return { servicios, serviciosPrecioCor, serviciosPrecioFac };
};

export default useServicios;
