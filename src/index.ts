// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY02GDvAlzs_pGaZqgE-7HR3Z_YVAu78k",
  authDomain: "remotion-ef3b2.firebaseapp.com",
  projectId: "remotion-ef3b2",
  storageBucket: "remotion-ef3b2.appspot.com",
  messagingSenderId: "288933867015",
  appId: "1:288933867015:web:d48f563946e7f5a38b04a2",
  measurementId: "G-7175HKYPR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)