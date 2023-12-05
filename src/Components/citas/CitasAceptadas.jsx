import { putCancelar } from "../../controllers/historial.controller";

function Aceptadas ({item}){
    const fecha = item.Fecha.toDate();

    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; 
    const año = fecha.getFullYear();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();

    const fechaFormateada = `${dia}/${mes}/${año}`;
    const horaFormateada = `${hora}:${minutos}`;

    const handleSubmit = async (e) => {
        e.preventDefault()
        await putCancelar({
            Correo: item.Correo,
            Servicio: item.Servicio,
            Fecha: item.Fecha,
            Estado: "cancelada",
          });
          
    
        window.location.reload()
      }

    return(
        <form form onSubmit={handleSubmit} action="">
            <div className="border-2 cursor-pointer border-azul rounded-2xl bg-white p-2 items-center mb-2 mr-2 ml-2">
                <div className="bg-white p-2 lg:flex grid grid-rows-1 items-center mr-2">
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
                <button className="mr-4 border-2 rounded-2xl bg-white text-red-700 text-bold p-2" type="submit">Cancelar</button>
            </div>
        </form>
    );
};

export default Aceptadas