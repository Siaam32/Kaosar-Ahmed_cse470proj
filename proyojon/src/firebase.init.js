// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtIfNUXWOci54p5xhymtEiXSTDosibYtI",
  authDomain: "ecommerse-18d81.firebaseapp.com",
  projectId: "ecommerse-18d81",
  storageBucket: "ecommerse-18d81.appspot.com",
  messagingSenderId: "30851580907",
  appId: "1:30851580907:web:10d9e441adaeb31da14fae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;