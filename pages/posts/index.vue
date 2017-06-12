<template>
  <div class="post" >
      <h1 class="title">INDEX.VUE</h1>
  </div>
</template>

<script>
import axios from 'axios'
var dataStore = require('../../services/dataStore.js')
var Store = dataStore.store
if (process.browser) {
  var storageKey = localStorage.currentKey
  console.log(storageKey);
  console.log('Current Key:  ', Store.state.currentKey);
}

export default {
  // async data( route ) {
  //   // const { key } = Store.state.currentKey
  //   const { data } = await axios.get(`https://nuxtfire.firebaseio.com/posts/${Store.state.currentKey}.json`)
  //
  //   return {
  //     post: data,
  //     currentKey: Store.state.currentKey
  //   }
  // },
  data() {
    return {
      currentKey: Store.state.currentKey,
      // testStorageKey: localStorage.currentKey,
      post: {}
    }
  },
  watch: {
    '$route': 'getPost'
  },
  computed: {
    updatedKey: function() {
      if (process.browser) {
        return localStorage.currentKey
      }
    }
  },
  methods: {
    getPost() {

      if (process.browser) {
        var key = localStorage.currentKey
        axios.get(`https://nuxtfire.firebaseio.com/posts/${key}.json`)
          .then((res) => {
            this.post = res.data
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    }
  },
  created() {
    this.getPost()
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
