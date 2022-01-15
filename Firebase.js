// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN3zw7LjK4RNlxub3oAOgoNCO4r_cLi2U",
  authDomain: "booksmart-examens.firebaseapp.com",
  projectId: "booksmart-examens",
  storageBucket: "booksmart-examens.appspot.com",
  messagingSenderId: "475685393392",
  appId: "1:475685393392:web:0396b27b1b68c1787c0335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);
