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

import { addDoc, collection, getDocs, doc, updateDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

const reference = "Servicios"
const storageReference = "Servicios"

// POST SUBIR
// GET JALAR DATOS
// PUT ACTUALIZAR
// DELETE BORRAR

export const postServicio = async ({ descripcion, duracion, maximoClientes, tipo, precio, nombre, file }) => {
    try {
        const { id } = await addDoc(collection(db, reference), { descripcion, duracion, maximoClientes, tipo, precio, nombre })
        await postServicioImage(file, id)
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

const postServicioImage = async (file, id) => {
    await uploadBytes(ref(storage, storageReference + "/" + id), file)
        .then((snapshot) => console.log(snapshot.ref))
}

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
            return { ...doc.data(), url: await getServicioImage(doc.id) }
        })

        const allServicios = await Promise.all(serviciosFirst)
        return allServicios
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
  };

