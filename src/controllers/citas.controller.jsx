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
  fecha,
  grupoServicios,
  Cliente,
  Contacto,
  Correo,
  personas,
  precio,
}) => {
  try {
    const total = precio && personas ? precio * personas : null;
    const { id } = await addDoc(collection(db, reference), {
      Fecha: fecha,
      Servicio: grupoServicios,
      Correo,
      Cliente,
      Contacto,
      Estado: "en espera",
      Numero_cliente: personas,
      Total: total,
    });
    console.log("la cita a sido creada con exito");
  } catch (error) {
    console.log(error);
  }
};

export const getCitasFechaServicio = async ({ Fecha, Servicio = null }) => {
  try {
    if (Fecha !== null && Servicio !== null) {
      var FechaOr = new Date(Fecha);
      FechaOr.setHours(0, 0, 0, 0);
      const { docs } = await getDocs(
        query(
          collection(db, reference),
          where("Fecha", ">=", FechaOr),
          where(
            "Fecha",
            "<",
            new Date(FechaOr.getTime() + 24 * 60 * 60 * 1000)
          ),
          where("Servicio", "==", Servicio)
        )
      );

      const allCitasFiltered = docs.map((doc) => {
        const data = doc.data();
        return {
          Fecha: data.Fecha.toDate(),
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
