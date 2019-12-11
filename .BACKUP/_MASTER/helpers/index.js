export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function getCurrentUser(auth) {
    console.log('getCurrentUser running!');
    
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      console.log("TCL: getCurrentUser -> getCurrentUser", user);

      resolve(user);
    }, reject);
  });
}