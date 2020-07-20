import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import mutations from '../store/mutations.js'
import getters from '../store/getters.js'
import state from '../store/state.js'

import home from '../store/modules/home.js'
import detail from '../store/modules/detail.js'
import search from '../store/modules/search.js'
let store = new Vuex.Store({
  state, mutations, getters,
  modules:{
    home,detail,search
  }

});


export default store;