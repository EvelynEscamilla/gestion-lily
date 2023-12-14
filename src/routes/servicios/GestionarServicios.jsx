import Servicio from "../../Components/gestionarServicios/Servicio";
import { Link } from 'react-router-dom'
import useServicios from "../../hooks/useServicios";
import { useState } from "react";
import FormUpdateService from "../../Components/Forms/FormUpdateService";
import TextField from "../../Components/TextField/TextField";

const GestionarServicios = () => {



  const [visibleEditServicio, setVisibleEditServicio] = useState(null)

  const [nombre, setNombre] = useState('');

  const handleChangeBuscar = (event) => {
    setNombre(event.target.value);
    
  };


  const {servicios, serviciosSearch } = useServicios(nombre)
  

  return (
    <>
      {/* Modal de editar */}
      {visibleEditServicio && (
        <div className="absolute w-full h-fit  sm:h-full flex justify-center items-center text-white text-xl z-20">
          <div onClick={() => setVisibleEditServicio(null)} className="w-full h-full bg-gray-800/40 backdrop-blur-md absolute -z-10"></div>
          <FormUpdateService idServicio={visibleEditServicio} />
        </div>
      )}
      <div>
        <div className=" pt-12 mx-auto px-4 pb-4  text-white ">
          <p className=" text-5xl text-center text-black">Servicios</p>

          <div className=" flex flex-col md:flex-row items-center justify-center p-5 w-full text-black md:space-x-16">

            <Link to="/gestion-lily/agregar-servicios">
              <button className=" shadow-md rounded-3xl border border-black  font-semibold">
                <div className=" flex p-3 justify-center items-center">
                  <p className=" text-2xl px-2">+</p>
                  <p className=" ">Agregar Servicio</p>
                </div>
              </button>
            </Link>

            <div className=" w-full md:w-[40rem] px-4 flex flex-row items-center justify-center bg-turqueza rounded-md">
              <label className="text-white font-semibold">Buscar servicio:</label>
              <TextField onChange={handleChangeBuscar} />
            </div>
          </div>


          <div>

          </div>
          <div className="overflow-x-auto h-[60vh] overflow-y-auto">
            <table className="min-w-full border-2 text-sm md:text-base border-azulClaro ">
              <thead className=" bg-turqueza ">

                <tr className="text-left">

                  <th className="p-3 text-center border-x-2 border-azulClaro">Imagen</th>
                  <th className="md:p-3 text-center">Nombre de Servicio</th>
                  <th className="md:p-3 text-center border-x-2 border-azulClaro">Descripcion y Tipo</th>
                  <th className="md:p-3 text-center border-x-2">Duracion y Maximo de personas</th>
                  <th className="md:p-3 text-center">Maximo de servicios al mismo tiempo</th>
                  <th className="md:p-3 text-center border-x-2 border-azulClaro">Precio</th>
                  <th className="md:p-3 text-center">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  
                    serviciosSearch.map((servicio, index) => (
                      <Servicio
                        key={index}
                        item={servicio}
                        handleVisibilityChange={setVisibleEditServicio}
                      />
                    ))
                    
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GestionarServicios;
