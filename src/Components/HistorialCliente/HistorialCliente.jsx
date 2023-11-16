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
              <div className="border-2 cursor-pointer border-azul rounded-2xl  bg-white p-2 mt-5 mb-4 mr-4 ml-4">
                <div className="bg-white flex p-2">
                  <div>
                  <p className="font-bold mx-2 text-justify text-lg">
                    {Lista.fecha}
                  </p>
                  <p className="font-bold mx-2 mt-2 text-justify text-lg">
                    {Lista.servicio}
                  </p>
                  </div>
                  <p className="font-bold mt-10 ml-auto text-lg ">
                Total: ${Lista.precio}
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
    { id: 1, fecha: "18/10/2023",  servicio: "Masaje, elimicación de berrugas", precio:"500" },
    { id: 2, fecha: "18/10/2023",  servicio: "Botox", precio:"300" },
    { id: 3, fecha: "18/10/2023",  servicio: "Masaje", precio:"300"},
    { id: 4, fecha: "18/10/2023",  servicio: "Masaje", precio:"300"},
    { id: 5, fecha: "18/10/2023",  servicio: "Masaje", precio:"300"},
  ];

  return <Pasadas Lista={Lista} />;
};

const HistorialCliente = ({ handleScreen }) => {
  return (
    <>
      <div className="flex justify-center ml-8 mt-10">
        <p className="font-medium justify-center text-4xl">Historial de citas</p>
      </div>
      <Citas/>
    </>
  );
};

export default HistorialCliente;

