// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAziMZdT7q9A1fIcfY7Gn_KuULw_crS8kU",
  authDomain: "tallerfotografico-182f0.firebaseapp.com",
  projectId: "tallerfotografico-182f0",
  storageBucket: "tallerfotografico-182f0.firebasestorage.app",
  messagingSenderId: "604791303716",
  appId: "1:604791303716:web:1720cb0a5151aa64eff2b1",
  measurementId: "G-TQEVGKQGYX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
