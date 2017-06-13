// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {store} from './store/store.js'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps,{
  load:{
    key: 'AIzaSyDVGySwQ_T_TfpFWU7-CfdVk7mcJiryqJU'
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
