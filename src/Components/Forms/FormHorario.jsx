import React, { useState, useEffect } from "react";
import BotonCalendario from "../boton/BotonCalendario";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const FormHorario = ({ onChange }) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const datosObtenidos = [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
      ];
      setDatos(datosObtenidos);
    };

    obtenerDatos();
  }, []);
  return (
    <>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DemoContainer components={["TimePicker"]}>
                  <TimePicker label="Basic time picker" onChange={onChange} />
                </DemoContainer>
              </LocalizationProvider>

    </>
  );
};

export default FormHorario;
