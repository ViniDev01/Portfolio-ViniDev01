
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported  } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDdChTg5vjIX8d8y5tIkHodaODAM40gAeI",
  authDomain: "portfolio-6acaa.firebaseapp.com",
  projectId: "portfolio-6acaa",
  storageBucket: "portfolio-6acaa.firebasestorage.app",
  messagingSenderId: "959291330642",
  appId: "1:959291330642:web:e75df866dc8f9c16aa8f8b",
  measurementId: "G-PBXTPDNPSZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // `app` é sua instância do Firebase
const storage = getStorage(app);
export const auth = getAuth(app);
export { db, storage };
isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  } else {
    console.log("Analytics não suportado no ambiente atual.");
  }
});