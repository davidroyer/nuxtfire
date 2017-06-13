<template>
  <div class="post">
<transition name="fade" mode="out-in">
  <div :key="$route.params.slug">
    <h3 v-html="post.title"></h3>
    <div v-html="post.content"></div>
  </div>
</transition>
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
  // async asyncData ({ params }) {
  //   // We can use async/await ES6 feature
  //   console.log('fired');
  //   let { data } = await axios.get(`https://nuxtfire.firebaseio.com/posts.json?orderBy="slug"&equalTo="${params.slug}"&print=pretty`)
  //   // var postData = post.data
  //   var keys = Object.keys(data)
  //   var key = keys[0]
  //   // this.currentPost = data[key]
  //
  //   return { post: data[key] }
  // },
  head () {
    return {
      // title: this.post.title
    }
  },
  async asyncData( route ) {
    const slug = route.params.slug

    const { data } = await
    //  axios.get(`https://nuxtfire.firebaseio.com/posts/${Store.state.currentKey}.json`)
     axios.get(`https://nuxtfire.firebaseio.com/posts.json?orderBy="slug"&equalTo="${slug}"&print=pretty`)
     var keys = Object.keys(data)
     var key = keys[0]
     var postData = data[key]

      return {
        post: postData,

        // currentKey: Store.state.currentKey
      }
  },
  // data() {
  //   return {
  //     currentKey: Store.state.currentKey
  //     // testStorageKey: localStorage.currentKey,
  //     // post: {}
  //   }
  // },
  watch: {
    // '$route': 'getPost'
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
      // if (process.browser) {
      //   var slug = 'title-one'
      //   axios.get(`posts.json?orderBy="slug"&equalTo="${slug}"&print=pretty`)
      //   .then((post) => {
      //     console.log('TEST FIRE HERE');
      //     console.log(post);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      //
      //   var key = localStorage.currentKey
      //   axios.get(`https://nuxtfire.firebaseio.com/posts/${key}.json`)
      //     .then((res) => {
      //       this.post = res.data
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      // }

    }
  },
  created() {
    // this.getPost()
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
