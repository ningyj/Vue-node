import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/css/base.css';
import './assets/js/font.js';
import 'swiper/dist/css/swiper.css';
import router from './plugins/router';
import './plugins/axios';
import store from './plugins/vuex.js';
import * as types from './store/types.js'




let local1 = window.localStorage.getItem('bNav');
let local2 = window.localStorage.getItem('bTab');
if(local1!==null){
  store.commit(types.NAV,local1==='true'?true:false)
}
if(local2!==null){
  store.commit(types.TAB,local2==='true'?true:false)
}
new Vue({
  data:{
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')
