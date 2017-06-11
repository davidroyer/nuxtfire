<template>
  <div>
    <div>
      <ul class="blogLinks">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <template v-for="(post, key) in posts">
          <!-- <li class="blogLinks__item"> -->
            <a @click="handleRoute(key, post.slug)">{{post.title}}</a>
          <!-- </li> -->
          <!-- <nuxt-link @click.native="handleNuxtLink(key)" :to="{ path: `/posts/${post.slug}`}">View Post &rarr;</nuxt-link> -->
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from '~plugins/axios'
var dataStore = require('../services/dataStore.js')
var Store = dataStore.store

function getKey(post, key) {
  console.log(post);
  return {key: key}
}
const _ = require('lodash')
export default {
  async data() {
    const { data } = await axios.get('posts.json')
    return {
      posts: data
    }
  },
  // data() {
  //   return {
  //     testKey: Store.state.currentKey
  //   }
  // },
  // beforeRouteLeave (to, from, next) {
  //
  //   // called when the route that renders this component is about to
  //   // be navigated away from.
  //   // has access to `this` component instance.
  // },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      axios.get('posts.json')
        .then((res) => {
          var test = _.map(res.data, getKey)
          console.log('TEST', test);
          console.log(_.map(res.data, getKey));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleRoute(key, slug) {
      Store.setCurrentKey(key)
      this.$router.push({ path: `/posts/${slug}` })
      // router.push(...)
    },
    handleNuxtLink(key) {
      Store.setCurrentKey(key)
    }
  }
}
</script>
