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
import Register from '@/features/register/register'
import Myinfo from '@/features/index/myinfo'
import Addressmanage from '@/features/index/addressmanage'
import Serviceorder from '@/features/index/serviceorder'
import ChangePwd from '@/features/index/changePwd'

Vue.use(Router);

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
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: Myinfo
    },
    {
      path: '/addressmanage',
      name: 'addressmanage',
      component: Addressmanage
    },
    {
      path: '/serviceorder',
      name: 'serviceorder',
      component: Serviceorder
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/changepwd',
      name:'changepwd',
      component:ChangePwd
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
