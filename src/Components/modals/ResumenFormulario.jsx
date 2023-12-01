import React from 'react'

const ResumenFormulario = ({formData}) => {
    const { fecha, grupoServicios, precio, personas } = formData;

    // Verifica si cada campo tiene un valor antes de mostrarlo
    const mostrarFecha = fecha ? <p>Fecha: {fecha.toString()}</p> : null;
    const mostrarGrupoServicios = grupoServicios ? <p>Grupo de Servicios: {grupoServicios}</p> : null;
    const mostrarPrecio = precio ? <p>Precio: {precio}</p> : null;
    const mostrarPersonas = personas ? <p>Personas: {personas}</p> : null;
  
    return (
      <>
        {mostrarFecha}
        {mostrarGrupoServicios}
        {mostrarPrecio}
        {mostrarPersonas}
      </>
    );
}

export default ResumenFormulario