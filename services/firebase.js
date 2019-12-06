import firebase from "firebase/app";
import "firebase/auth";
let fireApp;

const config = {
  apiKey: process.env.API_KEY,
  authDomain: "nuxtfire.firebaseapp.com",
  databaseURL: "https://nuxtfire.firebaseio.com",
  projectId: "nuxtfire",
  storageBucket: "nuxtfire.appspot.com",
  messagingSenderId: "355187584526",
  appId: "1:355187584526:web:a7c76fda37782f8c"
};

if (!firebase.apps.length) fireApp = firebase.initializeApp(config);

export const auth = firebase.auth();
export const fbApp = firebase;
