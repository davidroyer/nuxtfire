var _ = require('lodash');
const axios = require('axios')
const { join } = require('path')

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
  css: [
    { src: '~assets/css/editor.css', lang: 'css'},
    { src: '~assets/css/app.styl', lang: 'styl' },
    { src: '~assets/css/main.scss', lang: 'scss'}
  ],
  plugins: [
    '~plugins/vuetify.js',
    { src: '~plugins/vue2-editor.js', ssr: false }
    // '~plugins/mavon-editor.js'
  ],
  generate: {
    routes: function() {
      return axios.get('https://nuxtfire.firebaseio.com/posts.json')
      .then((res) => {
        return res.data.map((post, key) => {
          return '/posts/' + post.slug
        })
      })
    },
    routeParams: {
      '/posts/:slug': function() {
        return axios.get('https://nuxtfire.firebaseio.com/posts.json')
        .then((res) => {
          return _.map(res.data, function(post, key) {
            return {slug: post.slug}
          })
        })
      }
    }
  },
  build: {
    loaders: [
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      }
      // {
      //   test: /\.(woff|ttf|eot|svg)/,
      //   loader: 'file-loader?name=font/[name].[ext]&publicPath=../'
      // },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'url'
      // }
    ],
    vendor: ['axios', 'vuetify', 'firebase']
    // postcss: [
    //   require('postcss-uncss')({
    //     html: ['https://nuxtfire.firebaseapp.com/'],
    //   })
    // ]
  }
}
