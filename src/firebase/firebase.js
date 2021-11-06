// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBcK2_TdSK_6ev872D4RWHsiKa0FmG5yDY",
  authDomain: "new-hacks-2021.firebaseapp.com",
  projectId: "new-hacks-2021",
  storageBucket: "new-hacks-2021.appspot.com",
  messagingSenderId: "543166133444",
  appId: "1:543166133444:web:091a2948cc57b8384e8591"
});

// Initialize Firebase
export default  firebaseConfig;
