// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9hmgpTjK7dNfC28WD_maS0s9xtdR4WZk",
  authDomain: "react-js-18cc6.firebaseapp.com",
  projectId: "react-js-18cc6",
  storageBucket: "react-js-18cc6.appspot.com",
  messagingSenderId: "846485487423",
  appId: "1:846485487423:web:5ca9ed009769cf2ee3dd8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore (app)