import { collection, getDocs, query, where, updateDoc} from 'firebase/firestore'
import { db } from '../firebase'


const reference = "Citas"

export const getCitas = async () => {
    try {
      const { docs } = await getDocs(collection(db, reference));
      const allCitas = docs.map((doc) => doc.data());
      console.log(allCitas)
      return allCitas;
      
    } catch (error) {
      console.log(error);
    }
  };

  export const putCancelar = async ({ Correo, Servicio, Fecha, Estado }) => {
    try {
      console.log("Fecha antes de la consulta:", Estado);
      // Realizar una consulta para obtener el documento que cumple con las condiciones
      const querySnapshot = await getDocs(query(collection(db, "Citas"), 
        where("Correo", "==", Correo),
        where("Servicio", "==", Servicio),
        where("Fecha", "==", Fecha),
        
      ));
  
      // Verificar si se encontró algún documento que cumple con las condiciones
      if (!querySnapshot.empty) {
        // Obtener el primer documento encontrado (puedes ajustar esto según tus necesidades)
        const docRef = querySnapshot.docs[0].ref;
  
        // Actualizar el documento con el nuevo estado
        await updateDoc(docRef, { Estado });
      } else {
        // No se encontró ningún documento que cumple con las condiciones
        throw new Error("No se encontró ningún documento para actualizar");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Error al actualizar");
    }
  };
  