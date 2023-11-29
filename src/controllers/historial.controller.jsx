import { collection, getDocs } from 'firebase/firestore'
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
  