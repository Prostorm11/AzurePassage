// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqO_c9BL9MGbb5onzTIsfH2W3b3OXnkNY",
  authDomain: "glamcart-cs2.firebaseapp.com",
  projectId: "glamcart-cs2",
  storageBucket: "glamcart-cs2.appspot.com",
  messagingSenderId: "902058342117",
  appId: "1:902058342117:web:66e35bcc5f45ad98e7c60c",
  measurementId: "G-97GQZMF4C9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
