import * as firebase from "firebase/app";
import "firebase/auth";

// console.log("Test -> SECRET_VAR: ", process.env.SECRET_VAR);

const config = {
  apiKey: process.env.API_KEY,
  authDomain: "nuxtfire.firebaseapp.com",
  databaseURL: "https://nuxtfire.firebaseio.com",
  projectId: "nuxtfire",
  storageBucket: "nuxtfire.appspot.com",
  messagingSenderId: "355187584526",
  appId: "1:355187584526:web:a7c76fda37782f8c"
};

if (!firebase.apps.length) firebase.initializeApp(config);

const fireApp = firebase;
const auth = fireApp.auth();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();

export { GoogleProvider, fireApp, auth };

export default (ctx, inject) => {
  ctx.auth = auth;
  inject("auth", auth);

  ctx.fireApp = fireApp;
  inject("fireApp", fireApp);
};
