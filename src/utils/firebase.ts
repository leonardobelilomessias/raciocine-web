// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQM9MdLxTAUB4hEl1vNIblZqRqjt4VdZk",
  authDomain: "raciocinesoftware-e4b4c.firebaseapp.com",
  projectId: "raciocinesoftware-e4b4c",
  storageBucket: "raciocinesoftware-e4b4c.appspot.com",
  messagingSenderId: "510112199553",
  appId: "1:510112199553:web:a927bd5c3d54214adeae80",
  measurementId: "G-ZE7JS9DNFB"
};

// Initialize Firebase
const AppFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(AppFirebase);

export {AppFirebase}