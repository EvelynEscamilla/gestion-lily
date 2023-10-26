import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Pasadas = ({ Lista }) => {
  return (
    <>
      <div className="rounded-2xl border-2 border-azulClaro w-1/2 h-[35rem] bg-azulNav ml-8 mt-5 mb-20 overflow-hidden">
        <div className="flex justify-items-stretch mb-5">
          <div className="border-2 rounded-2xl bg-morado p-2 mt-5 mx-4 flex items-center mr-6">
            <p className="font-bold text-xl text-white">FECHA</p>
          </div>
          <div className="border-2 rounded-2xl bg-morado p-2 mt-5 mx-4 flex items-center mr-6">
            <p className="font-bold text-xl text-white">SERVICIOS HECHOS</p>
          </div>
        </div>
        <hr />
        <div className="scroll-m-0 overflow-y-scroll h-[30rem]">
          {Lista.map((Lista) => (
            <div>
              <div className="border-2 cursor-pointer border-azul rounded-2xl bg-white p-2 mt-5 flex items-center mb-2 mr-4 ml-4">
                <div className="bg-white p-2 flex items-center mr-2">
                  <p className="font-bold text-justify text-lg">
                    {Lista.fecha} |{" "}
                  </p>
                </div>
                <div className="bg-white p-2 flex items-center mr-2">
                  <p className="font-bold text-justify text-lg">
                    {Lista.hora} |{" "}
                  </p>
                </div>
                <div className="bg-white p-2 flex items-center mr-2">
                  <p className="font-bold text-justify text-lg">
                    {Lista.servicio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


const Citas = () => {
  const Lista = [
    { id: 1, fecha: "18/10/2023",  servicio: "Masaje" },
    { id: 2, fecha: "18/10/2023",  servicio: "Masaje" },
    { id: 3, fecha: "18/10/2023",  servicio: "Masaje" },
    { id: 4, fecha: "18/10/2023",  servicio: "Masaje" },
    { id: 5, fecha: "18/10/2023",  servicio: "Masaje" },
  ];

  return <Pasadas Lista={Lista} />;
};

const HistorialCliente = ({ handleScreen }) => {
  return (
    <>
      <Navbar handleScreen={handleScreen} />
      <div className="flex justify-center ml-8 mt-10">
        <p className="font-medium justify-center text-4xl">Historial de citas</p>
      </div>
      <Citas/>
      <Footer />
    </>
  );
};

export default HistorialCliente;

