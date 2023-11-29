import React, { useEffect, useState } from "react";
import { getCitasFechaServicio } from "../controllers/citas.controller";

const useCitasFechas = (fecha, servicio) => {
  const [citasFechaServicio, setCitasFechaServicio] = useState([]);

  useEffect(() => {
    getCitasFechaServicio({ Fecha: fecha, Servicio: servicio })
      .then((allCitas) => setCitasFechaServicio(allCitas))
      .catch((error) => console.error('Error al obtener citas:', error));
  }, [fecha, servicio]); // Agrega fecha y servicio a la dependencia del useEffect

  return { citasFechaServicio};
};

export default useCitasFechas;
