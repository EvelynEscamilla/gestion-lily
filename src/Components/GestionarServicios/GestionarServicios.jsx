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
          <h2 className="mb-4 text-2xl text-black">Servicios</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full  ">
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
                  <th className="p-3">No. de Servicio</th>
                  <th className="p-3">Imagen</th>

                  <th className="p-3">Nombre de Servicio</th>
                  <th className="p-3">Descripcion y Tipo</th>
                  <th className="p-3">Duracion y Personas</th>
                  <th className="p-3 text-right">Precio</th>
                  <th className="p-3 text-center">Editar</th>
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
