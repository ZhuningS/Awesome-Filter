// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUi from 'element-ui'
import store from 'src/store/index'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import { cookie } from './config/cookie'
import COOKIE from 'src/cookie/index'
import * as filters from 'src/config/filterConfig'

Vue.config.productionTip = false;
Vue.use(ElementUi);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;// requestHeader compatible

/*  全局 filters  */
Object.keys(filters).forEach(i => Vue.filter(i, filters[i]));

router.beforeEach((to, from, next) => {
  /*  以检测cookie 判断 跳转  */
  if (cookie(COOKIE.userId) === null ||
    cookie(COOKIE.userName) === null ||
    cookie(COOKIE.auth) === null) {
    if (to.path.indexOf('login') === -1) { // ---不在登陆页
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

