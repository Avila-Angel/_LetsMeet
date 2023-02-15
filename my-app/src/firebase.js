// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU2dPYWcI8B7Mnc01gKJLu61SDmMk6o3I",
  authDomain: "letsmeet--auth.firebaseapp.com",
  projectId: "letsmeet--auth",
  storageBucket: "letsmeet--auth.appspot.com",
  messagingSenderId: "350934222196",
  appId: "1:350934222196:web:2592f123a45cd303fe5821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);