// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDzAluf_fH3zrFvtKYbYXdOWJSVD0rMLc",
  authDomain: "api-shopping-96511.firebaseapp.com",
  projectId: "api-shopping-96511",
  storageBucket: "api-shopping-96511.appspot.com",
  messagingSenderId: "1062277361019",
  appId: "1:1062277361019:web:3de00bf0abbf08c3f561de",
  measurementId: "G-M5WN0VQ7XJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
