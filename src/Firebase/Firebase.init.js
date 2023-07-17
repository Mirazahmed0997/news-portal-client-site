// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSAqtusy612qLna_kuC3JDTXhz72Kdwvs",
  authDomain: "news-portal-e5fe8.firebaseapp.com",
  projectId: "news-portal-e5fe8",
  storageBucket: "news-portal-e5fe8.appspot.com",
  messagingSenderId: "192939118767",
  appId: "1:192939118767:web:5db52c35274f1e58fd045a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;