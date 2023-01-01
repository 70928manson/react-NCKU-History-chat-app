import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-f49ed.firebaseapp.com",
  projectId: "chat-f49ed",
  storageBucket: "chat-f49ed.appspot.com",
  messagingSenderId: "570863858759",
  appId: "1:570863858759:web:7ed22491879a9baff82d62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()