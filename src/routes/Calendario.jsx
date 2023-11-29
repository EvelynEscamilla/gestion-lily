import React, { useState, useEffect } from "react";

import Calendar from "../Components/calendar/Calendar";
import FormSeleccionServicios from "../Components/forms/FormSeleccionServicios";
import FormHorario from "../Components/forms/FormHorario";
import { postCita } from "../controllers/citas.controller";
import moment from "moment/moment";
import { useAuth } from "../context/authContext";
import ModUsr from "../Components/modals/modUsr";
import useCitasFechas from "../hooks/useCitasFechas";
import useForm from "../hooks/useForm";

const Calendario = () => {
  const { userData } = useAuth();
  const [Fecha, setFecha] = useState(null);
  const [Servicio, setServicio] = useState(null);
  const [hora, setHora] = useState("");
  const [Cliente, setCliente] = useState(null);
  const [Contacto, setContacto] = useState(null);
  const [Estado, setEstado] = useState("En Espera");
  const [Numero_cliente, setNumero_cliente] = useState("1");
  const [Total, setTotal] = useState("");
  const { citasFechaServicio } = useCitasFechas(Fecha, Servicio);

  const handleActualizarServicio = (nuevoServicio) => {
    setServicio(nuevoServicio);
  };
  const handleActualizarPrecio = (nuevoPrecio) => {
    setTotal(nuevoPrecio);
  };
  //formData.fecha, Servicio
  const { formData, handleFormDataChange, handleDateChange, handleTimeChange } =
    useForm();

  useEffect(() => {
    if (formData !== null) {
      setFecha(formData.fecha);
      setServicio(formData.grupoServicios);
    }
  }, [formData]);

  console.log(citasFechaServicio);
  useEffect(() => {
    const hora24 = moment(hora, "hh:mm A").format("HH:mm");
    const fechaHora = moment(
      `${moment(Fecha).format("YYYY-MM-DD")} ${hora24}`,
      "YYYY-MM-DD HH:mm"
    );

    setFecha(fechaHora.toDate());
  }, [hora]);

  useEffect(() => {
    if (userData) {
      setCliente(userData.nombreCompleto);
      setContacto(userData.telefono);
    }
  }, [userData]);
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
      {!userData && <ModUsr />}
      <form
        onSubmit={handleSubmit}
        className="w-full lg:flex sm:block justify-center items-center min-h-screen "
      >
        <div className=" lg:w-2/6">
          <Calendar onChange={handleDateChange} />
        </div>

        <div className=" lg:w-1/2">
          <FormSeleccionServicios onChange={handleFormDataChange} />
        </div>
        <div className="lg:w-1/6">
          <div className="flex items-center lg:flex justify-center p-5 ">
            <div className="w-8/9 h-[31rem] bg-azulNav rounded-lg border-2 border-azul flex flex-col justify-between">
              <div className="mb-10 ">
                <div className=" justify-center inline-block">
                  <FormHorario onChange={handleTimeChange} />
                  <select name="personas" onChange={handleFormDataChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <button>Halo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Calendario;
