<template>
    <div id="editor">

          <vue-editor
            @saveContent="handleSaveContent"
            v-model="contentForEditor">
          </vue-editor>

    </div>
</template>
<script>
// Local Registration
var MavonEditor
var mavonEditor
import NoSSR from 'vue-no-ssr'

// import { VueEditor } from 'vue2-editor'

// if (process.BROWSER_BUILD) {
//   mavonEditor = require('mavon-editor')
//   console.log(mavonEditor);
//   MavonEditor = mavonEditor.mavonEditor
//   console.log(MavonEditor);
// }
// import 'mavon-editor/dist/css/index.css'
// import 'mavon-editor/dist/css/index.css'
export default {
  name: 'editor',
  components: {
      // VueEditor,
      // mavonEditor
      'no-ssr': NoSSR,
      MavonEditor
      // or 'mavon-editor': mavonEditor
  },
  data() {
    return {
      contentForEditor: 'Starting Content',
      d_language: 'en'
    }
  },
  methods: {
    handleSaveContent(content) {
      console.log(content);
    }
  }
}
</script>
<style lang="scss">
.ql-editor {
    font-size: 1.2em;
    font-family: 'Roboto';
    color: #424242;
    p, li {
      font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 500;
    }
}
.ql-toolbar.ql-snow {
    display: flex;
    justify-content: flex-start;
}
.ql-snow .ql-toolbar button,
.ql-snow.ql-toolbar button {
    margin-bottom: 0;
}
/*#editor {
    margin: auto;
    width: 80%;
    height: 580px;
}*/
</style>
