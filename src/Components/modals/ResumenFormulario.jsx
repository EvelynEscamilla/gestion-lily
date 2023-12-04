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
        <div className="   ">
          <p className=" font-bold  ">Fecha: </p>
          {mostrarDia}
        </div>
        <div className="   ">
          <p className=" font-bold  ">Hora: </p>
          {mostrarHoraYMinutos}
        </div>
        <div className="   ">
          <p className=" font-bold  ">Servicio: </p>
          {mostrarGrupoServicios}
        </div>
        <div className="   ">
          <p className=" font-bold  ">Precio del Servicio:</p>
          {mostrarPrecio}
        </div>
        <div className="   ">
          <p className=" font-bold  ">Cantidad de Personas:</p>
          {mostrarPersonas}
        </div>
        <div className="   text-2xl ">{total && <p>Total: {total}</p>}</div>
      </div>
    </>
  );
};

export default ResumenFormulario;
