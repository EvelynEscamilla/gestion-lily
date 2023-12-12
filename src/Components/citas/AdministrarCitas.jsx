import { putCancelar } from "../../controllers/historial.controller";

function Gestion({ item }) {
  const fecha = item.Fecha.toDate();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();

  const fechaFormateada = `${dia}/${mes}/${año}`;

  let hours = fecha.getHours();
  const minutes = fecha.getMinutes();
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${amPm}`;

  const handleRechazar = async (e) => {
    e.preventDefault();
    await putCancelar({
      Correo: item.Correo,
      Servicio: item.Servicio,
      Fecha: item.Fecha,
      Estado: "rechazada",
    });
    window.location.reload();
  };

  const handleAceptar = async (e) => {
    e.preventDefault();
    await putCancelar({
      Correo: item.Correo,
      Servicio: item.Servicio,
      Fecha: item.Fecha,
      Estado: "aceptada",
    });
    window.location.reload();
  };

  return (
    <form>
      <div className="border-2 cursor-pointer border-azul rounded-2xl bg-azulClaro m-3 p-2 ">
        <div className=" p-2 grid grid-rows-1 bg-white rounded-2xl items-center ">
          <div className="flex ">
            <p className="flex pr-2 justify-center items-center">
              <p className="font-bold pr-1">Fecha: </p> {fechaFormateada}
            </p>
            <p className=" pr-2"> | </p>
            <p className="flex pr-2 justify-center items-center">
              <p className="font-bold pr-1">Hora: </p>
              {formattedTime}
            </p>
          </div>
          <div className="flex">
            <p className=" flex pr-2 justify-center items-center">
              <p className="font-bold pr-1">Teléfono de Contacto: </p>
              {item.Contacto}{" "}
            </p>
          </div>
          <div className="flex">
            <p className="flex pr-2 justify-center items-center ">
              <p className="font-bold pr-1">Nombre del cliente: </p>
              {item.Cliente}
            </p>
          </div>
          <div className="flex">
            <p className="flex pr-2 justify-center items-center ">
              <p className="font-bold pr-1">Servicio: </p>
              {item.Servicio}
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-2 ">
          <button
            className="mr-4 border-2 rounded-2xl bg-white text-red-700 text-bold p-2"
            onClick={handleRechazar}
          >
            Rechazar
          </button>

          <button
            className="mr-4 border-2 rounded-2xl bg-white text-lime-500 text-bold  p-2"
            onClick={handleAceptar}
          >
            Aceptar
          </button>
        </div>
      </div>
    </form>
  );
}
export default Gestion;
