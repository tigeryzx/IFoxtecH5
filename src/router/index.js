import Login from '../page/Login'
import Home from '../page/Home'
import Account from '../page/Account'
import Customer from '../page/Customer'
import CustomerInfo from '../page/CustomerInfo'
import CustomerApply from '../page/CustomerApply'
import ContactsInfo from '../page/ContactsInfo'
import Notify from '../page/Notify'
import NotifyHistory from '../page/NotifyHistory'


const routes = [{
  path: '/',
  namge: 'login',
  meta: {
    showTabbar: false
  },
  component: Login
}, {
  path: '/home',
  name: 'home',
  meta: {
    title: '主页'
  },
  component: Home
},{
  path: '/account',
  name: 'account',
  meta: {
    title: '我'
  },
  component: Account
},{
  path: '/customer',
  name: 'customer',
  meta: {
    title: '我的客户'
  },
  component: Customer
},{
  path: '/customer/all',
  name: 'allCustomer',
  meta: {
    title: '所有客户',
    canBack: true,
    showTabbar: false
  },
  component: Customer
},{
  path: '/customer/share',
  name: 'shareCustomer',
  meta: {
    title: '共享客户',
    canBack: true,
    showTabbar: false
  },
  component: Customer
},{
  path: '/customerApply',
  name: 'customerApply',
  meta: {
    title: '申领审批',
    canBack: true,
    showTabbar: false
  },
  component: CustomerApply
},{
  path: '/customerInfo',
  name: 'customerInfo',
  meta: {
    title: '客户详情',
    canBack: true,
    showTabbar: false
  },
  component: CustomerInfo
},{
  path: '/contactsInfo',
  name: 'contactsInfo',
  meta: {
    title: '联系人',
    canBack: true,
    showTabbar: false
  },
  component: ContactsInfo
}, {
  path: '/notify',
  name: 'notify',
  meta: {
    title: '消息'
  },
  component: Notify
}, {
  path: '/notifyHistory',
  name: 'notifyHistory',
  meta: {
    title: '历史消息',
    canBack: true,
    showTabbar: false
  },
  component: NotifyHistory
}]

export default routes;