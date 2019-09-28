import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Router Modules */
import aboutRouter from './modules/about'
import homeRouter from './modules/home'
import listRouter from './modules/list'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/Home')
    },
    homeRouter,
    aboutRouter,
    listRouter
  ]
})
