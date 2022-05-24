// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC94XahEV-_NOZ7LokRnjjbjpsKGrWi9L8",
    authDomain: "tools-23b08.firebaseapp.com",
    projectId: "tools-23b08",
    storageBucket: "tools-23b08.appspot.com",
    messagingSenderId: "298251922275",
    appId: "1:298251922275:web:cd99cc5bf1c5bb0eea8156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
