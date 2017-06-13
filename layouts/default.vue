<template>
  <v-app>

     <v-navigation-drawer
       persistent
       :disable-route-watcher="false"
       enable-resize-watcher
       v-model="drawerOpen"
     >
       <v-list>
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
         <v-subheader light>Blog Posts</v-subheader>

         <v-list-item
           v-for="(post, key) in blogPosts"
           :key="key">
           <v-list-tile
             router
             :to="`/posts/${post.slug}`">
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
      }, {
        href: '/contact',
        title: 'Contact'
      }],
      blogPosts: {},
      currentPost: {}
    }
  },
  computed: {
    computedPosts() {
      return State.posts
    }
  },
  beforeCreate() {

  },
  created() {
    // this.getPostsFromStore()
    this.getPosts()
    // this.testFire()
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
        this.blogPosts = res.data
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
</style>
