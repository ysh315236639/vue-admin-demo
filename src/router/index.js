import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: ()=> import('../views/404.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'statistics',
          component: () => import('../views/home/home.vue')
        }
      ]
    }
  ]
})
