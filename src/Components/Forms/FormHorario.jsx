import React, { useState, useEffect } from 'react';


const FormHorario  = () => { 
  const [datos, setDatos] = useState([]);
  const [seleccionado, setSeleccionado] = useState('');

  useEffect(() => {
    const obtenerDatos = async () => {
      const datosObtenidos = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
      setDatos(datosObtenidos);
    };

    obtenerDatos();
  }, []);

  const handleSelectChange = (event) => {
    setSeleccionado(event.target.value);
  };
    return (
      <>
      <div className="flex items-center lg:flex justify-center ">
          <div className="w-[10rem] h-[28rem] bg-azulNav rounded-lg border-2 border-azul flex flex-col justify-between">
            <div className="mb-10 ">
                <div className="flex justify-center">
                <select 
                name="hora"
                onChange={handleSelectChange} 
                className="w-[9rem] rounded-2xl bg-azulClaro text-white font-bold px-3 py-2 mt-2"
                >
                <option value="">Horario</option>
                {datos.map((dato, index) => (
                    <option key={index} value={dato}>{dato}</option>
                ))}
                </select>
                </div>
                <label className={`rounded-2xl bg-azul text-center text-white font-bold px-2 py-2 mt-2 mx-2 ${seleccionado ? '' : 'hidden'}`}>
                Hora confirmada {seleccionado}
                </label>
            </div>

            <div className="flex justify-center mb-2">
                <button className="rounded-2xl w-[9rem] bg-turqueza text-white font-bold px-3 py-2 hover:-translate-y-1 hover:scale-100 duration-200">RESERVAR</button>
            </div>
            </div>
            </div> 
      
      </>
    );
  };

  
  


export default FormHorario;