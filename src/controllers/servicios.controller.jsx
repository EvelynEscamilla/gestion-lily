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

import { addDoc, collection, getDocs, getDoc, query } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { listAll } from 'firebase/storage'

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

export const getServicioImages = async (id) => {
    try {
        const storageRef = ref(storage, storageReference + "/Servicios");
        const listResult = await listAll(storageRef);
        const images = {};
        for (const item of listResult.items) {
            const url = await getDownloadURL(item);
            images[item.name] = url;
        }
        return images;
    } catch (error) {
        console.log(error)
    }
}

export const getServicios = async () => {
    try {
        const { docs } = await getDocs(collection(db, reference))
        const allServicios = docs.map((doc) => doc.data())
        return allServicios
    } catch (error) {
        console.log(error)
    }
}