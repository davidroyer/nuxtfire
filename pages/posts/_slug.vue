<template>
  <div class="post">
    <p><nuxt-link to="/">List of users</nuxt-link></p>
    <h3 v-html="post.title"></h3>
    <div v-html="post.content"></div>

  </div>
</template>

<script>
import axios from 'axios'
var dataStore = require('../../services/dataStore.js')
var Store = dataStore.store
export default {
  async data( route ) {
    const { key } = Store.state.currentKey
    const { data } = await axios.get(`https://nuxtfire.firebaseio.com/posts/${Store.state.currentKey}.json`)

    return {
      post: data
    }
  }
  // data() {
  //   return {
  //     testKey: Store.state.currentKey
  //   }
  // },
  // props: ['name']
  // props: {
  //   name: {
  //     type: String,
  //     default: 'Vue!'
  //   }
  // }
  // asyncData ({ params, error }) {
  //   return axios.get(`posts/${+params.key}`)
  //   .then((res) => {
  //     // res.data
  //     console.log(res.data)
  //   })
  //   .catch(() => {
  //     error({ message: 'User not found', statusCode: 404 })
  //   })
  // }
}
// asyncData ({ params, error }) {
//   return axios.get(`posts/${+params.slug}`)
//   .then((res) => res.data)
//   .catch(() => {
//     error({ message: 'User not found', statusCode: 404 })
//   })
// }
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
