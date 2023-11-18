import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbwmRAeplhlVnpdqLn2_yj0EG1QIRDkhQ",
  authDomain: "clinica-de-belleza-lily.firebaseapp.com",
  projectId: "clinica-de-belleza-lily",
  storageBucket: "clinica-de-belleza-lily.appspot.com",
  messagingSenderId: "990810701602",
  appId: "1:990810701602:web:0efcacddba7f44ca20ef7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const store = getFirestore(app)