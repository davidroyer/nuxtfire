<template>
  <div class="">
    <h1 class="display-1">About</h1>
      <!-- <div class="content" v-html="content"></div> -->
    
  </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked'
const FM = require('front-matter')



// const test = require('~static/blog/posts.json').map(post.slug => `/blog/posts/${slug}`);
// console.log('HELLOOO');
// console.log(test)


export default {
  // components: {test},
  head () {
    return {
      title: this.title
    }
  },
  async asyncData({env}) {

    // const {data} = await axios.get('/blog/test2.md')
    // http://localhost:3000/blog/posts.json
    // var postData = FM(data)
    //
    // var attributes =  postData.attributes
    // var content =  postData.body
    // return {
    //   title: attributes.title,
    //   content: marked(content, { sanitize: true }),
    //   // markdownFile: marked(data, { sanitize: true })
    // }
  }
}
</script>

<style lang="css">
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}
</style>
