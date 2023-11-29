function Pasadas({item}) {
    console.log(item)

    const fecha = item.Fecha.toDate();

    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; 
    const año = fecha.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${año}`;

    return (
        <div>
                            <div className="border-2 relative border-azul rounded-2xl bg-white p-2 mt-5 flex flex-col  mb-2 mr-4 ml-4">
                                <div className="bg-white p-2 mr-2 flex">
                                    <p className="font-bold flex text-justify text-lg mr-2">
                                     Cliente: 
                                    </p><p className="text-justify text-lg">
                                      {item.Cliente}
                                    </p>
                                </div>

                                <div className="bg-white p-2 flex mr-2">
                                <p className="font-bold flex text-justify text-lg mr-2">
                                     Fecha: 
                                    </p><p className="text-justify text-lg ">
                                    {fechaFormateada}
                                    </p>
                                </div>

                                <div className="bg-white p-2 flex  mr-2">
                                <p className="font-bold flex text-justify text-lg mr-2">
                                     Servicio: 
                                    </p><p className="text-justify text-lg">
                                    {item.Servicio}
                                    </p>
                                </div>
                                <div className="absolute bottom-1 right-0 bg-white p-2 mr-2">
                                <p className="font-bold flex text-justify text-lg mr-2">
                                     Total: 
                                    </p><p className="font-medium text-justify text-lg">
                                        ${item.Total}
                                    </p>
                                </div>
                            </div>
                        </div>
        
    );
};

export default Pasadas