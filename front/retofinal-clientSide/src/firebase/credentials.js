// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq2pzopJKGnuLl8fBC8mKbbgkOMgf4Kkw",
  authDomain: "ferreteria-auth.firebaseapp.com",
  projectId: "ferreteria-auth",
  storageBucket: "ferreteria-auth.appspot.com",
  messagingSenderId: "983002682906",
  appId: "1:983002682906:web:18f8e73fd06cad039823a3"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)