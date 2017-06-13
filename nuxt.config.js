var _ = require('lodash');
const axios = require('axios')
const { join } = require('path')

module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Roboto' },
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
            // return res.data.map((post, key) => {
            //   return {key: key}
            // })
            return _.map(res.data, function(post, key) {
              return {slug: post.slug}
            })
            // return postArr
          })

      }
    }
    // routeParams: {
    //   '/posts/:key': [
    //     {key: '-Ka9cmcSvdhqLspWwCit'},
    //     {key: '-KaBE82Zbzx2pb73uKLF'},
    //     {key: '-KaBMaJ8Hoac8-jTyAdF'}
    //   ]
    // }
  },
  build: {
    vendor: ['axios', 'vuetify']
  },
  plugins: ['~plugins/vuetify.js']
    // ssr: false to only include it on client-side
    // { src: '~plugins/vue-material.js' }

  // routeParams: {
  //     '/users/:id': function () {
  //       return axios.get(YOUR_API_URL)
  //       .then((res) {
  //          // res.data should be like [{id: 1}, {id: 2}...]
  //          return res.data
  //       })
  //     }
  //  }
  // generate: {
  //   routes: function () {
  //     return axios.get('https://nuxtfire.firebaseio.com/posts')
  //     .then((res) => {
  //       return res.data.map((post, key) => {
  //         return '/posts/' + key
  //       })
  //     })
  //   },
  //   routeParams: {
  //     '/posts/:key': function() {
  //       return axios.get('https://nuxtfire.firebaseio.com/posts')
  //         .then((res) => {
  //           var postArr = _.map(res.data, function(post, key) {
  //             return {'key': key}
  //           })
  //           return postArr
  //         })
  //
  //     }
  //   }
  // },
  // generate: {
  //   routes: function () {
  //     return axios.get('https://nuxtfire.firebaseio.com/posts')
  //     .then((res) => {
  //       _.map(res.data, getKey)
  //     })
  //   }
  // },
  // filenames: {
  //   vendor: 'vendor.[hash].js',
  //   app: 'app.[chunkhash].js'
  // },

}
