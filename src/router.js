import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Promotion from './views/Promotion.vue'
import Transaction from './views/Transaction'
import Me from './views/Me'
import callback from '@/components/Authen/callback'
import Login from '@/components/Authen/login'
import ErrorPage from '@/pages/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'promotion',
      component: Promotion
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: Transaction
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/callback',
      name: 'callback',
      component: callback
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorPage
    }
  ]
})
