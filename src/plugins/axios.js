import axios from 'axios';
import Vue from 'vue';
import store from './vuex.js'
import {LOADING} from '../store/types.js'
//添加一个请求的拦截器
axios.interceptors.request.use(function(config) {
  store.commit(LOADING,true)
  return config;// 撒手放出经过配置的请求
}, function(error) {
  // 发出了错误的请求，拦截
  return Promise.reject(error);
});

// 添加一个响应的拦截器
axios.interceptors.response.use(function(response) {
  //response  ~~ axios请求后的res
  // 响应数据回来后，到达目标组件之前，做点事   res.status   res.data.err == 2
  //校验返回数据，token过期，路由跳转login,传递当前路由地址
  store.commit(LOADING,false)
  return response;//奔向组件
}, function(error) {
  // 错误的响应，拦截
  return Promise.reject(error);
});


Vue.prototype.$axios=axios;
export default axios
