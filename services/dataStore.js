let api, auth, storage
import Firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
import axios from '~plugins/axios.js'

const BlogUrl = '/posts'

function slugify(input) {
  let output = input.toLowerCase()
   .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
   .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
   .replace(/^-+|-+$/g, ''); // remove leading, trailing -
  return output
}

function titleCase (input) {
  if ((input===null) || (input===''))
       return false;
  else
   input = input.toString();

  return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


if (process.browser) {
  var config = {
    apiKey: "AIzaSyCz8gCkmdI8jV-jB9_2sgH2rP1s7CyuiAY",
    authDomain: "nuxtfire.firebaseapp.com",
    databaseURL: "https://nuxtfire.firebaseio.com",
    projectId: "nuxtfire",
    storageBucket: "nuxtfire.appspot.com",
    messagingSenderId: "355187584526"
  };
  Firebase.initializeApp(config)
  storage = Firebase.storage()
  api = Firebase.database().ref()
  auth = Firebase.auth()

}
export const store = {
  state: {
    currentKey: '',
    mainMenuIsOpen: false,
    api: api,
    auth: auth,
    storage: storage,
    posts: {},
    testPosts: [],
    testPost: ''
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
  },

  SaveNewPost(post) {
    axios.post(`${BlogUrl}.json`, {
      title: titleCase(post.title),
      content: post.content,
      slug: slugify(post.title)
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  UpdatePost(post) {
    let key = post.key
    axios.put(`${BlogUrl}/${key}.json`, {
      title: titleCase(post.title),
      content: post.content,
      image: post.image,
      slug: slugify(post.title)
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  DeletePost(key) {
    axios.delete(`${BlogUrl}/${key}.json`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  GetTestPost() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
      console.log(res.body);
      return res.body
    })
    .catch(function (error) {
      console.log(error);
    });

  },

  UploadImage(postKey, event) {
    console.log(postKey);
    let file = event.target.files[0]
    let newFileRef = storage.ref(`${file.name}`)
    let uploadTask = newFileRef.put(file)

    uploadTask.on('state_changed', (snapshot) => {
      // vm.uploadProgress.percentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }, (error) => {
      console.log(error);
    }, () => {

      axios.patch(`${BlogUrl}/${postKey}.json`, {
        image: uploadTask.snapshot.downloadURL
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    })
  }
}
