/*
ESQUEMA DEL USUARIO
ROLES DISPONIBLES: cliente / admin
ID DEL DOCUMENTO === UID DEL USUARIO
IMAGEN == UID
{
    nombreCompleto:{
        nombres:"Oscar David",
        apellidoPaterno: "Gonzalez",
        apellidoMaterno: "Avila"
    },
    telefono: "4433994806",
    rol: "cliente",
    email:"dgaduff@gmail.com"
}
*/

import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

const reference = "Clientes"

export const postUser = async (userData, uid) => {
    try {
        await setDoc(doc(db, reference, uid), userData)
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const getUser = async (uid) => {
    try {
        const docSnap = await getDoc(doc(db, `${reference}/${uid}`))
        if (docSnap.exists()) {
            console.log(docSnap.data())
            return docSnap.data()
        }else{
            throw new Error("No se encontro el documento")
        }
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async () => {

}


export const putNombre = async (uid, { nombreCompleto }) => {
  try {
    //Objeto json data, y el id es idServicio
    await updateDoc(doc(db, "Clientes", uid), { nombreCompleto })
    //Con el mismo id se sobrescribe la imagen
    
  } catch (error) {
    console.log(error)
    throw new Error("Error al actualizar")
  }
}



export const getUsers = async () => {

}