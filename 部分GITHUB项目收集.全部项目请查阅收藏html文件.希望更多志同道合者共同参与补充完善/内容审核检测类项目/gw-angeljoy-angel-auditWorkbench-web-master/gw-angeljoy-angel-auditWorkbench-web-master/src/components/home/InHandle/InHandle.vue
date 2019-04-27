<template>
<div v-loading="loading"
     element-loading-text="拼命加载中">
  <InHandleHeader />
  <!--<InHandleFilter />-->
  <InHandleTable />
  <InHandlePagination />
</div>
</template>

<script>
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { delayForceLogout } from 'src/config/delayForceLogout';
import { clearAllCookie } from 'src/config/cookie';
import { storage } from 'src/config/storageConfig';
import InHandleHeader from './InHandleHeader';
import InHandleFilter from './InHandleFilter';
import InHandleTable from './InHandleTable';
import InHandlePagination from './InHandlePagination';

export default {
  data() {
    return {
      inHandleList: {}, // 圈游戏授权列表对象
      inHandleListRequest: { // 请求
        limit: 10,
        offset: 0
      },

      timer: -1,
      loading: false, // 加载flag
    };
  },
  methods: {
    toGetInHandleList(silence) {
      const vm = this;
      const param = {
        limit: vm.inHandleListRequest.limit,
        offset: vm.inHandleListRequest.offset
      };
      notifyAjaxWithoutAction({
        param, url: getUri('get_in_handle_list'), method: 'get',
        handle: '获取处理中战报列表列表', noSuccessNotify: true, silence,
        before() {
          if (silence) return;
          vm.loading = true;
        },
        success(res) { vm.inHandleList = res.data; },
        after() {
          if (silence) return;
          vm.loading = false;
        },
        error(err) { vm.errorHandler(err); }
      });
    },
    errorHandler(err) {
      /*  权限问题才报错  */
      if (err.body.errorCode === '11004' ||
        err.body.errorCode === '11005' ||
        err.body.errorCode === '11019' ||
        err.body.errorCode === '11015' ||
        err.body.errorCode === '11018' ||
        err.body.errorCode === '11022' ||
        err.body.errorCode === '11024') {
        delayForceLogout(() => {
          this.$notify.error({
            title: `系统服务异常 [${err.status}]`,
            message: err.body && err.body.errorMsg ? err.body.errorMsg : ''
          });
          clearAllCookie();
          storage.clear();
          window.location.href = '#/login';
        });
      }
    },
    /*  计时器获取待处理战报  */
    tickTock() {
      const vm = this;
      vm.timer = window.setInterval(() => {
        if (window.localStorage.CLEAR_GET_INHANDLE_LIST_TIMER) {
          window.clearInterval(vm.timer);
        }
        vm.toGetInHandleList(true);
      }, 5000);
    },
    /*  setters  */
    setInHandleListRequest(key, val) {
      this.inHandleListRequest[key] = val;
    },
    toggleLoading(val) {
      this.loading = val;
    }
  },
  created() {
    this.toGetInHandleList();
    this.tickTock();
  },
  beforeDestroy() {
    window.clearInterval(this.timer);
  },
  components: {
    InHandleHeader,
    InHandleFilter,
    InHandleTable,
    InHandlePagination,
  }
};
</script>
