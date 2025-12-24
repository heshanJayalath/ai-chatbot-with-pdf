import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDInmubjTdUGNKAX1CLDr3GZE2xQhkdEuc",
  authDomain: "chat-with-pdf-b9b17.firebaseapp.com",
  projectId: "chat-with-pdf-b9b17",
  storageBucket: "chat-with-pdf-b9b17.firebasestorage.app",
  messagingSenderId: "285997752230",
  appId: "1:285997752230:web:6bd7e407b7a66df5a3b967",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
