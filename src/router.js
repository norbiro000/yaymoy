import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Promotion from './views/Promotion.vue'
import Transaction from './views/Transaction'
import Me from './views/Me'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
