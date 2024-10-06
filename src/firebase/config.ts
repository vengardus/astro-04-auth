// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUfHvuNKXbb0ptpRjziojMpAwrxLrQ7-8",
  authDomain: "astro-authentication-ce6a4.firebaseapp.com",
  projectId: "astro-authentication-ce6a4",
  storageBucket: "astro-authentication-ce6a4.appspot.com",
  messagingSenderId: "257766469343",
  appId: "1:257766469343:web:463e0bcd2c3b1d727bc36a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = "es";

export const firebase = { 
    app,
    auth 
};