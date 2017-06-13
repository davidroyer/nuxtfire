<template>
  <div class="container">
    <div class="header">
      <nuxt-link to="/">Home</nuxt-link>
    
      <h1 class="display-2">Admin Layout</h1>
      <nav>
        <p>Nav will go here</p>
      </nav>
    </div>
    <nuxt />
  </div>
</template>
<script>
// import axios from '~plugins/axios'
// var dataStore = require('../services/dataStore.js')
// var Store = dataStore.store

export default {
  data() {
    return {
      currentRouteKey: '',
      links: [{
        href: '/',
        title: 'Home'
      }, {
        href: '/about',
        title: 'About'
      }, {
        href: '/contact',
        title: 'Contact'
      }],
      posts: {}
    }
  },
  created() {
  },

  methods: {
    saveNewPos() {

    }
  }
}
</script>
<style>

body {
  /*padding-top: 1.5rem;*/
}

nav {
  padding: 1.5rem 0;
}

h1 {
  cursor: pointer;
  display: inline-block;
}

.blogLinks {
  list-style-type: none;
}

.blogLinks a {
  display: block;
  color: #0275d8 !important;
  cursor: pointer;
}

nav li {
  color: darkblue;
  cursor: pointer;
  list-style-type: none;
  transition: all .35s ease-in-out;
  padding: 0 1em;
  display: inline-block;
  border-bottom: 2px solid transparent;
  margin: .5em;
}

nav li:hover {
  border-bottom: 2px solid darkblue;
}

li.nuxt-link-active {
    font-weight: 800;
}
</style>
