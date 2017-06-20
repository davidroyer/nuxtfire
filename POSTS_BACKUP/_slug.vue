<template>
  <div class="post">
    <transition name="fade" mode="out-in">
      <div :key="$route.params.slug">
        <h3 v-html="post.title"></h3>
        <div v-html="post.content"></div>
        <vue-editor v-model="post.content"></vue-editor>
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
console.log(Store.state);
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
  fetch({params}) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        console.log(params);
        console.log(res.data.body);
        Store.setTestPost(res.data.body)
      })
      .catch(function (error) {
        console.log(error);
      });
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
        testPost: Store.state.testPost
        // currentKey: Store.state.currentKey
      }
  },
  data() {
    return {
      editorReady: false
    }
  },
  watch: {
    '$route': 'getPost'
  },
  beforeRouteEnter (to, from, next) {

    next(vm => {
      console.log('From Guard', vm.editorReady);
    });
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, for a route with dynamic params /foo/:id, when we
    // navigate between /foo/1 and /foo/2, the same Foo component instance
    // will be reused, and this hook will be called when that happens.
    // has access to `this` component instance.
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
        console.log(this.editorReady);
      }

    }
  },
  mounted() {
    this.editorReady = true
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

.ql-snow .ql-stroke {
  stroke: #444444 !important;
  stroke-width: 1.75 !important;
  stroke-linecap: square;
}


.ql-snow .ql-fill, .ql-snow .ql-stroke.ql-fill {
    fill: #444444;
}
.ql-indent polyline.ql-stroke {
    stroke-width: 1 !important;
    stroke-linejoin: miter;
    fill: #444 ;
}

.ql-toolbar.ql-snow {
    display: flex;
    flex-flow: row wrap;
}

.ql-snow .ql-toolbar button, .ql-snow.ql-toolbar button {
    margin-bottom: 0;
    /*height: 30px !important;*/
}


</style>
