// Firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import only once
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNf8mn9F2a7Yp-ZL7z1KFLNxs5arVwnzM",
  authDomain: "linkedin-lite-yt.firebaseapp.com",
  projectId: "linkedin-lite-yt",
  storageBucket: "linkedin-lite-yt.appspot.com",
  messagingSenderId: "761692985156",
  appId: "1:761692985156:web:2eb59dbfb3ae740ea0a911"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
