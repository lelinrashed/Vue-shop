import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFirestore from 'vue-firestore'
Vue.use(VueFirestore)
import {fb} from './firebase'
import jquery from 'jquery'
window.$ = window.jquery = jquery
import 'popper.js'
import 'bootstrap'
import './assets/scss/app.scss'

Vue.component('Navbar', require('./components/Navbar.vue').default)

Vue.config.productionTip = false

let app = ''

fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});
