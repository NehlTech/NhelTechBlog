// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nheltech-blog.firebaseapp.com",
  projectId: "nheltech-blog",
  storageBucket: "nheltech-blog.appspot.com",
  messagingSenderId: "1089581390457",
  appId: "1:1089581390457:web:6e6735daa133804de892a8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
