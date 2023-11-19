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

import { addDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

const reference = "servicios"
export const postServicio = async (servicioData) => {
    try {
        await addDoc(doc(db, reference), servicioData)
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}
