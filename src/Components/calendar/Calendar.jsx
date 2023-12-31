import React, { useState } from "react";
import { esES } from "@mui/x-date-pickers/locales";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import BotonCalendario from "../boton/BotonCalendario";

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
const Calendar = ({ onChange }) => {
  return (
    <>
      <div className=" flex justify-center">
        <div className="w-fit rounded-lg border-2 border-azul bg-azulNav  flex flex-col text-center justify-center items-center">
          <div className=" bg-azulClaro w-full ">
            <p className=" font-bold text-2xl text-white p-3">
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
                onChange={onChange}
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
                renderInput={(startProps, endProps) => (
                  <>
                    <input {...startProps} />
                  </>
                )}
              />
              {/* <p>Fecha seleccionada: {nuevaFecha?.toLocaleDateString()}</p> */}
            </LocalizationProvider>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default Calendar;
