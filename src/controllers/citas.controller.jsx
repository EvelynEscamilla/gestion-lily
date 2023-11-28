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
import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
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

export const getCitasFechaServicio = async ({ Fecha, Servicio=null }) => {
  try {
    console.log('Fecha: '+Fecha);
    console.log('Servicio'+Servicio);
    if (Fecha !== null && Servicio !== null) {
      const { docs } = await getDocs(
        query(
          collection(db, reference),
          where("Fecha", ">=", Fecha),
          where("Fecha", "<", new Date(Fecha.getTime() + 24 * 60 * 60 * 1000)),
          where("Servicio", "==", Servicio)
        )
      );

      const allCitasFiltered = docs.map((doc) => {
        const data = doc.data();
        return {
          Fecha: data.Fecha.toDate().getHours(),
          Servicio: data.Servicio,
        };
      });
      return allCitasFiltered;
    }
  } catch (error) {
    console.error(error);
  }
};

export const horariosDisponibles = async ({ date, idServicio }) => {
  //Consulta de la fecha (Sacar todas las citas del dia), tomar en cuenta lo que tarda el servicio, cuanto de disponibilidad
  //El maximo de clientes, el
  // {
  //   horario: 10: 30,
  //     disponibilidad: 0, 1, 2, 3
  // }
};
