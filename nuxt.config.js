var _ = require('lodash');
const axios = require('axios')

function getKey(post, k) {
  return {key: k}
}

module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' }
    ]
  },
  plugins: [
    // ssr: false to only include it on client-side
    // { src: '~plugins/vuefire.js', ssr: false }
  ],
  generate: {
    // routes: [
    //   '/posts/-Ka9cmcSvdhqLspWwCit',
    //   '/posts/-KaBE82Zbzx2pb73uKLF',
    //   '/posts/-KaBMaJ8Hoac8-jTyAdF'
    // ],
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
  build: {
    vendor: ['axios']
  }
}
