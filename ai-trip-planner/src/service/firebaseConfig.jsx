// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEoTualZbEs6fgOYFim4IDTEFuPXFsKMA",
  authDomain: "gen-lang-client-0408221915.firebaseapp.com",
  projectId: "gen-lang-client-0408221915",
  storageBucket: "gen-lang-client-0408221915.appspot.com",
  messagingSenderId: "109779412946",
  appId: "1:109779412946:web:55d3a9f9d6cb585921ca0b",
  measurementId: "G-75KETWZE78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// export const analytics = getAnalytics(app);