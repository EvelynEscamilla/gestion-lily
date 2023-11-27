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
import { addDoc, collection, getDocs, getDoc, query } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { ref, uploadBytes } from 'firebase/storage'

const reference = "Servicios"
const storageReference = "Servicios"

export const postCita = async (citaData) => { 
    
}