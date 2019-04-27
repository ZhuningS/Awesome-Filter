<template>
  <div v-loading="isLoading" element-loading-text="拼命加载中"
       class="home-page-wrap">
    <HomeHeader />
    <div class="f-main" ref="mainBody">
      <router-view></router-view>
    </div>
    <!--  修改密码弹窗  -->
    <HomeChangePsdDialog />
  </div>
</template>

<script>
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { storage } from 'src/config/storageConfig';
import STORAGE from 'src/localStorage/index';
import { cookie } from 'src/config/cookie';
import COOKIE from 'src/cookie/index';
import HomeHeader from './HomeHeader.vue';
import HomeChangePsdDialog from './HomeChangePsdDialog.vue';

export default {
  data() {
    return {
      isLoading: false,
      openingChangePsdDialog: false, // 修改密码弹窗
    };
  },
  methods: {
    /*  获取 功能权限  */
    toGetFunctions() {
      const vm = this;
      const param = { userId: cookie(COOKIE.userId) };
      notifyAjaxWithoutAction({
        vm, param, url: getUri('get_functions'), method: 'get',
        handle: '获取操作权限列表', noSuccessNotify: true,
        before() { vm.isLoading = true; },
        success(res) {
          storage.set(STORAGE.USER_FUNCTION, res.data);
        },
        after() { vm.isLoading = false; }
      });
    },
    resize() {
      const wH = window.innerHeight;
      const topH = 60;
      const mainBody = this.$refs.mainBody;
      mainBody.style.minHeight = (wH - topH) + 'px';
    },
    /*  setters  */
    toggleIsLoading(val) {
      this.isLoading = val;
    },
    toggleOpeningChangePsdDialog(val) {
      this.openingChangePsdDialog = val;
    }
  },
  created() {
    this.toGetFunctions();
  },
  mounted() {
    const vm = this;
    vm.resize();
    window.onresize = vm.resize;
  },
  components: {
    HomeHeader,
    HomeChangePsdDialog
  }
};
</script>

<style lang="scss">
.home-page-wrap {
  padding-top: 60px;
  .f-main {
    box-sizing: border-box;
    padding: 20px;
    background: #fff;
  }
}
</style>
