// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-JcNQJXHEdqcG7GEnDPycjWZd9VIQUjw",
  authDomain: "cpschools-2023.firebaseapp.com",
  projectId: "cpschools-2023",
  storageBucket: "cpschools-2023.appspot.com",
  messagingSenderId: "910106227097",
  appId: "1:910106227097:web:af3eba97182c36d6cda308",
  measurementId: "G-2ETKX7NBTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;