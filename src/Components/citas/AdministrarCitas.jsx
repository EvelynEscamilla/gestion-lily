import { putCancelar } from "../../controllers/historial.controller";

function Gestion ({item}){
   
    const fecha = item.Fecha.toDate();

    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; 
    const año = fecha.getFullYear();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();

    const fechaFormateada = `${dia}/${mes}/${año}`;
    const horaFormateada = `${hora}:${minutos}`;

    

    const handleRechazar = async (e) => {
        e.preventDefault();
        await putCancelar({
          Correo: item.Correo,
          Servicio: item.Servicio,
          Fecha: item.Fecha,
          Estado: "rechazada",
        });
        window.location.reload()
      };
    
      const handleAceptar = async (e) => {
        e.preventDefault();
        await putCancelar({
          Correo: item.Correo,
          Servicio: item.Servicio,
          Fecha: item.Fecha,
          Estado: "aceptada",
        });
        window.location.reload()
      };

      return(
        <form>
            <div className="border-2 cursor-pointer border-azul rounded-2xl bg-white p-2 mt-2  mb-2 mr-4 ml-4">
                <div className="bg-white p-2 lg:flex grid grid-rows-1 items-center mr-2 ">
                    <div className='flex'>
                        <p className="font-bold text-justify text-lg mr-2">{fechaFormateada}</p>
                        <p className="font-bold text-justify text-lg mr-2"> | </p>
                        <p className="font-bold text-justify text-lg mr-2">{horaFormateada} </p>
                        <p className="font-bold text-justify text-lg mr-2 hidden lg:block"> | </p>
                    </div>
                    <div className='flex'>
                        <p className="font-bold text-justify text-lg mr-2">{item.Contacto}  </p>
                        <p className="font-bold text-justify text-lg mr-2 hidden lg:block"> | </p>
                    </div>
                    <div className='flex'>
                        <p className="font-bold text-justify text-lg">{item.Cliente}</p>
                    </div>
                </div>
                <div className="bg-white p-2 flex items-center mr-2">
                    <p className="font-bold text-justify text-lg">{item.Servicio}</p>
                </div>
            </div>
            <div className="flex justify-end mr-4 mb-4">

                <button className="mr-4 border-2 rounded-2xl bg-white text-red-700 text-bold p-2" onClick={handleRechazar}>Rechazar</button>


                <button className="mr-4 border-2 rounded-2xl bg-white text-lime-500 text-bold  p-2" onClick={handleAceptar}>Aceptar</button>

            </div>
        </form>
    );
};
export default Gestion