import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8W8XzwSNwHay02qt7BltKgtCFkLDhyE4",
  authDomain: "fir-auth-58a00.firebaseapp.com",
  projectId: "fir-auth-58a00",
  storageBucket: "fir-auth-58a00.appspot.com",
  messagingSenderId: "526734022685",
  appId: "1:526734022685:web:a2bec12ae84cf29a7c8ef4",
  measurementId: "G-JXP7F3LM4D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};