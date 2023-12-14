
import React, { useEffect, useState } from "react";
import {
  getServicios,
  getServiciosBy,
  getServiciosPrecioCorporal,
  getServiciosPrecioFacial,
  getServiciosSearch
} from "../controllers/servicios.controller";

const useServicios = (nombre) => {
  const [servicios, setServicios] = useState([]);
  const [serviciosPrecioCor, setServiciosPC] = useState([]);
  const [serviciosPrecioFac, setServiciosPF] = useState([]);
  const [serviciosBy, setServiciosBy] = useState([])
  const [serviciosSearch, setServiciosSearch] = useState([])

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

  useEffect(() => {
    getServiciosBy({nombre: nombre}).then((allServicios) =>
      setServiciosBy(allServicios)
    );
  }, [nombre]);

  useEffect(() => {
    getServiciosSearch({nombre: nombre}).then((allServicios) =>
      setServiciosSearch(allServicios)
    );
  }, [nombre]);

  return { servicios, serviciosPrecioCor, serviciosPrecioFac, serviciosBy, serviciosSearch };

};


export default useServicios;
