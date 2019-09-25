import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Router Modules */
import aboutRouter from './modules/about'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home')
    },
    aboutRouter
  ]
})
