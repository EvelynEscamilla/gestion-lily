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

import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'



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
  max,
}) => {
  try {
    const { id } = await addDoc(collection(db, reference), {
      descripcion,
      duracion,
      maximoClientes,
      tipo,
      precio,
      nombre,
      max,
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

export const getServicioImage = async (id) => {
  try {
    const url = await getDownloadURL(ref(storage, `Servicios/${id}`))
    return url
  } catch (error) {
    console.log(error)
  }
}

export const getServicios = async () => {

  try {
    const { docs } = await getDocs(collection(db, reference))
    const serviciosFirst = docs.map(async (doc) => {
      return { ...doc.data(), id: doc.id, url: await getServicioImage(doc.id) }
    })
    const allServicios = await Promise.all(serviciosFirst)
    return allServicios
  } catch (error) {
    console.log(error)
  }
}

export const getServicio = async (id) => {
  try {

    return (await getDoc(doc(db, reference, id))).data()
  } catch (error) {
    console.log(error)
  }
}

export const updateServicio = async (id, newData) => {
  try {
    const servicioRef = doc(db, 'Servicios', "TQxrOJzcOWqAmdwIqXcv");
    await updateDoc(servicioRef, newData);
    console.log('Servicio actualizado exitosamente');
  } catch (error) {
    console.error('Error al actualizar el servicio: ', error);
    // Puedes manejar el error de la manera que prefieras (mostrar un mensaje, realizar un rollback, etc.)
  }


  try {
    const { docs } = await getDocs(collection(db, reference));
    const allServicios = docs.map((doc) => doc.data());
    return allServicios;
  } catch (error) {
    console.log(error);
  }
};

export const putServicio = async (id, { nombre, precio, tipo, descripcion, duracion, maximoClientes, file, max }) => {
  try {
    //Objeto json data, y el id es idServicio
    await updateDoc(doc(db, "Servicios", id), { nombre, precio, tipo, descripcion, duracion, maximoClientes, max })
    //Con el mismo id se sobrescribe la imagen
    if (file) {
      await postServicioImage(file, id)
    }
  } catch (error) {
    console.log(error)
    throw new Error("Error al actualizar")
  }
}

export const deleteServicio = async (uid) => {
  try {
    // Eliminar el documento de la colección
    const servicioRef = doc(db, reference, uid);
    await deleteDoc(servicioRef);

    // Eliminar la imagen del storage
    await deleteServicioImage(uid);

    return 'Servicio eliminado exitosamente';
  } catch (error) {
    console.error('Error al eliminar servicio:', error);
    throw new Error('Error al eliminar servicio');
  }
};

// Función para eliminar la imagen del servicio
const deleteServicioImage = async (uid) => {
  try {
    // Eliminar la imagen del storage
    const imageRef = ref(storage, `${storageReference}/${uid}`);
    await deleteObject(imageRef);

    console.log('Imagen del servicio eliminada');
  } catch (error) {
    console.error('Error al eliminar imagen del servicio:', error);
    throw new Error('Error al eliminar imagen del servicio');
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

