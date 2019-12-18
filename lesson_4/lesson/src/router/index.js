import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/Users.vue')
  },
  {
    path: '/users/edit/:id',
    name: 'users-edit',
    component: () => import('@/views/UsersEdit.vue')
  },
  {
    path: '/users/add',
    name: 'users-add',
    component: () => import('@/views/UsersAdd.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes
})

export default router
