<template>
  <div>
    <h1 class="display-1">Admin Page</h1>
    <v-text-field
      name="post-title"
      label="Post title"
      id="title"
      v-model="newTitle"
    ></v-text-field>
    <v-text-field
      name="post-content"
      label="Post Content"
      id="content"
      v-model="newContent"
      multi-line
    ></v-text-field>
<v-btn primary light @click.native="saveNewPost">Save Post</v-btn>
  </div>
</template>

<script>
import axios from '~plugins/axios'
var dataStore = require('../services/dataStore.js')
var Store = dataStore.store

const _ = require('lodash')
export default {
  layout: 'admin',
  data() {
    return {
      newTitle: '',
      newContent: ''
    }
  },

  mounted() {
  },

  methods: {
    saveNewPost() {
      axios.post('/testing.json', {
        title: this.newTitle,
        content: this.newContent
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>
