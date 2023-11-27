/*
ESQUEMA DE CITA
ID DEL DOCUMENTO === GENERADO AUTOMATICAMENTE
{
    fecha: //Timestamp//,
    clienteId: Id del cliente,
    servicioId: Id del servicio,
    estado: Estado del servicio,
    total: Precio total,
    numeroClientes: Numero de clientes
}
*/
import { addDoc, collection, getDocs, getDoc, query } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";

const reference = "Citas";

export const postCita = async ({
  Fecha,
  Servicio,
  
  Cliente,
  Contacto,
  Estado,
  Numero_cliente,
  Total,
}) => {
  try {
    const { id } = await addDoc(collection(db, reference), {
      Fecha,
      Servicio,
      
      Cliente,
      Contacto,
      Estado,
      Numero_cliente,
      Total,
    });
  } catch (error) {
    console.log(error);
  }
};
