import React, { useState } from "react";
import BotonCalendario from "../boton/BotonCalendario";

const FormSeleccionServicios = ({ actualizarServicio }) => {
  const [nuevoServicio, setNuevoServicio] = useState("");

  const [seleccionado, setSeleccionado] = useState(null);

  const handleSeleccion = (servicio) => {
    setSeleccionado(servicio === seleccionado ? null : servicio);
  };
  const handleInputChange = (event) => {
    setNuevoServicio(event.target.value);
  };
  const handleActualizarServicio = () => {
    actualizarServicio(seleccionado);
  };
  const Servi = ({ ServCorporal, ServFacial }) => {
    return (
      <>
        <div className="mt-2 w-1/2">
          <div className="overflow-auto h-80">
            {ServCorporal.map((servicio) => (
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
        <div className="mt-2 w-1/2">
          <div className="overflow-auto h-80">
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
    const ServCorporal = [
      { id: 1, servicio: "Auriculoterapia" },
      { id: 2, servicio: "Carboxiterapia" },
      { id: 3, servicio: "Cavitación" },
      { id: 4, servicio: "Diatermia" },
      { id: 5, servicio: "Desintoxicación Iónica" },
      { id: 6, servicio: "Drenaje Linfatico" },
      { id: 7, servicio: "Eliminación de tatuajes" },
      { id: 8, servicio: "Elimiación de verrugas" },
      { id: 9, servicio: "Envolturas cuerpo completo" },
      { id: 10, servicio: "Envolturas espalda" },
      { id: 11, servicio: "Envolturas piernas y glúteo" },
      { id: 12, servicio: "Enzimas" },
      { id: 13, servicio: "Emszero sesión" },
      { id: 14, servicio: "Hi-Fu" },
      {
        id: 15,
        servicio: "Láser diodo: Ombligo, dedos de pies o dedos de manos",
      },
      { id: 16, servicio: "Láser diodo: Pies, axilas o bikini" },
      {
        id: 17,
        servicio:
          "Láser diodo: Busto, coxis, cuello, ingles, abdomen, bikini brasileño, glúteos, medias piernas o medios brazos",
      },
      {
        id: 18,
        servicio:
          "Láser diodo: Piernas completas, espalda, brazos completos o tronco",
      },
      { id: 19, servicio: "Levantamiento de glúteo" },
      { id: 20, servicio: "Lipoláser" },
      { id: 21, servicio: "Masaje piedras calientes" },
      { id: 22, servicio: "Masaje a 4 manos" },
      { id: 23, servicio: "Masaje rebozo" },
      { id: 24, servicio: "Masaje sen 1" },
      {
        id: 25,
        servicio:
          "Masajes (relajante, descontracturante, ventosas o bambuterapia)",
      },
      { id: 26, servicio: "Mesoterapia inyectada" },
      { id: 27, servicio: "Mesoterapia virtual" },
      { id: 28, servicio: "Moldeado corporal (10 sesiones)" },
      { id: 29, servicio: "Ondas rusas" },
      { id: 30, servicio: "Paquete post operatorio (10 sesiones)" },
      { id: 31, servicio: "Paquete reductivo (10 sesiones)" },
      { id: 32, servicio: "Radiofrecuencia" },
      { id: 33, servicio: "Tratamiento calvicie" },
      { id: 34, servicio: "Ultrasonido clínico" },
    ];

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
      <div className="w-11/12 bg-azulNav rounded-lg border-2 border-azul ">
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
        <div className="flex mb-4">
          <Serv />
        </div>
        <div className="flex justify-center"> 
        <BotonCalendario BG="turqueza" TC="white" oC={handleActualizarServicio}>Guardar Servicio</BotonCalendario>
      </div>
      </div>
    </div>
  );
};

export default FormSeleccionServicios;
