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

import { doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore'

import { db } from '../firebase'
import { getAuth, deleteUser } from "firebase/auth";

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
            
            return docSnap.data()
        } else {
            throw new Error("No se encontro el documento")
        }
    } catch (error) {
        console.log(error)
    }
}

export const delUser = (user) => {
    console.log(user)
    deleteUser(user).then(async () => {
        console.log(user)
        const ClienteRef = doc(db, reference, user.uid);
        await deleteDoc(ClienteRef);
        console.log("usuario borrado exitosamente!")
    

    }).catch((error) => {
        console.log("error al eliminar usuario: " + error)
    });
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

export const putEmail = async (uid, { email }) => {
    try {
      //Objeto json data, y el id es idServicio
      await updateDoc(doc(db, "Clientes", uid), { email})
      //Con el mismo id se sobrescribe la imagen
      
    } catch (error) {
      console.log(error)
      throw new Error("Error al actualizar")
    }
  }

  export const putTelefono = async (uid, { telefono}) => {
    try {
      //Objeto json data, y el id es idServicio
      await updateDoc(doc(db, "Clientes", uid), { telefono })
      //Con el mismo id se sobrescribe la imagen
      
    } catch (error) {
      console.log(error)
      throw new Error("Error al actualizar")
    }
  }



export const getUsers = async () => {

}