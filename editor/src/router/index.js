import Vue from 'vue'
import Router from 'vue-router'

const leaguePage = r => require.ensure([], () => r(require('../page/league.vue')), 'leaguePage');
const agentPage = r => require.ensure([], () => r(require('../page/agent.vue')), 'agentPage');
const templatePage = r => require.ensure([], () => r(require('../page/template.vue')), 'templatePage');
const investmentPage = r => require.ensure([], () => r(require('../page/investment.vue')), 'investmentPage');
const aboutPage = r => require.ensure([], () => r(require('../page/about.vue')), 'aboutPage');
const loginPage = r => require.ensure([], () => r(require('../page/login.vue')), 'loginPage');
const registerPage = r => require.ensure([], () => r(require('../page/register.vue')), 'registerPage');
const forgetPage = r => require.ensure([], () => r(require('../page/forget.vue')), 'forgetPage');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'league',
      }
    },
    {
      path: '/league',
      name: 'league',
      component: leaguePage
    },
    {
      path: '/agent',
      name: 'agent',
      component: agentPage
    },
    {
      path: '/template',
      name: 'template',
      component: templatePage
    },
    {
      path: '/investment',
      name: 'investment',
      component: investmentPage
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage
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
