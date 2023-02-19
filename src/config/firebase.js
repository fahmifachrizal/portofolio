// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8vi7o9JWtMrmoKfKx8WqFq5Ee05iGzA0",
  authDomain: "portofolio-19f5e.firebaseapp.com",
  projectId: "portofolio-19f5e",
  storageBucket: "portofolio-19f5e.appspot.com",
  messagingSenderId: "532348330862",
  appId: "1:532348330862:web:3685fa6b3b9936f93a177f",
  measurementId: "G-PYQ39YJSTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);