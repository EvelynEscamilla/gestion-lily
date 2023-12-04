import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
const CitasHorarios = ({ onChange, duracion }) => {
  const [inicio, setInicio] = useState(new Date().setHours(0, 0, 0, 0));
  const [fin, setFin] = useState(new Date());

  useEffect(() => {
    // Calcular la hora de finalización en función de la duración
    const nuevaFechaFin = new Date(inicio);
    nuevaFechaFin.setMinutes(nuevaFechaFin.getMinutes() + duracion);

    // Actualizar los estados de inicio y fin
    setFin(nuevaFechaFin);
  }, [inicio, duracion]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={["TimePicker"]}>
          <TimePicker
            value={inicio}
            label="Hora de Inicio"
            onChange={(newValue) => {
              setInicio(newValue);
              onChange(newValue);
            }}
            sx={{ width: "100%" }}
          />
        </DemoContainer>
      </LocalizationProvider>
      Hora de Inicio: {inicio}
      Hora de Finalizacion: {fin}
    </>
  );
};

export default CitasHorarios;
