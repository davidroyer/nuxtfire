import firebase from "firebase/app";
import "firebase/auth";

console.log("nowApiKey var", process.env.nowApiKey);
console.log("API_KEY var", process.env.API_KEY);

// const config = {
//   apiKey: process.env.fbApiKey,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGE_SENDER_ID,
//   appId: process.env.APP_ID
// };

const config = {
  apiKey: process.env.API_KEY,
  authDomain: "nuxtfire.firebaseapp.com",
  databaseURL: "https://nuxtfire.firebaseio.com",
  projectId: "nuxtfire",
  storageBucket: "nuxtfire.appspot.com",
  messagingSenderId: "355187584526",
  appId: "1:355187584526:web:a7c76fda37782f8c"
};

!firebase.apps.length ? firebase.initializeApp(config) : "";

export const auth = firebase.auth();
export const fbApp = firebase;
