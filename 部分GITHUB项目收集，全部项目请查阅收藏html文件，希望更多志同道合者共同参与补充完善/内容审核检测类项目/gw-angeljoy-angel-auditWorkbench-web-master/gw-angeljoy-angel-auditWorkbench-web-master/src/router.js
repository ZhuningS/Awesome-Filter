import Vue from 'vue'
import Router from 'vue-router'

require('es6-promise').polyfill();
Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: 'home' },
    { //
      path: '/home',
      component: r => require(['./components/home/Index.vue'], r),
      children: [
        { path: '', redirect: 'toHandle' },
        { // 待处理战报
          path: 'toHandle',
          component: r => require(['./components/home/ToHandle/ToHandle.vue'], r)
        },
        { // 处理中战报
          path: 'inHandle',
          component: r => require(['./components/home/InHandle/InHandle.vue'], r)
        },
        { // 已处理战报
          path: 'haveHandle',
          component: r => require(['./components/home/HaveHandle/HaveHandle.vue'], r)
        },
        { // 开始结算
          path: 'beginSettle',
          component: r => require(['./components/home/BeginSettle/Begin.vue'], r)
        }
      ]
    },
    { // 登陆页
      path: '/login',
      name: 'login',
      component: r => require(['./components/Login.vue'], r)
    }
  ]
});
