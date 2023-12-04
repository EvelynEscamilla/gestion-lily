import React from "react";
import { esES } from "@mui/x-date-pickers/locales";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

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
        styleOverrides: {},
      },
    },
  },
  esES
);
const CitasCalendario = ({ onChange }) => {
  return (
    <div className="">

      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns} localeText={esES}>
          <StaticDatePicker
            className="fecha text-5xl"
            onChange={onChange}
            disablePast={true}
            autoFocus={true}
            sx={{
              "& .MuiPickersDay-root": {
                fontSize: "15px", // Cambia esto al tamaño de fuente que prefieras
              },
              "& .MuiDateCalendar-root": {
                
                fontSize: "20px", // Cambia esto al tamaño de fuente que prefieras
              },
              "& .MuiPickersCalendarHeader-root": {
                //width: "100vh",
                fontSize: "20px", // Cambia esto al tamaño de fuente que prefieras
              },
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
    </div>
  );
};

export default CitasCalendario;
