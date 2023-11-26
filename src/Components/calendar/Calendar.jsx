import React, { useState } from "react";
import { esES } from "@mui/x-date-pickers/locales";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import BotonCalendario from "../boton/BotonCalendario";
//si
const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#8893c2",
        light: "#8893c2",
        dark: "#8893c2",
        contrastText: "#fff",
      },
    },
    components: {
      MuiPickersDay: {
        styleOverrides: {

        },
      },
    },
  },
  esES
);
const Calendar = ({ actualizarFecha}) => {
  const [nuevaFecha, setNuevaFecha] = useState(null);

  const handleActualizarFecha = () => {
    actualizarFecha(nuevaFecha);
  };

  return (
    <>
      <div className=" flex justify-center h-full ">
        <div className="w-fit rounded-lg border-2 border-azul h-full  bg-azulNav  flex flex-col text-center justify-center items-center">
          <div className=" bg-azulClaro w-full ">
            <p className=" font-bold text-xl text-white p-3">
              Selecciona la fecha de tu cita
            </p>
          </div>
          <ThemeProvider theme={theme}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              localeText={esES}
            >
              <StaticDatePicker
                disablePast={true}
                autoFocus={true}
                value={nuevaFecha}
                onChange={setNuevaFecha}
                sx={{
                  bgcolor: "#EDF8F8",
                }}
                slotProps={{
                  actionBar: {
                    actions: ["today"],
                  },
                  toolbar: {
                    hidden: true,
                  },
                }}
              />
            </LocalizationProvider>
          </ThemeProvider>
          <BotonCalendario BG="turqueza" TC="white" oC={handleActualizarFecha}>Guardar Fecha</BotonCalendario>
        </div>
      </div>
    </>
  );
};

export default Calendar;
