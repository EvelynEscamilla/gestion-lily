import Servicio from "../../Components/gestionarServicios/Servicio";
import { Link } from 'react-router-dom'
import useServicios from "../../hooks/useServicios";
import { useState } from "react";
import FormUpdateService from "../../Components/Forms/FormUpdateService";

const GestionarServicios = () => {

  const { servicios } = useServicios()

  const [visibleEditServicio, setVisibleEditServicio] = useState(null)
  
  return (
    <>
      {/* Modal de editar */}
      {visibleEditServicio && (
        <div className="absolute w-full h-fit  sm:h-full flex justify-center items-center text-white text-xl z-20">
          <div onClick={()=> setVisibleEditServicio(null)} className="w-full h-full bg-gray-800/40 backdrop-blur-md absolute -z-10"></div>
          <FormUpdateService idServicio={visibleEditServicio} />
        </div>
      )}
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
          <div className="overflow-x-auto h-[60vh] overflow-y-auto">
            <table className="min-w-full border-2 border-azulClaro ">
              <thead className=" bg-turqueza text-base  ">

                <tr className="text-left">

                  <th className="p-3 text-center border-x-2 border-azulClaro">Imagen</th>

                  <th className="p-3 text-center">Nombre de Servicio</th>
                  <th className="p-3 text-center border-x-2 border-azulClaro">Descripcion y Tipo</th>
                  <th className="p-3 text-centerborder-x-2">Duracion y Maximo de personas</th>
                  <th className="p-3 text-center">Maximo de servicios al  mismo tiempo</th>
                  <th className="p-3 text-center border-x-2 border-azulClaro">Precio</th>
                  <th className="p-3 text-center">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {servicios.map((servicio, index) => (
                  <Servicio
                    key={index}
                    item={servicio}
                    handleVisibilityChange={setVisibleEditServicio}
                  />
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
