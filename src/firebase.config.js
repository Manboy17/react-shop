import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKzqnzig1zJGXKOvp_8063_9tZkuRzYuE",
  authDomain: "fullstuck-shop.firebaseapp.com",
  projectId: "fullstuck-shop",
  storageBucket: "fullstuck-shop.appspot.com",
  messagingSenderId: "826838232470",
  appId: "1:826838232470:web:11fd44ffe8a721440f01b7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
