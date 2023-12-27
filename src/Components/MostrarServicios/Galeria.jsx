import Servicios from "../Servicios/Servicios";
import imagenes from "./Imagenes";
function Galeria({EnviarDatos}) {
  const handleDFC = (data) => {
  }
  return (
    <div className=" grid grid-cols-3 place-content-center py-2">
      {imagenes.map((item, index) => (
        <Servicios
          key={index}
          sendDataToParent={handleDFC}
          item={item}
        ></Servicios>
      ))}
    </div>
  );
}

export default Galeria;
