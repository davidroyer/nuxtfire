<template>
  <div class="blogPost">
    <div v-html="content"></div>
    <!-- <test-comp></test-comp> -->
  </div>
</template>

<script>
// import hello from '~static/blog/test1.md'
import axios from 'axios'
var dataStore = require('../../services/dataStore.js')
var Store = dataStore.store
import marked from 'marked'
const FM = require('front-matter')
var posts
console.log(Store.state);
export default {
  head () {
    return {
      // title: this.title
    }
  },
  components: {

  },

  async asyncData({params}) {
    let slug = params.slug
    const fileContent = await import(`~static/blog/${slug}.md`)
    // const {data} = await axios.get(`/blog/${params.slug}.md`)
    // console.log(data);
    console.log(fileContent);
    var postData = FM(fileContent)
    //
    var attributes =  postData.attributes
    var content =  postData.body
    console.log(postData);
    console.log(content);
    return {
      content: content,
      title: attributes.title,
    }
  },
  computed: {
    updatedKey: function() {
      if (process.browser) {
        return localStorage.currentKey
      }
    },
    hello() {
      // return hello
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
