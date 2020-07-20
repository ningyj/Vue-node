import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);


import Home from '../pages/home.vue';
import Rank from '../pages/rank.vue';
import Search from '../pages/search.vue';
import Login from '../pages/login.vue';
import Player from '../pages/player.vue';
import Detail from '../pages/detail.vue'
import Error from '../pages/Error.vue'
let routes = [
  {path: '/home',component: Home},
  {path: '/rank',component: Rank},
  {path: '/search',component: Search},
  {path: '/login',component: Login},
  {name:'player',path: '/player/:songmid',component: Player},
  {name:'detail', path:'/detail/:_id',component:Detail},
  {path: '/',redirect: '/home'},
  {path:'*',component:Error},
]

//4.路由实例
let router = new VueRouter({ //插件路由对象
  // routes:routes
  routes,
});
//5.导出路由实例，让他去控制vue根
export default router