// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc8yXAUXBTRXfFovXgPBk5ACEh2KQvlS4",
  authDomain: "firebassereact.firebaseapp.com",
  projectId: "firebassereact",
  storageBucket: "firebassereact.appspot.com",
  messagingSenderId: "1045940059107",
  appId: "1:1045940059107:web:899b04e165e197a2323ed6",
  measurementId: "G-S6B93VFHHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

async function handleLogout() {}

export default app;
