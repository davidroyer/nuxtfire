<template>
    <div id="editor" class="mdeEditor">
      <textarea ref="area"></textarea>
    </div>
</template>
<script>
// import simplemde from 'simplemde'
// // Local Registration

import NoSSR from 'vue-no-ssr'

if (process.BROWSER_BUILD) {
var simplemde = require('simplemde')
// require('./../assets/css/mde.css');
console.log(simplemde);
}

export default {
  name: 'mde',
  components: {

  },
  data() {
    return {
      contentForEditor: 'Starting Content',
      d_language: 'en',
      editor: null
    }
  },
  methods: {
    handleSaveContent(content) {
      console.log(content);
    },
    getContents() {
      console.log(this.editor.value());
    }
  },
  props: ['value'],
  mounted() {
    this.editor = new simplemde({
      element: this.$refs.area
    })
    this.editor.value(this.value)
    var self = this
    this.editor.codemirror.on('change', function() {
      self.$emit('input', self.editor.value())
    })
  },
  watch: {
    // this would update on every keystroke, so maybe you have to remove it.
    // component should work nonetheless, but if an external source changed the value, it would not reflect in this component.
    value (val) {
      if (val !=  this.editor.value() ) {
        this.editor.value(val)
      }
    }
    // value(newVal) { this.editor.value(newVal) }
  },
  beforeDestroy() {
    this.editor.toTextArea() // clean up when component gets destroyed.
  }
}
</script>
<style lang="scss">
.mdeEditor {
  width: 100%;
}
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
