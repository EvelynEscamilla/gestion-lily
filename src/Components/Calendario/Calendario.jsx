import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { useState } from 'react';


const Carousel = () => {
    const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE']; // Los colores de los cuadros
    const [currentIndex, setCurrentIndex] = useState(0); // El índice del cuadro que se muestra actualmente
  
    const goLeft = () => {
      setCurrentIndex(currentIndex === 0 ? meses.length - 1 : currentIndex - 1);
    };
  
    const goRight = () => {
      setCurrentIndex(currentIndex === meses.length - 1 ? 0 : currentIndex + 1);
    };
  
    return (
      <div>
          <div className="ml-4">
         <p className="mt-10 ml-52 font-medium text-xl">Selecciona la fecha de tu cita</p>
         </div>
      <div className="flex items-center mb-10 mt-5 ml-10">
        <button className="p-2 bg-gray-300 rounded-full mr-4" onClick={goLeft}>←</button>
        <div className="flex justify-center w-2/5 h-96 bg-azulNav rounded-lg"><p className="mt-5">{meses[currentIndex]}</p></div>
        <button className="p-2 bg-gray-300 rounded-full ml-4" onClick={goRight}>→</button>
        <div className="w-2/5 h-96 bg-azulNav ml-8 rounded-lg border-2 border-azul">
        <div className="flex justify-center bg-azulClaro text-white text-bold">
          <p className="mt-2 text-2xl">Servicios disponibles:</p>
          </div>
          <div className="flex">
          <div className="mt-5 w-1/2 flex justify-center bg-azul text-white text-bold">Corporales</div>
          <div className="mt-5 w-1/2 flex justify-center bg-azul text-white text-bold">Faciales</div>
          </div>
          <div className="flex">
          <div className="mt-2 w-1/2"><ServCorporal/></div>
          <div className="mt-2 w-1/2"><ServFacial/></div>
          </div>
          </div>
      
      </div>
      </div>
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

function Calendario() {

  return (
    <div>
    <Navbar/>  
    <Carousel/>
    <Footer/>
    </div>
  );
}

export default Calendario;
