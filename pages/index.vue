<template>
  <div class="">
    <h1 class="display-1">Home Page</h1>
  <!-- <no-ssr> -->
      <!-- <mavon-editor :language="d_language" class="item-editor"></mavon-editor> -->
  <!-- </no-ssr> -->
     <!-- <mavon-editor :language="d_language" v-model="editorContent"></mavon-editor> -->
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'

export default {
  components: {
    'no-ssr': NoSSR
  },
  // asyncData (context) {
  //
  //   // called every time before loading the component
  //   return { editorContent: 'Content for editor', lang: 'en', }
  // },
  data() {
    return {
      d_language: 'en',
      help2: ''
    }
  },

  mounted() {
  },
  methods: {
  }
}
</script>
