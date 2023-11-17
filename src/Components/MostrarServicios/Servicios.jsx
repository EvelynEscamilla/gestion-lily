<<<<<<< HEAD

=======
>>>>>>> main
function Servicios({ sendDataToParent, item }) {
  const enviarDatosServicios = (data) => {
    sendDataToParent(data);
  };

  return (
    <div
      className="col-span-1 flex justify-center items-center h-40 relative p-3"
      onClick={() => enviarDatosServicios(item)}
    >
      <div className="bg-gray-200 h-36 rounded-3xl  w-52 relative hover:-translate-y-1 hover:scale-110 duration-200">
        <div className="bg-morado bg-opacity-90 h-14 bottom-0 absolute inset-x-0  flex justify-center items-center text-center rounded-b-3xl">
          <p className=" mx-2 absolute text-white bottom-2 text-xl leading-none ">
            {item.nombre}
          </p>
        </div>
        <img
          src={item.imagen}
          alt="Mi Imagen"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}

export default Servicios;
