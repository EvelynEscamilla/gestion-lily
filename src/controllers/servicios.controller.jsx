/*
ESQUEMA DEL SERVICIO
ID DEL DOCUMENTO === GENERADO ALEATORIAMENTE
IMAGEN == ID
{
    nombre:"nombre del servicio",
    descripcion:"descripcion del servicio",
    duracion: 60, (numero de minutos)
    precio: 133,
    tipo: "tipo de servicio",
    maximoClientes: 3
}
*/

import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";

const reference = "Servicios";
const storageReference = "Servicios";

// POST SUBIR
// GET JALAR DATOS
// PUT ACTUALIZAR
// DELETE BORRAR

export const postServicio = async ({
  descripcion,
  duracion,
  maximoClientes,
  tipo,
  precio,
  nombre,
  file,
}) => {
  try {
    const { id } = await addDoc(collection(db, reference), {
      descripcion,
      duracion,
      maximoClientes,
      tipo,
      precio,
      nombre,
    });
    await postServicioImage(file, id);
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const postServicioImage = async (file, id) => {
  await uploadBytes(ref(storage, storageReference + "/" + id), file).then(
    (snapshot) => console.log(snapshot.ref)
  );
};

export const getServicios = async () => {
  try {
    const { docs } = await getDocs(collection(db, reference));
    const allServicios = docs.map((doc) => doc.data());
    return allServicios;
  } catch (error) {
    console.log(error);
  }
};

export const getServiciosPrecioCorporal = async () => {
  try {
    const { docs } = await getDocs(
      query(collection(db, reference), where("tipo", "==", "Corporal"))
    );

    const allServiciosFiltered = docs.map((doc) => {
      const data = doc.data();
      return {
        nombre: data.nombre,
        precio: data.precio,
        tipo: data.tipo,
      };
    });

    return allServiciosFiltered;
  } catch (error) {
    console.error(error);
  }
};
export const getServiciosPrecioFacial = async () => {
  try {
    const { docs } = await getDocs(
      query(collection(db, reference), where("tipo", "==", "Facial"))
    );

    const allServiciosFiltered = docs.map((doc) => {
      const data = doc.data();
      return {
        nombre: data.nombre,
        precio: data.precio,
        tipo: data.tipo,
      };
    });

    return allServiciosFiltered;
  } catch (error) {
    console.error(error);
  }
};

export const getServiciosBy = async ({ nombre }) => {
  try {
    if (nombre !== undefined) {
      const { docs } = await getDocs(
        query(collection(db, reference), where("nombre", "==", nombre))
      );

      const allServiciosFiltered = docs.map((doc) => {
        const data = doc.data();
        return {
          nombre: data.nombre,
          precio: data.precio,
          max: data.maximoClientes,
          duracion: data.duracion,
        };
      });
      return allServiciosFiltered;
    }
  } catch (error) {
    console.error(error);
  }
};
