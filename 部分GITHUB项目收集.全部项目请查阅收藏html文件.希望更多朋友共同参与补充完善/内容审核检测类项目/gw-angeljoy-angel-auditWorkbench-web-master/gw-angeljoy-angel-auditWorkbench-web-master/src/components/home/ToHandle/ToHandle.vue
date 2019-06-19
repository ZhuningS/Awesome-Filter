<template>
<div v-loading="loading"
     element-loading-text="拼命加载中">
  <ToHandleHeader />
  <!--<ToHandleFilter />-->
  <ToHandleTable />
  <ToHandlePagination />
</div>
</template>

<script>
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { delayForceLogout } from 'src/config/delayForceLogout';
import { clearAllCookie } from 'src/config/cookie';
import { storage } from 'src/config/storageConfig';
import ToHandleHeader from './ToHandleHeader';
import ToHandleFilter from './ToHandleFilter';
import ToHandleTable from './ToHandleTable';
import ToHandlePagination from './ToHandlePagination';

export default {
  data() {
    return {
      toHandleList: {}, // 圈游戏授权列表对象
      toHandleListRequest: { // 请求
        limit: 10,
        offset: 0,
        applyTime: '',
        handleStatus: ''
      },
      applyId: -1, // 审核中的 id
      checkResult: {}, // 审核中的 图片识别结果

      timer: -1,
      openingCheckDialog: false,
      loading: false, // 加载flag
    };
  },
  methods: {
    /**
     * silence: true 不处理 error notify
     * */
    toGetToHandleList(silence) {
      const vm = this;
      const param = {
        limit: vm.toHandleListRequest.limit,
        offset: vm.toHandleListRequest.offset,
        applyTime: vm.toHandleListRequest.applyTime || undefined,
        handleStatus: vm.toHandleListRequest.handleStatus || undefined
      };
      notifyAjaxWithoutAction({
        param, url: getUri('get_to_handle_list'), method: 'get',
        handle: '获取待处理战报列表', noSuccessNotify: true, silence,
        before() {
          if (silence) return;
          vm.loading = true;
        },
        success(res) { vm.toHandleList = res.data; },
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
        if (window.localStorage.CLEAR_GET_TOHANDLE_LIST_TIMER) {
          window.clearInterval(vm.timer);
        }
        console.log(123);
        vm.toGetToHandleList(true);
      }, 5000);
    },
    /*  setters  */
    setToHandleListRequest(key, val) {
      this.toHandleListRequest[key] = val;
    },
    setApplyId(val) {
      this.applyId = val;
    },
    setCheckResult(val) {
      this.checkResult = val;
    },
    toggleOpeningCheckDialog(val) {
      this.openingCheckDialog = val;
    },
    toggleLoading(val) {
      this.loading = val;
    },
  },
  created() {
    this.toGetToHandleList();
    this.tickTock();
  },
  beforeDestroy() {
    window.clearInterval(this.timer);
  },
  components: {
    ToHandleHeader,
    ToHandleFilter,
    ToHandleTable,
    ToHandlePagination,
  }
};
</script>
