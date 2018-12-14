import Vue from 'vue';
import App from './views/app.vue';
import VueRouter from 'vue-router';
import router from './router/index';
// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api;
Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h=> h(App)
});