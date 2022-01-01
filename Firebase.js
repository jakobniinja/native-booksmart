import firebase from "firebase";
import "firebase/firestore";


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
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};