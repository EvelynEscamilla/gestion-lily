import useHistorial from "../../hooks/useHistorial";
import Pasadas from "../../Components/citas/HistorialCitasM"
import React, { useState, useEffect } from 'react';
import { putCancelar } from "../../controllers/historial.controller";


const HistorialMes = () => {
    const { citas } = useHistorial();
    const cita = citas;
    const [citasActualizadas, setCitasActualizadas] = useState([]);

    const mesActual = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const [mesSeleccionado, setMesSeleccionado] = useState(mesActual.toString());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const handleYearChange = (increment) => {
        setSelectedYear(selectedYear + increment);
    };

    const Actualizar = async (item) => {
        
        await putCancelar({
            Correo: item.Correo,
            Servicio: item.Servicio,
            Fecha: item.Fecha,
            Estado: "Realizada",
        });
    };

    useEffect(() => {
        const filteredCitas = cita.filter((item) => {
            const estadoCita = item.Estado;
            const fechaCita = item.Fecha.toDate();
            return estadoCita === "aceptada" && fechaCita < new Date();
        });

        setCitasActualizadas(filteredCitas);

        filteredCitas.forEach((item) => {
            Actualizar(item);
        });
    }, []);

    

    const citasFiltradas = cita.filter(item => {
        const fecha = item.Fecha.toDate();
        const mesCita = fecha.getMonth() + 1;
        const añoCita = fecha.getFullYear();
        const estadoCita = item.Estado;

        return mesCita.toString() === mesSeleccionado && añoCita === selectedYear && estadoCita === "Realizada";
    });
 

    return (
        <> 
            <div className="flex justify-center text-center mt-10">
                <p className="font-medium justify-center text-4xl">Historial de Citas Realizadas</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="rounded-2xl  border-2 border-azulClaro w-3/4 lg:w-1/2 h-[35rem] bg-azulNav ml-8 mt-5 mb-20 overflow-hidden">
                <div className="flex items-center justify-center my-3">
                    <div className="lg:w-1/3">
                        <div className="flex items-center justify-center lg:w-32 lg:h-12 h-12 p-2 rounded-2xl  border-2 bg-morado">
                        <button
                            className="p-2 mr-2l text-2xl text-white"
                            onClick={() => handleYearChange(-1)}
                            disabled={selectedYear <= currentYear - 1}
                        >
                            &#9666;
                        </button>
                        <span className="font-semibold text-white text-lg">{selectedYear}</span>
                        <button
                            className="p-2 ml-2 text-2xl text-white"
                            onClick={() => handleYearChange(1)}
                        >
                            &#9656;
                        </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <select
                        className="p-2 lg:w-full rounded-2xl font-semibold text-white text-center text-lg border-2 bg-morado"
                        name="meses"
                        id=""
                        value={mesSeleccionado}
                        onChange={(e) => setMesSeleccionado(e.target.value)}
                        >
                        <option value="1">Enero</option>
                        <option value="2">Febrero</option>
                        <option value="3">Marzo</option>
                        <option value="4">Abril</option>
                        <option value="5">Mayo</option>
                        <option value="6">Junio</option>
                        <option value="7">Julio</option>
                        <option value="8">Agosto</option>
                        <option value="9">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                        </select>
                    </div>
                    </div>

                    <div className="scroll-m-0 overflow-y-scroll h-[30rem]">
                        {citasFiltradas.map((item, index) => (
                            <Pasadas
                                key={index}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HistorialMes;

