// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRpUqUmlLN9WbrQ7euvGvKEvVRhSxEddM",
  authDomain: "database-practice-d5bb9.firebaseapp.com",
  projectId: "database-practice-d5bb9",
  storageBucket: "database-practice-d5bb9.appspot.com",
  messagingSenderId: "13623394380",
  appId: "1:13623394380:web:fe52bf184a7868971e74e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const serverTimestamp = () => {
  return new Date();
}

export { auth, provider, db, serverTimestamp};
