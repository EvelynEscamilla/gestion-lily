import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Pasadas = ({ Lista }) => {
  return (
    <>
      <div className="rounded-2xl border-2 mx-auto border-azulClaro w-1/2 h-[35rem] bg-azulNav ml-8 mt-5 mb-20 overflow-hidden">
          <div className="border-2 rounded-2xl text-center bg-morado p-2 w-full h-1/6">
            <p className="font-bold text-3xl mt-3 text-white">Citas completadas</p>
          </div>
        <hr />
        <div className="scroll-m-0 overflow-y-scroll h-[30rem]">
          {Lista.map((Lista) => (
            <div>
              <div className="border-2 cursor-pointer border-azul rounded-2xl bg-white p-2 mt-5 mb-2 mr-4 ml-4">
                <div className="bg-white p-2">
                  <p className="font-bold mx-2 text-justify text-lg">
                    {Lista.fecha}
                  </p>
                  <p className="font-bold mx-2 mt-2 text-justify text-lg">
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
    { id: 1, fecha: "18/10/2023",  servicio: "Masaje, elimicación de berrugas" },
    { id: 2, fecha: "18/10/2023",  servicio: "Botox" },
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

