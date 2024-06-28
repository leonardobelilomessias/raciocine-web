// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUbsd6xnvyFX6cWJkk0nGZJj3Jx4WS_GY",
  authDomain: "raciociocine-web.firebaseapp.com",
  projectId: "raciociocine-web",
  storageBucket: "raciociocine-web.appspot.com",
  messagingSenderId: "3031715037",
  appId: "1:3031715037:web:337ba0a738359892b79f34",
  measurementId: "G-BNXRVQ1KD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);


export  {db,auth}