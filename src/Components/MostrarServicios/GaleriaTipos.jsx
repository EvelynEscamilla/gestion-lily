import TiposServicios from "./TiposServicios.jsx"

function Galeria({ imagenesTipos }) {
  return (
    <div className=" grid grid-cols-2 place-content-center py-2">
      {imagenesTipos.map((item, index) => (
        <TiposServicios
          key={index}
          nombre={item.nombre}
          imagen={item.imagen}
        ></TiposServicios>
      ))}
    </div>
  );
}

export default Galeria;
