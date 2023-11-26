import React, { useState } from 'react';

const CalendarComponent = ({ actualizarTexto, textoActual }) => {
  const [nuevoTexto, setNuevoTexto] = useState('');

  const handleInputChange = (event) => {
    setNuevoTexto(event.target.value);
  };

  const handleActualizarTexto = () => {
    actualizarTexto(nuevoTexto);
    setNuevoTexto(''); // Limpiar el campo de entrada después de la actualización
  };

  return (
    <div>
      <input type="text" value={nuevoTexto} onChange={handleInputChange} />
      <button onClick={handleActualizarTexto}>Actualizar Texto</button>
      <p>Texto actual en el padre: {textoActual}</p>
    </div>
  );
};

export default CalendarComponent;
