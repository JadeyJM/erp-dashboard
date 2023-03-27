// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMaEiOTgrKItHDu966gB1nQRrsgHb_Qzo",
  authDomain: "intersnhip-la.firebaseapp.com",
  projectId: "intersnhip-la",
  storageBucket: "intersnhip-la.appspot.com",
  messagingSenderId: "335053249185",
  appId: "1:335053249185:web:a8902a76023b1896536ee0",
  measurementId: "G-1G4N8LYFW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
