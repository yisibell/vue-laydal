import Vue from 'vue'
import App from './App.vue'

import laydal from './laydal'

Vue.use(laydal)

new Vue({
  el: "#app",
  render: h => h(App)
})