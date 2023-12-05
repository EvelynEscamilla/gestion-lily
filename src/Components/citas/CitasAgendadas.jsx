import { putCancelar } from "../../controllers/historial.controller";


function Programadas ({ item }) {
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

    return (
      <>
            <form onSubmit={handleSubmit} action="">
                <div className="border-2 cursor-pointer border-azul rounded-2xl bg-white p-2 mt-4 flex items-center mb-2 mr-4 ml-4">
                <div className="bg-white p-2 flex items-center mr-2">
                    <p className="font-bold text-justify md:text-lg text-sm ">
                      {item.Cliente} |{" "}
                    </p>
                  </div>
                  <div className="bg-white p-2 flex items-center mr-2">
                    <p className="font-bold text-justify md:text-lg text-sm ">
                      {fechaFormateada} |{" "}
                    </p>
                  </div>
                  <div className="bg-white p-2 flex items-center mr-2">
                    <p className="font-bold text-justify md:text-lg text-sm">
                      {horaFormateada} |{" "}
                    </p>
                  </div>
                  <div className="bg-white p-2 flex items-center mr-2">
                    <p className="font-bold text-justify md:text-lg text-sm">
                      {item.Servicio}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mr-4 mb-4">
                  <button className="mr-4 border-2 rounded-2xl bg-white text-red-700 text-bold p-2" type="submit">
                    Cancelar
                  </button>
                </div>
              </form>
            
      </>
    );
  };

  export default Programadas