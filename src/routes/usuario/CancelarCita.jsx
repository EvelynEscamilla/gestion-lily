const Programadas = ({ Lista }) => {
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
          {Lista.map((Lista) => (
            <div>
              <div className="border-2 cursor-pointer border-azul rounded-2xl bg-white p-2 mt-5 flex items-center mb-2 mr-4 ml-4">
                <div className="bg-white p-2 flex items-center mr-2">
                  <p className="font-bold text-justify md:text-lg text-sm ">
                    {Lista.fecha} |{" "}
                  </p>
                </div>
                <div className="bg-white p-2 flex items-center mr-2">
                  <p className="font-bold text-justify md:text-lg text-sm">
                    {Lista.hora} |{" "}
                  </p>
                </div>
                <div className="bg-white p-2 flex items-center mr-2">
                  <p className="font-bold text-justify md:text-lg text-sm">
                    {Lista.servicio}
                  </p>
                </div>
              </div>
              <div className="flex justify-end mr-4 mb-4">
                <button className="mr-4 border-2 rounded-2xl bg-white text-red-700 text-bold p-2">
                  Cancelar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Advertencia = () => {
  return (
    <>
      <div className="flex items-center lg:mt-64 w-full h-[8rem] lg:mb-20 mb-5 text-justify border-2 border-azul bg-azulNav">
        <p className="text-2xl px-6 cursor-pointer" >
          Recuerda cancelar tu cita con al menos un día de anticipación
        </p>
      </div>
    </>
  );
};

const CitasP = () => {
  const Lista = [
    { id: 1, fecha: "18/10/2023", hora: "10:00 am", servicio: "Masaje" },
    { id: 2, fecha: "18/10/2023", hora: "10:00 am", servicio: "Masaje" },
    { id: 3, fecha: "18/10/2023", hora: "10:00 am", servicio: "Masaje" },
    { id: 4, fecha: "18/10/2023", hora: "10:00 am", servicio: "Masaje" },
    { id: 5, fecha: "18/10/2023", hora: "10:00 am", servicio: "Masaje" },
  ];

  return <Programadas Lista={Lista} />;
};

const CancelarCita = () => {
  return (
    <>
      <div className="flex justify-center w-1/2 ml-8 mt-10">
        <p className="font-medium justify-center text-4xl">Citas programadas</p>
      </div>
      <div className="lg:flex grid grid-rows-1">
        <div className="w-full">
          <CitasP />
        </div>
        <div className="w-full lg:w-1/2 lg:mr-11"> 
          <Advertencia />
        </div>
      </div>
    </>
  );
};

export default CancelarCita;