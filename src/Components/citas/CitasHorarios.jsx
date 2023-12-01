import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
const CitasHorarios = ({ onChange }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={["TimePicker"]}>
          <TimePicker
            label="Hora de Inicio"
            onChange={onChange}
            sx={{ width: "100%" }}
          />
        </DemoContainer>
        <DemoContainer components={["TimePicker"]}>
          <TimePicker
            label="Hora de Finalizacion"
            onChange={onChange}
            sx={{ width: "100%" }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default CitasHorarios;
