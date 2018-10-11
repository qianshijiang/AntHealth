import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import VueResource from 'vue-resource'

Vue.use(VueResource)
import http from 'axios'
import qs from 'qs'
import Mock from './mock/mock'
import store from './vuex/store'
import vuescroll from 'vuescroll'
import errorMapping from './common/errorMapping'
import * as customFilters from './common/customFilters'
/* import common style files */
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/normalize.css'
import '@/assets/style/layout.css'
import '@/assets/style/swiper.min.css'
import '@/assets/style/qietu.css'
// import '@/assets/style/bc.css'
import '@/assets/js/flexible.min.js'

import YDUI from 'vue-ydui' /* �൱��import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.px.css'
import 'vue-ydui/dist/ydui.base.css'

const env = process.env
if (env.DUMMY) {
  Mock.mockData()
}

Vue.use(YDUI)
Vue.use(Element)
Vue.use(vuescroll)
Vue.config.productionTip = false
// http.defaults.baseURL = env.HOST
// http.defaults.timeout = 5000
// http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// let loadinginstace
// http请求拦截器
// http.interceptors.request.use(request => {
//   console.log('######### Send request url: ' + request.url)
//   console.log('######### Send request data: ' + JSON.stringify(request.data))
  // if (sessionStorage.getItem('token')) {
  //   request.headers.adminToken = sessionStorage.getItem('token')
  // } else {
  //   sessionStorage.clear()
  //   router.replace({path: '/logon'})
  // }
  // loadinginstace = Vue.prototype.$loading({lock: true, text: '加载中...', spinner: 'el-icon-loading'})
  // return request
// }, error => {
//   loadinginstace.close()
//   Vue.prototype.$message.error({
//     message: '加载超时'
//   })
//   return Promise.reject(error)
// })
// router.replace({path: '/index'})
// http响应拦截器
// http.interceptors.response.use(response => {
//   loadinginstace.close()
//   const data = response.data
//   switch (data.code) {
//     case '200':
//       console.log('######### Get response data: ' + JSON.stringify(response.data))
//       return response
//     case 'u0003':
//     case 'u0005':
//       console.error('######### Get session timeout response data: ' + JSON.stringify(response.data))
//       Vue.prototype.$message({
//         message: errorMapping.reasonCode[data.code],
//         type: 'error'
//       })
//       sessionStorage.clear()
//       router.replace({path: '/index'})
//       return Promise.reject(response)
//     default:
//       console.error('######### Get error response data: ' + JSON.stringify(response.data))
//       Vue.prototype.$message({
//         message: errorMapping.reasonCode[data.code],
//         type: 'error'
//       })
//       return Promise.reject(response)
//   }
// }, error => {
//   loadinginstace.close()
//   if (error.response) {
//     switch (error.response.status) {
//       case 401:
//         error.message = errorMapping.statusCode[error.response.status]
//         sessionStorage.clear()
//         router.replace({path: '/index'})
//         break
//       case 400:
//       case 403:
//       case 404:
//       case 408:
//       case 500:
//       case 501:
//       case 502:
//       case 503:
//       case 504:
//       case 505:
//         error.message = errorMapping.statusCode[error.response.status]
//         break
//       default:
//     }
//     Vue.prototype.$message({
//       message: error.message,
//       type: 'error'
//     })
//   }
//   return Promise.reject(error)
// })
//
// Vue.prototype.$http = http
// Vue.prototype.qs = qs

Object.keys(customFilters).forEach(key => {
  Vue.filter(key, customFilters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
