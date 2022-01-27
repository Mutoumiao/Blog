import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/pages/home.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/about.vue')
      },
      {
        path: 'post/:id',
        name: 'postItem',
        component: () => import('@/pages/item.vue')
      },
      {
        path: '*',
        name: 'error404',
        component: () => import('@/pages/404.vue')
      }
    ]
  })
}