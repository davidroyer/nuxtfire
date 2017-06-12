<template>
  <div class="container">
    <div class="header">
      <nav>
        <template v-for="(link, key) in links">
          <nuxt-link tag="li" exact :to="link.href">{{link.title}}</nuxt-link>
        </template>
        <template v-for="(post, key) in posts">
          <li @click="handleRoute(key, post.slug)">{{post.title}}</li>
        </template>
      </nav>
    </div>
    <nuxt/>
  </div>
</template>
<script>
import axios from '~plugins/axios'
var dataStore = require('../services/dataStore.js')
var Store = dataStore.store

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
    this.getPosts()
  },
  beforeRouteLeave (to, from, next) {
    console.log('FIRED');
      console.log(this.currentRouteKey);
      // next()
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  },
  methods: {
    getPosts() {
      axios.get('posts.json')
      .then((res) => {
        this.posts = res.data
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    handleRoute(key, slug) {
      Store.setCurrentKey(key)
      this.$router.push({ path: `/posts/${slug}` })
    },
    handleNuxtLink(key) {
      this.currentRouteKey = key
      Store.setCurrentKey(key)
    }
  }
}
</script>
<style>

body {
  padding-top: 1.5rem;
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
