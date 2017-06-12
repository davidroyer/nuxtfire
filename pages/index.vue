<template>
  <div>
    <h1>Home Page</h1>
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
    },
    handleNuxtLink(key) {
      Store.setCurrentKey(key)
    }
  }
}
</script>
