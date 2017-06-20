var _ = require('lodash');
const axios = require('axios')
const { join } = require('path')
function slugify(input) {
  let output = input.toLowerCase()
   .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
   .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
   .replace(/^-+|-+$/g, ''); // remove leading, trailing -
  return output
}

function getSlugs(post, index) {
  let slug = slugify(post.title)
  return `/post/${slug}`
}

const postsArray = require('./static/blog/posts.json')
// const Output = postsArray.map(getSlugs)

module.exports = {

  head: {
    title: 'David Royer - Web Designer & Developer',
    titleTemplate: '%s - David Royer - Web Designer & Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal site of David Royer. Front-End Web Designer and Developer' }
    ],
    link: [
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      // <link href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css" rel="stylesheet" data-n-head="true">
      // /css/mavonEditor.css
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }

    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  css: [
    { src: '~assets/css/mde.css', lang: 'css'},
    // { src: '~assets/scss/surface_styles.scss', lang: 'scss'},
    { src: '~assets/css/app.styl', lang: 'styl' },
    { src: '~assets/css/main.scss', lang: 'scss'}
  ],
  plugins: [
    '~plugins/vuetify.js',
    { src: '~plugins/vue2-editor.js', ssr: false }
    // '~plugins/mavon-editor.js'
  ],
  modules: [
    // {
    //   src: '@nuxtjs/markdownit',
    //   options: {
    //     linkify: true,
    //     use: [
    //       /* markdown-it plugin */
    //       // require('markdown-it-xxx'),
    //
    //       /* or */
    //       [require('markdown-it-task-lists'), {label: true}]
    //     ]
    //   }
    // }
  ],
  generate: {
    routes: function() {
      return axios.get('https://nuxtfire.firebaseio.com/posts.json')
      .then((res) => {
        return _.map(res.data, function(post, key) {
          return `/fire/${post.slug}`
        })

      })
    }
    // routes: function() {
    //   return postsArray.map(getSlugs)
    //   return axios.get('/static/blog.json')
    //   .then((res) => {
    //     return _.map(res.data, function(post, key) {
    //       return `/test/${post.slug}`
    //     })
    //
    //   })
    // }
  },
  build: {
    loaders: [
      {
         test: /\.md$/,
         use: [ 'json-loader', 'yaml-frontmatter-loader' ]
      }
      // {
      //   test: /\.md$/,
      //   loader: 'vue-markdown-loader'
      // }
      // {
      //   test: /\.md$/,
      //   use: [
      //     { loader: 'raw-loader' },
      //     { loader: 'markdownit-loader'}
      //     // {
      //     //   loader: 'markdownit-loader',
      //     //   options: {
      //     //     // markdown-it config
      //     //     preset: 'default',
      //     //     breaks: true,
      //     //     linkify: true,
      //     //     preprocess: function(markdownIt, source) {
      //     //       // do any thing
      //     //
      //     //       return source
      //     //     },
      //     //
      //     //     use: [
      //     //       /* markdown-it plugin */
      //     //       // require('markdown-it-xxx'),
      //     //
      //     //       /* or */
      //     //       [require('markdown-it-task-lists'), {enabled: true}]
      //     //     ]
      //     //   }
      //     // }
      //   ]
      //
      // }
    ],
    vendor: ['axios', 'vuetify', 'firebase', 'simplemde']
  }
}
