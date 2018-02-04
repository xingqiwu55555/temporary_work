import Vue from 'vue'
import Router from 'vue-router'

const overviewPage = r => require.ensure([], () => r(require('../page/overview.vue')), 'overviewPage');
const wechatPage = r => require.ensure([], () => r(require('../page/wechat.vue')), 'wechatPage');
const marketPage = r => require.ensure([], () => r(require('../page/market.vue')), 'marketPage');
const formPage = r => require.ensure([], () => r(require('../page/form.vue')), 'formPage');

const centerPage = r => require.ensure([], () => r(require('../page/center.vue')), 'centerPage');
const loginPage = r => require.ensure([], () => r(require('../page/login.vue')), 'loginPage');
const registerPage = r => require.ensure([], () => r(require('../page/register.vue')), 'registerPage');
const forgetPage = r => require.ensure([], () => r(require('../page/forget.vue')), 'forgetPage');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'overview',
      }
    },
    {
      path: '/overview',
      name: 'overview',
      component: overviewPage
    },
    {
      path: '/market',
      name: 'market',
      component: marketPage
    },
    {
      path: '/form',
      name: 'form',
      component: formPage
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: wechatPage
    },
    {
      path: '/center',
      name: 'center',
      component: centerPage
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/register',
      name: 'register',
      component: registerPage
    },
    {
      path: '/forget',
      name: 'forget',
      component: forgetPage
    }
  ]
})
