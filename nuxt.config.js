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
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }

    ]
  },
  css: [
    { src: '~assets/css/app.styl', lang: 'styl' },
    { src: '~assets/css/main.scss', lang: 'scss'}
  ],
  modules: [
    {
      src: '@nuxtjs/firebase',
      options: {
        apiKey: "AIzaSyCz8gCkmdI8jV-jB9_2sgH2rP1s7CyuiAY",
        authDomain: "nuxtfire.firebaseapp.com",
        databaseURL: "https://nuxtfire.firebaseio.com",
        projectId: "nuxtfire",
        storageBucket: "nuxtfire.appspot.com",
        messagingSenderId: "355187584526"
      }
    }
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
    vendor: ['axios', 'vuetify']
    // postcss: [
    //   require('postcss-uncss')({
    //     html: ['https://nuxtfire.firebaseapp.com/'],
    //   })
    // ]
  },
  plugins: ['~plugins/vuetify.js']
}
