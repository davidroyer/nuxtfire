import Vue from 'vue'
// var Vue = require('vue')
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// var Vue = require('vue')

if (process.BROWSER_BUILD) {
  var mavonEditor = require('mavon-editor')
  Vue.use(mavonEditor)
  console.log(mavonEditor);
}
// use
// if (process.BROWSER_BUILD) {
//     var KeenUI = require('keen-ui').default;
//     Vue.use(KeenUI);
// }
// if (process.BROWSER_BUILD) {
//   require('external_library')
// }
