import Vue from 'vue'
import App from './App.vue'
import router from './router'

window.$ = window.jQuery = require('jquery')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
//
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
