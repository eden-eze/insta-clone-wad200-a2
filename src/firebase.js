// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDbtbdwrNgmd9Qoz5nDSuupKALHr-C2GLw",
  authDomain: "clone-instagram-react-wad200.firebaseapp.com",
  projectId: "clone-instagram-react-wad200",
  storageBucket: "clone-instagram-react-wad200.appspot.com",
  messagingSenderId: "311999549098",
  appId: "1:311999549098:web:d80013137cd2057b598ad3",
  measurementId: "G-0GWE3Y2NK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
