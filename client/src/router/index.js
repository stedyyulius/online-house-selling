import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Jual from '@/components/Jual'
import Maps from '@/components/Maps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/jual',
      name: 'jual',
      component: Jual
    },
    {
      path:'/maps',
      name:'map',
      component: Maps
    }
  ]
})
