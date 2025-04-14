// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc,  } from "firebase/firestore"; // Import Firestore functions
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMFRxH4L7kp9ZkbPTaenp3x6o42CizvKs",
    authDomain: "courses-43a53.firebaseapp.com",
    projectId: "courses-43a53",
    storageBucket: "courses-43a53.firebasestorage.app",
    messagingSenderId: "592279092037",
    appId: "1:592279092037:web:9d4f559a631415a1e41c2c",
    measurementId: "G-9CZBV9B5N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app); // Firestore instance
export const auth = getAuth(app); // Authentication instance
export const storage = getStorage(app); // Storage instance

// Export Firestore methods that will be used in other components
export { collection, addDoc };
