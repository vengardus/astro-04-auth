// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FIREBASE_API_KEY = import.meta.env.FIREBASE_API_KEY
const FIREBASE_API_ID = import.meta.env.FIREBASE_API_ID

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "astro-authentication-ce6a4.firebaseapp.com",
  projectId: "astro-authentication-ce6a4",
  storageBucket: "astro-authentication-ce6a4.appspot.com",
  messagingSenderId: "257766469343",
  appId: FIREBASE_API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = "es";

export const firebase = { 
    app,
    auth 
};