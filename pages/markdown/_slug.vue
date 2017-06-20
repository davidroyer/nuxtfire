<template>
  <div class="">
    <h1 class="title" v-html="title"></h1>
    <article class="article" v-html="content"></article>
  </div>
</template>

<script>
import marked from 'marked'
const FM = require('front-matter')

export default {
  components: {

  },
  head () {
    return {
      title: this.title
    }
  },
  data() {
    return {
    }
  },
  async asyncData({route, params}) {
    let slug = route.params.slug
    const fileContent = await import(`~static/blog/${slug}.md`)
    console.log(fileContent);

    var attributes =  fileContent.attributes
    var content =  fileContent.body
    return {
      title: attributes.title,
      content: marked(content, { sanitize: true })
    }
  },

  mounted() {
  },
  methods: {
  }
}
</script>
