import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/games/casual',
      component: DashboardLayout,
      children: [
        {
          path: '/games/:category',
          name: 'games',
          component: () => import(/* webpackChunkName: "demo" */ './views/Games.vue')
        },
        {
          path: '/game/:category/:id',
          name: 'game',
          component: () => import(/* webpackChunkName: "demo" */ './views/Game.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue'),
        }
        ,
        {
          path: '*',
          redirect: '/games/casual',
        }
      ]
    }
  ]
})
