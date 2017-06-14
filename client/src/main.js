// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {store} from './store/store.js'
import router from './router'
import * as VueGoogleMap from 'vue2-google-maps';
Vue.use(VueGoogleMap, {
  load: {
    key: 'AIzaSyC209DfCPvaswfO7QmR7Mein0CqhgoV7ME',
    v: '3.26'               // Google Maps API version 
    // libraries: 'places',   // If you want to use places input 
  }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
