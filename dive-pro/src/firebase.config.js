// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbcv5L_QQ2Q99w0iSYj3faabGULOkl9S0",
    authDomain: "dive-pro-ef6fd.firebaseapp.com",
    projectId: "dive-pro-ef6fd",
    storageBucket: "dive-pro-ef6fd.appspot.com",
    messagingSenderId: "880020474780",
    appId: "1:880020474780:web:b7599c59e053bac9d59659",
    measurementId: "G-LNZ50S9107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()