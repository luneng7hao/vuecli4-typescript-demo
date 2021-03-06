import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    children: [
      {
        path: 'index',
        name: 'About',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  {
    path: '/dishonesty/detail',
    name: 'DishonestyDetail',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/DishonestyDetail.vue')
  },
  {
    path: '/dishonesty/userDetail',
    name: 'DishonestyUserDetail',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/DishonestyUserDetail.vue'
      )
  }
]

const router = new VueRouter({
  routes
})

export default router
