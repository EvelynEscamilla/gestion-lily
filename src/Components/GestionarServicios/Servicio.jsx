/* eslint-disable react/prop-types */
function Servicio({ sendDataToParent, item, handleScreen }) {
  const enviarDatosServicios = (data) => {
    sendDataToParent(data);
  };
  return (
    <>
      <tr className="border-b border-opacity-20 border-gray-700 text-black">
        <td className="p-3 text-center">
          <p>{item.numero}</p>
        </td>
        <td className="p-3 text-center">
          <img className=" h-16" src={item.imagen} />
        </td>
        <td className="p-3">
          <p>{item.nombre}</p>
        </td>
        <td className="p-3">
          <p className=" line-clamp-2 ">{item.descripcion}</p>
          <p className="dark:text-gray-400">{item.tipo}</p>
        </td>
        <td className="p-3">
          <p>{item.duracion}</p>
          <p className="dark:text-gray-400">{item.max} Personas</p>
        </td>
        <td className="p-3 text-center">
          <p>{item.precio}</p>
        </td>
        <td className="p-3 text-center ">
          <div className="flex gap-3 items-center justify-center">
          <button
            className="px-4 py-2 font-semibold rounded-3xl bg-morado text-white my-auto"
            onClick={() => handleScreen("EditarServicio", item)}
          >
            <span>Editar</span>
          </button>

          </div>
        </td>
      </tr>
    </>
  );
}

export default Servicio;
