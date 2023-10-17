import Servicios from "../Servicios/Servicios";
function Galeria({ imagenes }) {
  return (
    <div className=" grid grid-cols-3 place-content-center py-2">
      {imagenes.map((item, index) => (
        <Servicios
          key={index}
          nombre={item.nombre}
          imagen={item.imagen}
        ></Servicios>
      ))}
    </div>
  );
}

export default Galeria;
