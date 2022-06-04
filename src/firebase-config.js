// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWydlSGTLEPcuzzqct45KkiRaRrxDVN94",
  authDomain: "methodia-3c09d.firebaseapp.com",
  projectId: "methodia-3c09d",
  storageBucket: "methodia-3c09d.appspot.com",
  messagingSenderId: "972157585799",
  appId: "1:972157585799:web:c3e1d1d7b57eaa26c5eb22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authen = getAuth(app);