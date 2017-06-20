<template>
  <v-app>

     <v-navigation-drawer
       persistent
       :disable-route-watcher="false"
       enable-resize-watcher
       v-model="drawerOpen"
     >
       <v-list>
         <!-- <nuxt-link to="/post/test1">Post 1</nuxt-link>
         <nuxt-link to="/post/test2">Post 2</nuxt-link> -->
         <!-- <hr>
         <nuxt-link to="/test/test1">Post 1</nuxt-link>
         <nuxt-link to="/test/test2">Post 2</nuxt-link>
         <nuxt-link to="/test/test3">Post 3</nuxt-link> -->
         <v-list-item
           v-for="(link, i) in links"
           :key="link.href">
           <v-list-tile
             router
             :to="link.href">
             <v-list-tile-content>
               <v-list-tile-title v-text="link.title"></v-list-tile-title>
             </v-list-tile-content>
           </v-list-tile>
         </v-list-item>

         <v-divider></v-divider>
         <v-subheader light>Fire Posts</v-subheader>

         <v-list-item
           v-for="(post, key) in firePosts"
           :key="key">
           <v-list-tile
             router
             exact
             :to="`/fire/${post.slug}`">
             <v-list-tile-content>
               <v-list-tile-title v-text="post.title"></v-list-tile-title>
             </v-list-tile-content>
           </v-list-tile>
         </v-list-item>


         <v-divider></v-divider>
         <v-subheader light>Fire Store Posts</v-subheader>
         <v-list-item
           v-for="(post, key) in computedPosts"
           :key="key">
           <v-list-tile
             router
             exact
             :to="`/fire/${post.slug}`">
             <v-list-tile-content>
               <v-list-tile-title v-text="post.title"></v-list-tile-title>
             </v-list-tile-content>
           </v-list-tile>
         </v-list-item>
         <!-- <v-list-item
           key="admin">
           <v-list-tile
             router
             to="/admin">
             <v-list-tile-action>
               <v-icon light small right>account_box</v-icon>
             </v-list-tile-action>
             <v-list-tile-content>


               <v-list-tile-title>Admin</v-list-tile-title>
             </v-list-tile-content>
           </v-list-tile>
         </v-list-item> -->
       </v-list>
       <v-divider></v-divider>
       <v-btn
         light
         key="admin"
         router
         to="/admin"
         class="blue-grey">
         Admin
         <v-icon right light>account_circle</v-icon>
       </v-btn>
     </v-navigation-drawer>
    <v-toolbar class="secondary" light>
      <v-toolbar-side-icon @click.native.stop="drawerOpen = !drawerOpen" right light></v-toolbar-side-icon>
      <v-toolbar-title>David Royer</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <nuxt />

        <!-- <v-slide-y-transition mode="out-in">
          <nuxt />
        </v-slide-y-transition> -->
      </v-container>
    </main>
    <!-- <nuxt /> -->
  </v-app>
</template>

<script>
import axios from '~plugins/axios'
var dataStore = require('../services/dataStore.js')
var Store = dataStore.store
const State = Store.state
export default {
  data() {
    return {
      drawerOpen: false,
      currentRouteKey: '',
      links: [{
        href: '/',
        title: 'Home'
      }, {
        href: '/about',
        title: 'About'
      // }, {
      //   href: '/markdown',
      //   title: 'Markdown'
      }, {
        href: '/contact',
        title: 'Contact'
      }],
      firePosts: State.posts,
      currentPost: {}
      // postsFromStore: State
    }
  },
  computed: {
    computedPosts() {
      // return State.posts
    }
  },
  beforeCreate() {

  },
  created() {
    // this.getPostsFromStore()

    // this.testFire()
  },
  mounted() {
    this.getPosts()
    this.getPostsFromStore()
  },
  // beforeRouteLeave (to, from, next) {
  //   // console.log('FIRED');
  //   //   console.log(this.currentRouteKey);
  //     // next()
  //   // called when the route that renders this component is about to
  //   // be navigated away from.
  //   // has access to `this` component instance.
  // },
  methods: {
    getPostsFromStore() {
      Store.GetPosts()
      // console.log('');
    },
    getPosts() {
      axios.get('posts.json')
      .then((res) => {
        this.firePosts = res.data
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    handleRoute(key, slug) {
      Store.setCurrentKey(key)
      localStorage.setItem('currentKey', key);
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
padding-top: 0 !important;
}

nav {
  /*padding: 1.5rem 0;*/
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

.toolbar ul {
  margin-bottom: 0;
}
nav li {
  /*color: darkblue;*/
  cursor: pointer;
  color: darkpurple;
  list-style-type: none;
  transition: all .35s ease-in-out;
  padding: 0 1em;
  display: inline-block;
  border-bottom: 2px solid transparent;
  margin: .5em;
}

.toolbar li {
    color: white;
}

nav li:hover {
  border-bottom: 2px solid darkblue;
}

li.nuxt-link-active {
    font-weight: 800;
}
.nuxt-link-active.list__tile .list__tile__title {
    font-weight: 500;
    color: #94cdfa;
    text-decoration: none;
}
.nuxt-link-active.list__tile {
  text-decoration: none;
}
.navigation-drawer > .list .list__tile {
    /*transition: none;*/
    text-decoration: none;
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
    height: 28px !important;
    height: auto;
}

.ql-snow .ql-stroke.ql-thin, .ql-snow .ql-thin {
    stroke-width: 1 !important;
}

.ql-snow .ql-color-picker .ql-picker-label, .ql-snow .ql-icon-picker .ql-picker-label {
    padding: 0;
}

.ql-snow .ql-color-picker, .ql-snow .ql-icon-picker {
    width: 24px;
}
</style>
