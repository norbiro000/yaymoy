import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import Promotion from './views/Promotion.vue'
import Transaction from './views/Transaction'
import Me from './views/Me'
import callback from '@/components/Authen/callback'
import Login from '@/components/Authen/login'
import Logout from '@/components/Authen/logout'
import Privacy from '@/pages/privacy'
import ErrorPage from '@/pages/error'

Vue.use(Router)

function requiredAuth (to, from, next) {
  if (store.getters.isAuthenticated) {
    next()
  } else {
    next('/')
  }
}

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
      component: Promotion,
      beforeEnter: requiredAuth
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: Transaction,
      beforeEnter: requiredAuth
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
      beforeEnter: requiredAuth
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
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorPage
    },
    {
      path: '*',
      name: 'not found',
      component: Home
    }
  ]
})
