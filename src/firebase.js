
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyChCFUgXdhGmmO9JkiGKQYcuGbChpAQ72w",
  authDomain: "chat-afb91.firebaseapp.com",
  projectId: "chat-afb91",
  storageBucket: "chat-afb91.appspot.com",
  messagingSenderId: "392614806804",
  appId: "1:392614806804:web:040a5153a6d85ee51f6e01"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
