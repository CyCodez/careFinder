import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSoLgBO9e_zMJ-A0uXASKkco8NHibA4PA",
  authDomain: "carefinder-project.firebaseapp.com",
  projectId: "carefinder-project",
  storageBucket: "carefinder-project.appspot.com",
  messagingSenderId: "716502400127",
  appId: "1:716502400127:web:77821fc0ebac8f9702d34a",
  measurementId: "G-MWMWZY3QJF",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
