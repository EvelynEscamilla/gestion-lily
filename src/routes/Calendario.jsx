import React, { useState, useEffect } from 'react';


const Carousel = () => {
    const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE']; // Los colores de los cuadros
    const [currentIndex, setCurrentIndex] = useState(0); 
  
    const goLeft = () => {
      setCurrentIndex(currentIndex === 0 ? meses.length - 1 : currentIndex - 1);
    };
  
    const goRight = () => {
      setCurrentIndex(currentIndex === meses.length - 1 ? 0 : currentIndex + 1);
    };

    const dias = Array.from({length: 30}, (_, i) => i + 1);
    
  const [datos, setDatos] = useState([]);
  const [seleccionado, setSeleccionado] = useState('');

  useEffect(() => {
    const obtenerDatos = async () => {
      const datosObtenidos = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '18:00'];
      setDatos(datosObtenidos);
    };

    obtenerDatos();
  }, []);

  const handleSelectChange = (event) => {
    setSeleccionado(event.target.value);
  };
  
    return (
      <>
          <div className="ml-4">
         <p className="mt-10 ml-52 font-medium text-xl">Selecciona la fecha de tu cita</p>
         </div>
      <div className="flex items-center mb-16 mt-2 w-full ">

        <button className="p-2 ml-4 bg-gray-300 rounded-full mr-2 hover:-translate-y-1 hover:scale-110 duration-200" onClick={goLeft}>←</button>
        <div className="w-2/5 h-[25rem] bg-azulNav rounded-lg border-2 border-azul"><p className="flex justify-center text-2xl bg-azulClaro text-white font-bold">{meses[currentIndex]}</p>
        <div className="mt-2 grid grid-cols-7 gap-4 p-4">
          {dias.map(dia => (
            <div key={dia} className="bg-morado text-center text-white rounded shadow drop-shadow-md p-2 hover:-translate-y-1 hover:scale-110 duration-200">
              <p>{dia}</p>
            </div>
          ))}
        </div></div>
        <button className="p-2 bg-gray-300 rounded-full ml-2 hover:-translate-y-1 hover:scale-110 duration-200" onClick={goRight}>→</button>
       
        <div className="w-[32rem] h-[25rem] bg-azulNav ml-4 rounded-lg border-2 border-azul">
        <div className="flex justify-center bg-azulClaro text-white font-bold">
          <p className="mt-2 text-2xl">Servicios disponibles:</p>
          </div>
          <div className="flex">
          <div className="mt-4 w-1/2 flex justify-center bg-azul text-white text-bold">Corporales</div>
          <div className="mt-4 w-1/2 flex justify-center bg-azul text-white text-bold">Faciales</div>
          </div>
          <div className="flex">
          <div className="mt-2 w-1/2"><ServCorporal/></div>
          <div className="mt-2 w-1/2"><ServFacial/></div>
          </div>
          </div>
          <div className="w-1/12 h-[25rem] bg-azulNav ml-4 rounded-lg border-2 border-azul flex flex-col justify-between">
  <div className="mb-10 ">
    <div className="flex justify-center">
    <select 
      onChange={handleSelectChange} 
      className="rounded-2xl bg-azulClaro text-white font-bold px-3 py-2 mt-2"
    >
      <option value="">Horario</option>
      {datos.map((dato, index) => (
        <option key={index} value={dato}>{dato}</option>
      ))}
    </select>
    </div>
    <p className={`rounded-2xl bg-azul text-center text-white font-bold px-2 py-2 mt-2 mx-2 ${seleccionado ? '' : 'hidden'}`}>
      Hora confirmada {seleccionado}
    </p>
  </div>

  <div className="flex justify-center mb-2">
    <button className="rounded-2xl bg-turqueza text-white font-bold px-3 py-2 hover:-translate-y-1 hover:scale-100 duration-200">RESERVAR</button>
  </div>
</div> 
      </div>
      </>
    );
  };

  const ServCorporal = () => {
    const ServCorporal= [
        { id: 1, servicio: 'Auriculoterapia'},
        { id: 2, servicio: 'Carboxiterapia'},
        { id: 3, servicio: 'Cavitación'},
        { id: 4, servicio: 'Diatermia'},
        { id: 5, servicio: 'Desintoxicación Iónica'},
        { id: 6, servicio: 'Drenaje Linfatico'},
        { id: 7, servicio: 'Eliminación de tatuajes'},
        { id: 8, servicio: 'Elimiación de verrugas'},
        { id: 9, servicio: 'Envolturas cuerpo completo'},
        { id: 10, servicio: 'Envolturas espalda'},
        { id: 11, servicio: 'Envolturas piernas y glúteo'},
        { id: 12, servicio: 'Enzimas'},
        { id: 13, servicio: 'Emszero sesión'},
        { id: 14, servicio: 'Hi-Fu'},
        { id: 15, servicio: 'Láser diodo: Ombligo, dedos de pies o dedos de manos'},
        { id: 16, servicio: 'Láser diodo: Pies, axilas o bikini'},
        { id: 17, servicio: 'Láser diodo: Busto, coxis, cuello, ingles, abdomen, bikini brasileño, glúteos, medias piernas o medios brazos'},
        { id: 18, servicio: 'Láser diodo: Piernas completas, espalda, brazos completos o tronco'},
        { id: 19, servicio: 'Levantamiento de glúteo'},
        { id: 20, servicio: 'Lipoláser'},
        { id: 21, servicio: 'Masaje piedras calientes'},
        { id: 22, servicio: 'Masaje a 4 manos'},
        { id: 23, servicio: 'Masaje rebozo'},
        { id: 24, servicio: 'Masaje sen 1'},
        { id: 25, servicio: 'Masajes (relajante, descontracturante, ventosas o bambuterapia)'},
        { id: 26, servicio: 'Mesoterapia inyectada'},
        { id: 27, servicio: 'Mesoterapia virtual'},
        { id: 28, servicio: 'Moldeado corporal (10 sesiones)'},
        { id: 29, servicio: 'Ondas rusas'},
        { id: 30, servicio: 'Paquete post operatorio (10 sesiones)'},
        { id: 31, servicio: 'Paquete reductivo (10 sesiones)'},
        { id: 32, servicio: 'Radiofrecuencia'},
        { id: 33, servicio: 'Tratamiento calvicie'},
        { id: 34, servicio: 'Ultrasonido clínico'},
        ];

    return <Corporales ServCorporal={ServCorporal} />;
};
  
const Corporales = ({ServCorporal}) => {

  return(
    <>
    <div className="overflow-auto h-72">
    {ServCorporal.map(ServCorporal => (
      <form className="flex justify-left ml-6">
        <label className="p-2 text-justify">
          <input className="mr-4"
          type="radio"
          value="opcion"
          />
          {ServCorporal.servicio}
        </label>
      </form>
      ))}
    </div>
    </>
  );
};

const ServFacial = () => {
  const ServFacial= [
      { id: 1, servicio: 'Ácido labios'},
      { id: 2, servicio: 'Ácido nariz'},
      { id: 3, servicio: 'Ácido nazogenianos'},
      { id: 4, servicio: 'BB Glow'},
      { id: 5, servicio: 'Botox por unidad'},
      { id: 6, servicio: 'Dermapen'},
      { id: 7, servicio: 'Facial'},
      { id: 8, servicio: 'Hi-Fu'},
      { id: 9, servicio: 'Hollywood peel'},
      { id: 10, servicio: 'Hydrafacial'},
      { id: 11, servicio: 'Láser diodo: Bigote, entrecejo, nariz, mejillas, orejas o patilla'},
      { id: 12, servicio: 'Láser diodo: Nuca, maxilar o frente'},
      { id: 13, servicio: 'Láser diodo: cuello o cara'},
      { id: 14, servicio: 'Luz pulsada (Rejuvenecimiento, manchas y acné'},
      { id: 15, servicio: 'Oxygeneo'},
      { id: 16, servicio: 'Radio frecuencia con agujas'},
      ];

  return <Faciales ServFacial={ServFacial} />;
};

const Faciales = ({ServFacial}) => {

  return(
    <>
    <div className="overflow-auto h-72">
    {ServFacial.map(ServFacial => (
      <form className="flex justify-left ml-6">
        <label className="p-2 text-justify">
          <input className="mr-4"
          type="radio"
          value="opcion"
          />
          {ServFacial.servicio}
        </label>
      </form>
      ))}
    </div>
    </>
  );
};

function Calendario({handleScreen}) {

  return (
    <>
    <Carousel handleScreen={handleScreen}/>
   
    </>
  );
}

export default Calendario;
