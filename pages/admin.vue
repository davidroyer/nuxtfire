<template>
  <div>

    <div class="flexWrapper">

      <div class="posts">
        <template v-for="(post, key) in posts">
          <div class="post" :key="key">
            <h6 class="title">{{post.title}}</h6>
            <v-btn dark medium icon class="indigo--text" @click.native="editPost(key, post)">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn icon class="red--text text--lighten-2" @click.native="deletePost(key)">
              <v-icon light>delete</v-icon>
            </v-btn>
            <!-- <v-btn dark medium icon class="danger" @click.native="deletePost(key)">
              <v-icon danger>delete</v-icon>
            </v-btn> -->
          </div>
        </template>
      </div>

      <div class="editor editorWrapper">
        <v-text-field
           name="post_title"
           label="Post Title"
           v-model="postTitle">
         </v-text-field>
        <mde v-model="content"></mde>
        <div class="postImage">
          <div class="" v-if="postImage">
            <img :src="postImage" alt="">
          </div>
          <div class="uploadWrapper" v-else>
            <input class="inputfile" type="file" name="photoUpload" id="photoUpload" @change="handleUpload(activePost.key, $event)">

            <v-btn warning class="">
              <label for="photoUpload" class="">Upload Post Image</label>
            </v-btn>
          </div>
        </div>
        <div class="saveButton">
          <v-btn info right light @click.native="saveEdit">Save Edits</v-btn>
          <v-btn info right light @click.native="saveNewPost">Save Post</v-btn>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from '~plugins/axios'
import marked from 'marked'
import mde from '~components/mde'
var _ = require('lodash')
var dataStore = require('../services/dataStore.js')
var Store = dataStore.store
var Auth = Store.state.auth


export default {
  components: {
    mde
  },
  layout: 'admin',
  data () {
    return {
      postTitle: '',
      content: '',
      postImage: '',
      input: 'Starting content',
      activeUser: false,
      activePost: {},
      store: Store.state
    }
  },
  async asyncData ({isClient, isServer, route}) {
    const {data} = await axios.get('/posts.json')

    return { posts: data }
  },

  mounted() {
    Auth.onAuthStateChanged((user) => {
      console.log('Auth Fired');
      if (user) {
        this.activeUser = true
      }
    })
    this.editorReady = true
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update(value) {
      this.input = value
    },

    handleUpload(postKey, event) {
      Store.UploadImage(postKey, event)
    },
    saveNewPost() {
      let post = {
        title: this.postTitle,
        content: this.content,
      }
      Store.SaveNewPost(post)
    },
    deletePost(key) {
      console.log(key);
      Store.DeletePost(key)
    },
    login() {
      let password = 'Dance4life'
      Auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    },
    editPost(key, post) {
      post['key'] = key
      this.postTitle = post.title
      this.content = post.content
      this.postImage = post.image ? post.image : ''
      this.activePost = post
    },
    saveEdit() {
      let post = {
        title: this.postTitle,
        content: this.content,
        image: this.postImage,
        key: this.activePost.key
      }
      Store.UpdatePost(post)
    },

    logout() {
      Auth.signOut().then(() => {
        this.activeUser = false
        console.log('User signed out');
      }).catch(err => console.log(error))
    }
  }
}
</script>
<style lang="scss">
.markdown-editor .CodeMirror {
  height: 300px;
}

.container container--fluid {
  position: relative;
}

.flexWrapper {
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  flex-flow: row wrap;
}
.editor.editorWrapper {
  display: flex;
  flex-flow: row wrap;
  padding-left: 1em;
  padding-right: 3em;
}
.editor {
    flex: 60%;
    padding: 0 2em;
}
.posts {
  flex: 1 1 30%;
  max-width: 400px;
  padding: 1em;
  border-right: 2px solid rgba(66, 66, 66, .5);

  .post {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 350px;
    align-items: baseline;

    .title {
      margin-right: auto;
    }

    button {
      margin-left: 0;
    }
  }
}

// .inputfile {
//     width: 0.1px;
//     height: 0.1px;
//     opacity: 0;
//     overflow: hidden;
//     position: absolute;
//     z-index: -1;
// }

.saveButton {
  margin-left: auto;
  margin-right: 0;
  align-self: flex-end;
  margin-top: 3em;
  padding-bottom: 1.5em;
}
</style>
