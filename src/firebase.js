import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-bf35d.firebaseapp.com",
  projectId: "admin-bf35d",
  storageBucket: "admin-bf35d.appspot.com",
  messagingSenderId: "519731072863",
  appId: "1:519731072863:web:efe0578a1962e8c17a30ea"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app);