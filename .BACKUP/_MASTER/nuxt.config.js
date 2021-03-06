import pkg from "./package";
require("dotenv").config();

export default {
  mode: "universal",
  // mode: "spa",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
      }
    ]
  },

  env: {
    API_KEY: process.env.API_KEY,
    SECRET_VAR: process.env.SECRET_VAR
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/firebase.js"],

  /**
   * Router settings
   */
  router: {
    middleware: ["admin-guard"]
  },

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
