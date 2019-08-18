/* eslint-disable no-console */
import { auth } from "@/services/firebase";

// const user = auth.currentUser()
function getCurrentUser(auth) {
    console.log('getCurrentUser running!');
    
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      console.log("TCL: getCurrentUser -> getCurrentUser", user);

      resolve(user);
    }, reject);
  });
}

export default async context => {
  if (process.client) {
    // window.fbAuth = auth
    //   const user = await auth.currentUser()
    const user = await getCurrentUser(auth);
    console.log("from init.client plugin -> user", user);
    context.store.dispatch("nuxtClientInit", user);
  }
};
