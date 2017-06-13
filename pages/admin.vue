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
    <v-text-field
      name="post-content"
      label="Post Content"
      id="content"
      v-model="newContent"
      multi-line
    ></v-text-field>
    <v-btn primary light @click.native="saveNewPost">Save Post</v-btn>
  </div>
</template>

<script>
import axios from '~plugins/axios'
var dataStore = require('../services/dataStore.js')
var Store = dataStore.store
var Auth = Store.state.auth
console.log(Auth);
const _ = require('lodash')
export default {
  // layout: 'admin',
  data() {
    return {
      newTitle: '',
      newContent: '',
      activeUser: false
    }
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
      axios.post('/testing.json', {
        title: this.newTitle,
        content: this.newContent
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
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
