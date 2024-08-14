// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9p1ZqQrZViRkbO_buPpMxzbP4M5btdas",
    authDomain: "tripdb-1bf5c.firebaseapp.com",
    projectId: "tripdb-1bf5c",
    storageBucket: "tripdb-1bf5c.appspot.com",
    messagingSenderId: "768806147643",
    appId: "1:768806147643:web:e28c6f426151353fdc6e1e",
    measurementId: "G-B37M21XHGN"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// export const analytics = getAnalytics(app);