import imagenes from "../../Components/mostrarServicios/Imagenes";
import Servicio from "../../Components/gestionarServicios/Servicio";
import { Link } from 'react-router-dom'
import useServicios from "../../hooks/useServicios";

const GestionarServicios = () => {

  const { servicios } = useServicios()

  console.log(servicios)

  const handleDFC = (data) => {
    console.log("Datos recibidos desde Mostrar Servicios", data);
  };
  return (
    <>
      <div>
        <div className=" pt-12 mx-auto px-4 pb-4  text-white ">
          <p className="mb-4 text-5xl text-center text-black">Servicios</p>
          <div className=" w-full flex justify-between">
            <div className=" w-1/2">
              <div className=" p-3 ">
                <Link to="/gestion-lily/agregar-servicios">
                  <button className=" shadow-md rounded-3xl border border-black text-black font-semibold">
                    <div className="  flex p-3 justify-center items-center">
                      <p className=" text-2xl px-2">+</p>
                      <p>Agregar Servicio</p>
                    </div>
                  </button>
                </Link>
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

                  ></Servicio>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GestionarServicios;
