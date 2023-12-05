function Programadas ({ item }) {
    const fecha = item.Fecha.toDate();

    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; 
    const año = fecha.getFullYear();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();

    const fechaFormateada = `${dia}/${mes}/${año}`;
    const horaFormateada = `${hora}:${minutos}`;

    return (
      <>
        <div className="rounded-2xl border-2 border-azulClaro justify-center lg:w-[80%] w-screen h-[35rem] bg-azulNav lg:ml-8 mt-5 mb-20 overflow-hidden">
          <div className="flex justify-items-stretch mb-5">
            <div className="border-2 rounded-2xl bg-morado p-2 mt-5 lg:mx-4 mx-2 flex items-center lg:mr-6">
              <p className="font-bold text-xl text-white">FECHA</p>
            </div>
            <div className="border-2 rounded-2xl bg-morado p-2 mt-5 lg:mx-4 mx-2 flex items-center lg:mr-6">
              <p className="font-bold text-xl text-white">HORA</p>
            </div>
            <div className="border-2 rounded-2xl bg-morado p-2 mt-5 lg:mx-4 mx-2 flex items-center lg:mr-6">
              <p className="font-bold text-xl text-white">SERVICIOS</p>
            </div>
          </div>
          <hr />
          <div className="scroll-m-0 overflow-y-scroll h-[30rem]">
            
              <div>
                <div className="border-2 cursor-pointer border-azul rounded-2xl bg-white p-2 mt-5 flex items-center mb-2 mr-4 ml-4">
                <div className="bg-white p-2 flex items-center mr-2">
                    <p className="font-bold text-justify md:text-lg text-sm ">
                      {item.Cliente} |{" "}
                    </p>
                  </div>
                  <div className="bg-white p-2 flex items-center mr-2">
                    <p className="font-bold text-justify md:text-lg text-sm ">
                      {fechaFormateada} |{" "}
                    </p>
                  </div>
                  <div className="bg-white p-2 flex items-center mr-2">
                    <p className="font-bold text-justify md:text-lg text-sm">
                      {horaFormateada} |{" "}
                    </p>
                  </div>
                  <div className="bg-white p-2 flex items-center mr-2">
                    <p className="font-bold text-justify md:text-lg text-sm">
                      {item.Servicio}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mr-4 mb-4">
                  <button className="mr-4 border-2 rounded-2xl bg-white text-red-700 text-bold p-2">
                    Cancelar
                  </button>
                </div>
              </div>
            
          </div>
        </div>
      </>
    );
  };

  export default Programadas