import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC3SA6tAT2symikGnc6JwnMkwIj6Jdb1F4",
    authDomain: "accelerate-d74fd.firebaseapp.com",
    projectId: "accelerate-d74fd",
    storageBucket: "accelerate-d74fd.appspot.com",
    messagingSenderId: "112718686116",
    appId: "1:112718686116:web:f38317ed3b6b26057b0331",
    measurementId: "G-SCLXJNB0P0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };