<template>
  <div>
    <h1 class="display-1">Admin Page</h1>
    <transition name="fade" mode="out-in">
      <v-btn v-if="activeUser == false" key="login" primary light @click.native="login">Login</v-btn>
      <v-btn v-else key="logout" primary light @click.native="logout">Logout</v-btn>
    </transition>

    <v-text-field
      name="post-title"
      label="Post title"
      id="title"
      v-model="newTitle"
    ></v-text-field>
    <!-- <v-text-field
      name="post-content"
      label="Post Content"
      id="content"
      v-model="newContent"
      multi-line
    ></v-text-field> -->
    <h6 class="title">Post Content</h6>
    <vue-editor
      v-model="newContent">
    </vue-editor>
    <v-btn primary light @click.native="saveNewPost">Save Post</v-btn>
  </div>
</template>

<script>
import axios from '~plugins/axios'

var dataStore = require('../services/dataStore.js')
var Store = dataStore.store
var Auth = Store.state.auth
console.log(Auth);

export default {
  components: {
    // Editor
  },
  // layout: 'admin',
  data () {
    return {
      newTitle: '',
      // newContent: 'something',
      activeUser: false
    }
  },
  asyncData (context) {
    return { newContent: '' }
  },

  mounted() {
    Auth.onAuthStateChanged((user) => {
      console.log('Auth Fired');
      if (user) {
        this.activeUser = true
      }
    })
  },

  methods: {
    saveNewPost() {
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

      axios.post('/testing.json', {
        title: titleCase(this.newTitle),
        content: this.newContent,
        slug: slugify(this.newTitle)
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    login() {
      let email = 'droyer01@gmail.com'
      let password = 'Dance4life'
      Auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    },
    logout() {
      Auth.signOut().then(() => {
        this.activeUser = false
        console.log('User signed out');
      }).catch(err => console.log(error))
    }
  }
}
</script>
<style lang="scss">
.ql-editor {
    font-size: 1.2em;
    font-family: 'Roboto';
    color: #424242;
    p, li {
      font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 500;
    }
}
.ql-toolbar.ql-snow {
    display: flex;
    justify-content: flex-start;
}
.ql-snow .ql-toolbar button,
.ql-snow.ql-toolbar button {
    margin-bottom: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
