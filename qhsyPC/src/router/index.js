import Vue from 'vue'
import Router from 'vue-router'
import BirthGift from '../view/BirthGift.vue';
import GameList from '../view/GameList.vue';
import Internat from '../view/Internat.vue';
import NewGame from '../view/NewGame.vue';
import NewProduct from '../view/NewProduct.vue';
import OrderList from '../view/OrderList.vue';
import PointManage from '../view/PointManage.vue';
import UserList from '../view/UserList.vue';
import Page from '../components/Page.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page
      // redirect: {
      //   name: 'UserList'
      // }
    },
    {
      path: '/userlist',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/birthgift',
      name: 'BirthGift',
      component: BirthGift
    },
    {
      path: '/internat',
      name: 'Internat',
      component: Internat
    },
    {
      path: '/newgame',
      name: 'NewGame',
      component: NewGame
    },
    {
      path: '/newproduct',
      name: 'NewProduct',
      component: NewProduct
    },
    {
      path: '/pointmanage',
      name: 'PointManage',
      component: PointManage
    },
    {
      path: '/orderlist',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/gamelist',
      name: 'GameList',
      component: GameList
    }
  ]
})