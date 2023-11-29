import useHistorial from "../../hooks/useHistorial";
import Pasadas from "../../Components/citas/HistorialCitasM"
import React, { useState } from 'react';

const HistorialMes = () => {
    const { citas } = useHistorial();
    const cita = citas;

    const mesActual = new Date().getMonth() + 1;

    const [mesSeleccionado, setMesSeleccionado] = useState(mesActual.toString());

    const citasFiltradas = cita.filter(item => {
        const fecha = item.Fecha.toDate();
        const mesCita = fecha.getMonth() + 1;
        const estadoCita = item.Estado;

        return mesCita.toString() === mesSeleccionado && estadoCita === "Realizada";
    });

    return (
        <>
            <div className="flex justify-center ml-8 mt-10">
                <p className="font-medium justify-center text-4xl">Historial de citas por mes</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="rounded-2xl  border-2 border-azulClaro w-3/4 lg:w-1/2 h-[35rem] bg-azulNav ml-8 mt-5 mb-20 overflow-hidden">
                    <div className="flex flex-col items-center my-3">
                        <div>
                            <select
                                className="p-2 rounded-2xl font-semibold text-white text-lg border-2 bg-morado"
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

