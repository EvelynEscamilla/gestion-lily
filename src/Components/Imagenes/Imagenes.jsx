import Auriculoterapia from "../../assets/Servicios/Auriculoterapia.jpg";
import Carboxiterapia from "../../assets/Servicios/Carboxiterapia.jpg";
import Cavitacion from "../../assets/Servicios/Cavitacion.jpg";
import Diatermia from "../../assets/Servicios/Diatermia.jpg";
import DesintoxicacionI from "../../assets/Servicios/DesintoxicacionIonica.jpg";
import Drenaje from "../../assets/Servicios/DrenajeLinfatico.jpg";
import EliminacionT from "../../assets/Servicios/EliminaciondeTatuajes.jpg";
import EliminacionV from "../../assets/Servicios/EliminaciondeVerrugas.jpg";
import Envolturas from "../../assets/Servicios/EnvolturasCuerpoCompleto.jpg";

const imagenes = [
  {
    nombre: "Auriculoterapia",
    descripcion:
      " La auriculoterapia es una técnica de acupuntura que se centra en estimular puntos específicos en la oreja externa. Se cree que estos puntos están relacionados con diferentes partes del cuerpo y se utilizan para aliviar el dolor, reducir el estrés y tratar una variedad de condiciones médicas.",
    precio: "$250",
    imagen: Auriculoterapia,
  },
  {
    nombre: "Carboxiterapia",
    descripcion: "La carboxiterapia es un tratamiento estético que implica la inyección de dióxido de carbono (CO2) de grado médico en la piel o los tejidos subcutáneos. Se utiliza para mejorar la circulación sanguínea, reducir la grasa localizada y tratar la celulitis.",
    precio: "$300",
    imagen: Carboxiterapia,
  },
  {
    nombre: "Cavitacion",
    descripcion: "La cavitación es un procedimiento no quirúrgico que utiliza ultrasonidos de baja frecuencia para romper las células de grasa en el cuerpo. Se emplea para reducir la grasa corporal y remodelar áreas problemáticas.",
    precio: "$300",
    imagen: Cavitacion,
  },
  {
    nombre: "Diatermia",
    descripcion: "La diatermia es un tratamiento que utiliza calor terapéutico de alta frecuencia para estimular la circulación sanguínea, relajar los músculos y reducir la inflamación. Se utiliza comúnmente en fisioterapia y rehabilitación.",
    precio: "",
    imagen: Diatermia,
  },
  {
    nombre: "Desintoxicacion Ionica",
    descripcion: "Este tratamiento implica sumergir los pies en un baño de agua con sales minerales y utilizar una máquina que emite una corriente eléctrica débil. Se promociona como una forma de eliminar toxinas del cuerpo a través de los poros de los pies, aunque la eficacia de este procedimiento es controvertida.",
    precio: "$300",
    imagen: DesintoxicacionI,
  },
  {
    nombre: "Drenaje Linfatico",
    descripcion: "El drenaje linfático es un masaje terapéutico suave que se realiza para estimular el sistema linfático. Se utiliza para reducir la retención de líquidos, mejorar la circulación linfática y promover la eliminación de toxinas del cuerpo.",
    precio: "$600",
    imagen: Drenaje,
  },
  {
    nombre: "Eliminacion de Tatuajes",
    descripcion: "Este tratamiento implica el uso de láseres o procedimientos quirúrgicos para eliminar tatuajes no deseados de la piel. Los láseres rompen las partículas de tinta para que el cuerpo pueda eliminarlas gradualmente.",
    precio: "Depende",
    imagen: EliminacionT,
  },
  {
    nombre: "Eliminacion de Verrugas",
    descripcion: " La eliminación de verrugas implica la extirpación o destrucción de verrugas cutáneas, comúnmente mediante crioterapia (congelación), electrocauterización o cirugía.",
    precio: "Depende",
    imagen: EliminacionV,
  },
  {
    nombre: "Envolturas Cuerpo Completo",
    descripcion: "Las envolturas corporales son tratamientos de spa que implican cubrir el cuerpo con una mezcla de ingredientes como arcilla, algas marinas, lodo o aceites esenciales. Se envuelve el cuerpo en plástico o tela durante un período de tiempo para promover la relajación, hidratación de la piel o la pérdida temporal de pulgadas.",
    precio: "$800",
    imagen: Envolturas,
  },
];

export default imagenes;
