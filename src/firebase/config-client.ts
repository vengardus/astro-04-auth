// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


export const firebaseClient = (apiKey: string, appId: string) => {
  const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "astro-authentication-ce6a4.firebaseapp.com",
    projectId: "astro-authentication-ce6a4",
    storageBucket: "astro-authentication-ce6a4.appspot.com",
    messagingSenderId: "257766469343",
    appId: appId
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth(app);
  auth.languageCode = "es";

  return {
    app,
    auth 
  }
};