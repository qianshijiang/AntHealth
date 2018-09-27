import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/features/login/login'
import Index from '@/features/index/index'
import Service from '@/features/index/service'
import Active from '@/features/index/active'
import My from '@/features/index/my'
import Product from '@/features/index/product'
import Headinfo from '@/features/index/headinfo'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/active',
      name: 'active',
      component: Active
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/headinfo',
      name: 'headinfo',
      component: Headinfo
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (sessionStorage.getItem('token')) {
//       if (to.meta.menuPath) {
//         sessionStorage.setItem('currentPath', to.meta.menuPath)
//       } else {
//         sessionStorage.setItem('currentPath', to.path)
//       }
//       next()
//     } else {
//       next({
//         path: '/index'
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
