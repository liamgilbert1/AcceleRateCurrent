import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBTIYLIDwFL4qjCFtaqAp96vAA1eHCLJpI",
    authDomain: "accelerate-d1be5.firebaseapp.com",
    projectId: "accelerate-d1be5",
    storageBucket: "accelerate-d1be5.appspot.com",
    messagingSenderId: "889979093123",
    appId: "1:889979093123:web:d6aa326e76140a02449bb6",
    measurementId: "G-X4SD4LJW3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };