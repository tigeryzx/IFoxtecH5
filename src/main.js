// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import Login from './page/Login'
import Home from './page/Home'
import Account from './page/Account'
import * as types from './store/types'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  namge:'login',
  component: Login
},{
  path:'/home',
  name: 'home',
  component:Home
},
{
  path:'/account',
  name: 'account',
  component:Account
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

router.beforeEach(function (to, from, next) {
  store.commit(types.M_UPDATE_LOADING_STATUS, {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit(types.M_UPDATE_LOADING_STATUS, {isLoading: false})
})


/* eslint-disable no-new */
new Vue({
  router,
  // 使用状态管理
  store,
  render: h => h(App)
}).$mount('#app-box')
