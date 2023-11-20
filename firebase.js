// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyAIIWPvRc-Xnty0oYilp6O4oiZ01KEvo44",
  authDomain: "insta-clone-bright.firebaseapp.com",
  projectId: "insta-clone-bright",
  storageBucket: "insta-clone-bright.appspot.com",
  messagingSenderId: "1028234003925",
  appId: "1:1028234003925:web:01e4e294e14c4098d9295c",
  measurementId: "G-Z9B09RY9QF",
};

const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);
const storage = getStorage(firebaseapp);

export { firebaseapp, auth, db, storage };
