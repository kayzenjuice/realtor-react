// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIML0WlWrT1VCYYktqzDv4zWzB4-e4CDA",
  authDomain: "realtor-clone-react-330e7.firebaseapp.com",
  projectId: "realtor-clone-react-330e7",
  storageBucket: "realtor-clone-react-330e7.appspot.com",
  messagingSenderId: "640239705327",
  appId: "1:640239705327:web:0d98307e1fba8573edcf1a",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
