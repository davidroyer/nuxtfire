let api, auth
import Firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import axios from '~plugins/axios.js'
// export function createAPI ({ config, version }) {
//   Firebase.initializeApp(config)
//   return Firebase.database().ref(version)
// }
if (process.browser) {
  // firebase = require('firebase')

  var config = {
    apiKey: "AIzaSyCz8gCkmdI8jV-jB9_2sgH2rP1s7CyuiAY",
    authDomain: "nuxtfire.firebaseapp.com",
    databaseURL: "https://nuxtfire.firebaseio.com",
    projectId: "nuxtfire",
    storageBucket: "nuxtfire.appspot.com",
    messagingSenderId: "355187584526"
  };
  // var firebaseApp = firebase.initializeApp(config)
  Firebase.initializeApp(config)
  api = Firebase.database().ref()
  auth = Firebase.auth()
  console.log(auth);
}
export const store = {
  state: {
    currentKey: '',
    mainMenuIsOpen: false,
    api: api,
    auth: auth,
    posts: {}
  },

  setCurrentKey(key) {
    this.state.currentKey = key
  },
  GetPosts() {
    axios.get('posts.json')
      .then((res) => {
        console.log(res.data);
        this.state.posts = res.data
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
