// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARV32Y5NNGCwAQ-RyMMPqL4QSOeJpKBww",
  authDomain: "personal-website-d1a5b.firebaseapp.com",
  databaseURL: "https://personal-website-d1a5b-default-rtdb.firebaseio.com",
  projectId: "personal-website-d1a5b",
  storageBucket: "personal-website-d1a5b.appspot.com",
  messagingSenderId: "46734599432",
  appId: "1:46734599432:web:7dbbef5c680757811938bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
