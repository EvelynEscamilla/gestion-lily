import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import imagenes from "../MostrarServicios/Imagenes";
import Servicio from "./Servicio";

const GestionarServicios = ({ handleScreen }) => {
  const handleDFC = (data) => {
    console.log("Datos recibidos desde Mostrar Servicios", data);
  };
  return (
    <>
      <Navbar handleScreen={handleScreen} />

      <div>
        <div className=" pt-12 mx-auto px-4 pb-4  text-white ">
          <h2 className="mb-4 text-5xl text-center text-black">Servicios</h2>
          <div className=" w-screen flex justify-between">
        <div className=" w-1/2">
          <div className=" p-3 ">
            <button className=" shadow-md rounded-3xl border border-black text-black font-semibold" onClick={() => handleScreen("AgregarServicio")}>
              <div className="  flex p-3 justify-center items-center">
                <p className=" text-2xl px-2">+</p>
                <p>Agregar Servicio</p>
              </div>
            </button>
          </div>
        </div>
        <div className=" w-1/2">2</div>
      </div>
      <div>
        <div>o</div>
      </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-2 border-azulClaro ">
              <thead className=" bg-turqueza text-base  ">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className=" w-24" />
                </colgroup>
                <tr className="text-left">
                  <th className="p-3 text-center ">No. de Servicio</th>
                  
                  <th className="p-3 text-center border-x-2 border-azulClaro">Imagen</th>

                  <th className="p-3 text-center">Nombre de Servicio</th>
                  <th className="p-3 text-center border-x-2 border-azulClaro">Descripcion y Tipo</th>
                  <th className="p-3 text-center">Duracion y Personas</th>
                  <th className="p-3 text-center border-x-2 border-azulClaro">Precio</th>
                  <th className="p-3 text-center">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {imagenes.map((item, index) => (
                  <Servicio
                    key={index}
                    sendDataToParent={handleDFC}
                    item={item}
                    
                    handleScreen={handleScreen}
                  ></Servicio>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GestionarServicios;
