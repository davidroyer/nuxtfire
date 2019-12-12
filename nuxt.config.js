require('dotenv').config()

export default {
  mode: 'universal',

  env: {
    API_KEY: process.env.API_KEY
  },

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + 'NuxtFire',
    title: 'NuxtFire' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/firebase.js'],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@/modules/nuxt-stack.js', 'cookie-universal-nuxt'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.config.js'
    // treeShake: true,
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {}
  },

  router: {
    middleware: ['admin-guard']
  }
}
