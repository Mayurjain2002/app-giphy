// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSoqkYzaVkbyYnoi1-smB_PmNltMK5mks",
  authDomain: "next-app-d8f48.firebaseapp.com",
  projectId: "next-app-d8f48",
  storageBucket: "next-app-d8f48.appspot.com",
  messagingSenderId: "1027296871274",
  appId: "1:1027296871274:web:b134f1756f11fc322a9b13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)

export {fireDB,auth}