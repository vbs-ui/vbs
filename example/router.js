import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseView from './views/BaseView'
import components from './components'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BaseView,
    children: [
      {
        path: '/',
        component: resolve => import('@/views/Introduction.vue').then(resolve),
        meta: { showNav: true, order: 1 }
      }
    ]
  },
  {
    path: '/auth',
    component: resolve => import('@/views/auth/Auth.vue').then(resolve),
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        component: resolve => import('@/views/auth/Login.vue').then(resolve),
        meta: { skipAuth: true, order: 1 }
      },
      {
        path: 'register',
        component: resolve => import('@/views/auth/Register.vue').then(resolve),
        meta: { skipAuth: true, order: 2 }
      }
    ]
  }
]

components.forEach(component => {
  routes[0].children.push({
    path: `/components/${component.link}`,
    component: resolve => import(`@/views/components/${component.name}.md`).then(resolve)
  })
})

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

router.beforeEach(function (to, from, next) {
  next()
})

export default router
