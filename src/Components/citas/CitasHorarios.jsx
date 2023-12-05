import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const CitasHorarios = ({ onChange, duracion, setValHora }) => {
  const [turno, setTurno] = useState("manana"); // Valor predeterminado en "manana"
  const [inicioManana, setInicioManana] = useState(new Date(0, 0, 0, 6, 0)); // 7 AM
  const [inicioTarde, setInicioTarde] = useState(new Date(0, 0, 0, 13, 0)); // 4 PM

  const handleTimeChangeManana = (newValue) => {
    // Verificar si la hora seleccionada está dentro del rango de la mañana
    const isValid = newValue.getHours() >= 7 && newValue.getHours() <= 14;

    if (isValid) {
      setInicioManana(newValue);
      onChange(newValue);
    }

    setValHora(isValid);
  };

  const handleTimeChangeTarde = (newValue) => {
    // Verificar si la hora seleccionada está dentro del rango de la tarde
    const isValid = newValue.getHours() >= 16 && newValue.getHours() <= 18;

    if (isValid) {
      setInicioTarde(newValue);
      onChange(newValue);
    }

    setValHora(isValid);
  };

  const handleTurnoChange = (event) => {
    setTurno(event.target.value);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={["TimePicker"]}>
          {/* RadioGroup para seleccionar el turno */}
          <RadioGroup row value={turno} onChange={handleTurnoChange}>
            <FormControlLabel value="manana" control={<Radio />} label="Mañana" />
            <FormControlLabel value="tarde" control={<Radio />} label="Tarde" />
          </RadioGroup>
        </DemoContainer>

        <DemoContainer components={["TimePicker"]}>
          {/* TimePicker para el rango de la mañana */}
          {turno === "manana" && (
            <TimePicker
              value={inicioManana}
              label="Hora de Inicio (Mañana)"
              onChange={handleTimeChangeManana}
              minTime={new Date(0, 0, 0, 7, 0)} // 7 AM
              maxTime={new Date(0, 0, 0, 14, 0)} // 2 PM
              sx={{ width: "100%" }}
            />
          )}

          {/* TimePicker para el rango de la tarde */}
          {turno === "tarde" && (
            <TimePicker
              value={inicioTarde}
              label="Hora de Inicio (Tarde)"
              onChange={handleTimeChangeTarde}
              minTime={new Date(0, 0, 0, 16, 0)} // 4 PM
              maxTime={new Date(0, 0, 0, 18, 0)} // 7 PM
              sx={{ width: "100%" }}
            />
          )}
        </DemoContainer>
      </LocalizationProvider>
      {turno === "manana" && (
        <>
          <p>Hora de Inicio (Mañana): {formatTime(inicioManana)}</p>
          <p>Hora de Finalizacion: {formatTime(new Date(inicioManana.getTime() + duracion * 60000))}</p>
        </>
      )}
      {turno === "tarde" && (
        <>
          <p>Hora de Inicio (Tarde): {formatTime(inicioTarde)}</p>
          <p>Hora de Finalizacion: {formatTime(new Date(inicioTarde.getTime() + duracion * 60000))}</p>
        </>
      )}
    </>
  );
};

export default CitasHorarios;
