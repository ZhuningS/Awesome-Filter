import Vue from 'vue';
import Vuex from 'vuex';
import globalUse from './modules/global';
import beginSettle from './modules/beginSettle';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    globalUse,      // 公用
    beginSettle     // 开始结算
  }
});
