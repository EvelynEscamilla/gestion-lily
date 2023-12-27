import React, { useState , useEffect} from "react";
import BotonCalendario from "../boton/BotonCalendario";
import useServicios from "../../hooks/useServicios";

const FormSeleccionServicios = ({ actualizarServicio }) => {
  const { serviciosPrecioCor } = useServicios();
  const { serviciosPrecioFac } = useServicios();
  const [seleccionado, setSeleccionado] = useState(null);
  const [servicios, setServicios] = useState([]); // Estado para almacenar los resultados de la consulta
  useEffect(() => {
    // Llama a tu función para obtener los servicios basados en el tipo seleccionado
    const fetchData = async () => {
      try {
        const serviciosResult = await serviciosPrecioCor;
        setServicios(serviciosResult);
      } catch (error) {
        console.error(error);
      }
    };

  }, []);

  const handleSeleccion = (servicio) => {
    setSeleccionado(servicio === seleccionado ? null : servicio);
  };
  const handleActualizarServicio = () => {
    actualizarServicio(seleccionado);
  };
  const Servi = ({ ServCorporal, ServFacial }) => {
    return (
      <>
        <div className="mt-2 w-1/2">
          <div className="overflow-auto h-[20rem]">
            {ServCorporal.map((nombre) => (
              <div className="flex justify-left ml-6" key={nombre.nombre}>
                <label className="p-2 text-justify">
                  <input
                    type="radio"
                    name="grupoServicios"
                    value={nombre.nombre}
                    onChange={() => handleSeleccion(nombre.nombre)}
                    checked={nombre.nombre === seleccionado}
                  />
                  {nombre.nombre}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 w-1/2">
          <div className="overflow-auto h-[20rem]">
            {ServFacial.map((servicio) => (
              <div className="flex justify-left ml-6" key={servicio.id}>
                <label className="p-2 text-justify">
                  <input
                    type="radio"
                    name="grupoServicios"
                    value={servicio.servicio}
                    onChange={() => handleSeleccion(servicio.servicio)}
                    checked={servicio.servicio === seleccionado}
                  />
                  {servicio.servicio}
                </label>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  const Serv = () => {
    const ServCorporal = []

    const ServFacial = [
      { id: 1, servicio: "Ácido labios" },
      { id: 2, servicio: "Ácido nariz" },
      { id: 3, servicio: "Ácido nazogenianos" },
      { id: 4, servicio: "BB Glow" },
      { id: 5, servicio: "Botox por unidad" },
      { id: 6, servicio: "Dermapen" },
      { id: 7, servicio: "Facial" },
      { id: 8, servicio: "Hi-Fu" },
      { id: 9, servicio: "Hollywood peel" },
      { id: 10, servicio: "Hydrafacial" },
      {
        id: 11,
        servicio:
          "Láser diodo: Bigote, entrecejo, nariz, mejillas, orejas o patilla",
      },
      { id: 12, servicio: "Láser diodo: Nuca, maxilar o frente" },
      { id: 13, servicio: "Láser diodo: cuello o cara" },
      { id: 14, servicio: "Luz pulsada (Rejuvenecimiento, manchas y acné" },
      { id: 15, servicio: "Oxygeneo" },
      { id: 16, servicio: "Radio frecuencia con agujas" },
    ];

    return <Servi ServCorporal={ServCorporal} ServFacial={ServFacial} />;
  };
  return (
    <div className="flex items-center lg:flex justify-center">
      <div className="w-[40rem] bg-azulNav rounded-lg border-2 border-azul">
        <div className="flex justify-center bg-azulClaro text-white font-bold">
          <label className="mt-2 text-2xl">Servicios disponibles:</label>
        </div>
        <div className="flex">
          <label className="mt-4 w-1/2 border-2 flex justify-center bg-azul text-white text-bold">
            Corporales
          </label>
          <label className="mt-4 w-1/2 border-2 flex justify-center bg-azul text-white text-bold">
            Faciales
          </label>
        </div>
        <div className="flex">
          <Serv />
        </div>
        <BotonCalendario BG="turqueza" TC="white" oC={handleActualizarServicio}>
          Guardar Servicio
        </BotonCalendario>
      </div>
    </div>
  );
};

export default FormSeleccionServicios;
