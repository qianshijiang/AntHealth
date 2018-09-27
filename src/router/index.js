import Vue from 'vue'
import Router from 'vue-router'
import Logon from '@/features/logon/logon'
import Index from '@/features/index/index'
import Withdraw from '@/features/funds/withdraw'
import UserFundsList from '@/features/funds/userFundsList'
import IncomeExpend from '@/features/funds/incomeExpend'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Logon
    },
    {
      path: '/logon',
      name: 'logon',
      component: Logon
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (sessionStorage.getItem('token')) {
      if (to.meta.menuPath) {
        sessionStorage.setItem('currentPath', to.meta.menuPath)
      } else {
        sessionStorage.setItem('currentPath', to.path)
      }
      next()
    } else {
      next({
        path: '/index'
      })
    }
  } else {
    next()
  }
})

export default router
