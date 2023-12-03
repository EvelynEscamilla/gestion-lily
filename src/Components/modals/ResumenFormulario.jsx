import React from "react";

const ResumenFormulario = ({ formData }) => {
  const { fecha, grupoServicios, precio, personas } = formData;

  // Verifica si cada campo tiene un valor antes de mostrarlo
  const mostrarFecha = fecha ? <p>{fecha.toString()}</p> : null;

  // Divide la variable mostrarFecha en dos variables
  let mostrarDia = null;
  let mostrarHoraYMinutos = null;

  if (fecha) {
    mostrarDia = <p> {fecha.toLocaleDateString()}</p>;
    mostrarHoraYMinutos = (
      <p>
        {" "}
        {fecha.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </p>
    );
  }

  const mostrarGrupoServicios = grupoServicios ? (
    <p> {grupoServicios}</p>
  ) : null;
  const mostrarPrecio = precio ? <p> {precio}</p> : null;
  const mostrarPersonas = personas ? <p> {personas}</p> : null;
  const total = precio && personas ? precio * personas : null;
  return (
    <>
      <div className=" ">
        <div className=" flex border-b-2 ">
          <p className=" font-bold w-1/2 pb-1">Fecha: </p>
          {mostrarDia}
        </div>
        <div className=" flex border-b-2 ">
          <p className=" font-bold w-1/2 pb-1">Hora: </p>
          {mostrarHoraYMinutos}
        </div>
        <div className=" flex border-b-2 ">
          <p className=" font-bold w-1/2 pb-1">Servicio: </p>
          {mostrarGrupoServicios}
        </div>
        <div className=" flex border-b-2 ">
          <p className=" font-bold w-1/2 pb-1">Precio del Servicio:</p>
          {mostrarPrecio}
        </div>
        <div className=" flex border-b-2 ">
          <p className=" font-bold w-1/2 pb-1">Cantidad de Personas:</p>
          {mostrarPersonas}
        </div>
        <div className=" flex border-t-2 text-2xl ">
        {total && <p>Total: {total}</p>}
        </div>
      </div>
    </>
  );
};

export default ResumenFormulario;
