// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBla2XmmNrZ4kTFAgi2ei3uDBz7DZ2Zjr4",
    authDomain: "email-password-auth-cc31b.firebaseapp.com",
    projectId: "email-password-auth-cc31b",
    storageBucket: "email-password-auth-cc31b.appspot.com",
    messagingSenderId: "59866010260",
    appId: "1:59866010260:web:f79f8dccd96e3247161a81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;