import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/co-op_experience',
    name: 'Co-op Experience',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Co-op_Experience.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/co-op_experience/wt1',
    name: 'wt1',
    component: () => import('../views/wt1.vue')
  },
  {
    path: '/co-op_experience/wt2',
    name: 'wt2',
    component: () => import('../views/wt2.vue')
  },
  {
    path: '/co-op_experience/wt3',
    name: 'wt3',
    component: () => import('../views/wt3.vue')
  },
  {
    path: '/co-op_experience/wt4',
    name: 'wt4',
    component: () => import('../views/wt4.vue')
  },
  {
    path: '/co-op_experience/wt5',
    name: 'wt5',
    component: () => import('../views/wt5.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
