import React, { useState } from "react";
import { TextField, Select, MenuItem } from "@mui/material";
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

const CalendarComp = () => {
  const [fechaSeleccionada, setfechaSeleccionada] = useState(new Date());
  const [texto, setTexto] = useState("");
  const [seleccion, setSeleccion] = useState("");
  const [value, setValue] = React.useState(null);

  const manejarCambioTexto = (evento) => {
    setTexto(evento.target.value);
  };

  const manejarCambioFecha = (evento) => {
    setfechaSeleccionada(evento.target.value);
  };

  const manejarCambioSeleccion = (evento) => {
    setSeleccion(evento.target.value);
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log("Fecha", value)
    console.log("Texto:", texto);
    console.log("Selección:", seleccion);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns} localeText={esES}>
          <StaticDatePicker
            disablePast={true}
            autoFocus={true}
            value={fechaSeleccionada}
            onChange={(newValue) => {
              setValue(newValue);
            }}
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
      <TextField value={texto} onChange={manejarCambioTexto} />
      <Select value={seleccion} onChange={manejarCambioSeleccion}>
        <MenuItem value="opcion1">Opción 1</MenuItem>
        <MenuItem value="opcion2">Opción 2</MenuItem>
      </Select>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CalendarComp;
