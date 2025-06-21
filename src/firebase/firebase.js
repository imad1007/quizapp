// Import Firebase libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7wTvci5v7uzCd0dVgpSxySjX7bWkMZVk",
  authDomain: "quizapp-ff1e1.firebaseapp.com",
  projectId: "quizapp-ff1e1",
  storageBucket: "quizapp-ff1e1.appspot.com",
  messagingSenderId: "991606812125",
  appId: "1:991606812125:web:09d9b3d785582607045a34",
  measurementId: "G-WSTRPZDVFJ",
};

// Initialize Firebase only if no app instance exists
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore instance
export { auth,db };



