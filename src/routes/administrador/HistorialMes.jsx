
const HistorialMes = () => {
    return (
        <>
            <div className="flex justify-center ml-8 mt-10">
                <p className="font-medium justify-center text-4xl">Historial de citas por mes</p>
            </div>
            <Citas />
        </>
    );
};

const Pasadas = ({ Lista }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="rounded-2xl  border-2 border-azulClaro w-3/4 lg:w-1/2 h-[35rem] bg-azulNav ml-8 mt-5 mb-20 overflow-hidden">
                <div className="flex flex-col items-center my-3">
                    <div>
                        <select className="p-2 rounded-2xl font-semibold text-lg border-2 border-azulClaro" name="meses" id="">
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
                    {Lista.map((Lista) => (
                        <div>
                            <div className="border-2 relative cursor-pointer border-azul rounded-2xl bg-white p-2 mt-5 flex flex-col  mb-2 mr-4 ml-4">
                                <div className="bg-white p-2 flex  mr-2">
                                    <p className="font-bold text-justify text-lg">
                                        {Lista.fecha}
                                    </p>
                                </div>

                                <div className="bg-white p-2 flex  mr-2">
                                    <p className="font-medium text-justify text-lg ">
                                        {Lista.cliente}
                                    </p>
                                </div>

                                <div className="bg-white p-2 flex  mr-2">
                                    <p className="font-bold text-justify text-lg">
                                        {Lista.hora} |{Lista.servicio}
                                    </p>
                                </div>

                                <div className=" absolute bottom-1 right-0 bg-white p-2 mr-2">
                                    <p className="font-bold text-justify text-lg">
                                        ${Lista.precio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const Citas = () => {
    const Lista = [
        { id: 1, fecha: "1/10/2023", hora: "15:00", servicio: " Masaje", precio: "300", cliente: "Maria Paredes" },
        { id: 2, fecha: "12/10/2023", hora: "10:00", servicio: " Masaje", precio: "300", cliente: "Selene Delgado" },
        { id: 3, fecha: "15/10/2023", hora: "10:00", servicio: " Masaje", precio: "300", cliente: "Selene Delgado" },
        { id: 4, fecha: "18/10/2023", hora: "16:00", servicio: " Masaje", precio: "300", cliente: "Diana Ornelas" },
        { id: 5, fecha: "23/10/2023", hora: "10:00", servicio: " Masaje", precio: "300", cliente: "Selene Delgado" },
    ];

    return <Pasadas Lista={Lista} />;
};



export default HistorialMes;

