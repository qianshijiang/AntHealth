import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/features/login/login'
import Index from '@/features/index/index'
import Service from '@/features/index/service'
import Active from '@/features/index/active'
import My from '@/features/index/my'
import Product from '@/features/index/product'
import Headinfo from '@/features/index/headinfo'
import Mypolicy from '@/features/index/mypolicy'
import Activedetail from '@/features/index/activedetail'
import Servicedetail from '@/features/index/servicedetail'
import Aidcard from '@/features/index/aidcard'


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
    },
    {
      path: '/mypolicy',
      name: 'mypolicy',
      component: Mypolicy
    },
    {
      path: '/activedetail',
      name: 'activedetail',
      component: Activedetail
    },
    {
      path: '/servicedetail',
      name: 'servicedetail',
      component: Servicedetail
    },
    {
      path: '/aidcard',
      name: 'aidcard',
      component: Aidcard
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
