import React, { useState, useEffect } from "react";

import Calendar from "../Components/calendar/Calendar";
import FormSeleccionServicios from "../Components/forms/FormSeleccionServicios";
import FormHorario from "../Components/forms/FormHorario";
import { postCita } from "../controllers/citas.controller";
import { Button } from "@mui/base";
import moment from "moment/moment";
const Calendario = () => {
  const [Fecha, setFecha] = useState("");
  const [Servicio, setServicio] = useState("");
  const [hora, setHora] = useState("");
  const [Cliente, setCliente] = useState("Omar");
  const [Contacto, setContacto] = useState("1234");
  const [Estado, setEstado] = useState("En Espera");
  const [Numero_cliente, setNumero_cliente] = useState("1");
  const [Total, setTotal] = useState("1000");

  const handleActualizarFecha = (nuevaFecha) => {
    setFecha(nuevaFecha);
  };
  const handleActualizarServicio = (nuevoServicio) => {
    setServicio(nuevoServicio);
  };
  useEffect(() => {
    const hora24 = moment(hora, "hh:mm A").format("HH:mm");
    const fechaHora = moment(
      `${moment(Fecha).format("YYYY-MM-DD")} ${hora24}`,
      "YYYY-MM-DD HH:mm"
    );

    setFecha(fechaHora.toDate());
  }, [ hora]);

  const handleActualizarHora = (nuevaHora) => {
    console.log(
      Fecha +
        " " +
        Servicio +
        " " +
        
        " " +
        Cliente +
        " " +
        Contacto +
        " " +
        Estado +
        " " +
        Numero_cliente +
        " " +
        Total
    );
    setHora(nuevaHora);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("se sube desde aqui");
    //Funcion de subir
    await postCita({
      Fecha,
      Servicio,
      
      Cliente,
      Contacto,
      Estado,
      Numero_cliente,
      Total,
    });

    e.target.reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:flex sm:block justify-center items-center min-h-screen "
      >
        <div className=" lg:w-2/6">
          <Calendar
            actualizarFecha={handleActualizarFecha}
            fechaActual={Fecha}
          />
        </div>

        <div className=" lg:w-1/2 ">
          <FormSeleccionServicios
            actualizarServicio={handleActualizarServicio}
          />
        </div>
        <div className="lg:w-1/6">
          <FormHorario
            actualizarHora={handleActualizarHora}
            horaActual={hora}
          />
        </div>
        <button>Halo</button>
      </form>
    </>
  );
};

export default Calendario;
