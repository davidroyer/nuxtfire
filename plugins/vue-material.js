import Vue from 'vue'
import VueMaterial from 'vue-material'
if (process.BROWSER_BUILD) {
  Vue.use(VueMaterial)
}
