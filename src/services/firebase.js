
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz5yP2V9HxKrwPZAPcfWLiFh33NezdbLI",
  authDomain: "nava-deep.firebaseapp.com",
  projectId: "nava-deep",
  storageBucket: "nava-deep.firebasestorage.app",
  messagingSenderId: "609397945454",
  appId: "1:609397945454:web:df8331ad85da31a9f8227f"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
