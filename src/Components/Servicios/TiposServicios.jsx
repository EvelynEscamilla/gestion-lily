import "./Servicios.css";

const Servicios = ({ nombre, imagen }) => {
  return (
    <div className="col-span-1 flex justify-center items-center h-40 relative p-3">
      <div className="bg-gray-200 h-36 rounded-3xl  w-80 relative">
        <div className=" bg-turqueza bg-opacity-90 h-14 bottom-0 absolute inset-x-0  rounded-b-3xl">
          <p className=" mx-2 absolute text-white bottom-2 text-xl">
            {nombre}
          </p>
        </div>
        <img
          src={imagen}
          alt="Mi Imagen"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Servicios;
