<template>
<div v-loading="loading"
     element-loading-text="拼命加载中">
  <HaveHandleHeader />
  <!--<HaveHandleFilter />-->
  <HaveHandleTable />
  <HaveHandlePagination />
  <!--  查看 战报结果  -->
  <HaveHandleCheckDialog />
</div>
</template>

<script>
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { delayForceLogout } from 'src/config/delayForceLogout';
import { clearAllCookie } from 'src/config/cookie';
import { storage } from 'src/config/storageConfig';
import HaveHandleHeader from './HaveHandleHeader';
import HaveHandleFilter from './HaveHandleFilter';
import HaveHandleTable from './HaveHandleTable';
import HaveHandlePagination from './HaveHandlePagination';
import HaveHandleCheckDialog from './HaveHandleCheckDialog'

export default {
  data() {
    return {
      haveHandleList: {}, // 圈游戏授权列表对象
      haveHandleListRequest: { // 请求
        limit: 10,
        offset: 0
      },
      timer: -1, //
      applyId: -1, // 选中的战报id
      chooseResult: {}, // 选中 的战报结果
      openingCheckDialog: false, // 打开 查看 战报 结果 弹窗
      loading: false, // 加载flag
    };
  },
  methods: {
    toGetHaveHandleList(silence) {
      const vm = this;
      const param = {
        limit: vm.haveHandleListRequest.limit,
        offset: vm.haveHandleListRequest.offset
      };
      notifyAjaxWithoutAction({
        param, url: getUri('get_have_handle_list'), method: 'get',
        handle: '获取已处理战报列表', noSuccessNotify: true, silence,
        before() {
          if (silence) return;
          vm.loading = true;
        },
        success(res) { vm.haveHandleList = res.data; },
        after() {
          if (silence) return;
          vm.loading = false;
        },
        error(err) { vm.errorHandler(err); }
      });
    },
    /*  计时器获取已处理战报  */
    tickTock() {
      const vm = this;
      vm.timer = window.setInterval(() => {
        if (window.localStorage.CLEAR_GET_HAVEHANDLE_LIST_TIMER) {
          window.clearInterval(vm.timer);
        }
        vm.toGetHaveHandleList(true);
      }, 5000);
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
    /*  获取 选中战报结果  */
    toGetChooseResult(row) {
      const vm = this;
      const param = {
        applyClubId: row.applyClubId,
        boardApplyId: row.id
      };
      notifyAjaxWithoutAction({
        vm, param, url: getUri('get_check_result_list'), method: 'get',
        handle: '获取战报结果', noSuccessNotify: true,
        before() { vm.loading = true; },
        success(res) {
          vm.chooseResult = res.data.rows[0];
          vm.toggleOpeningCheckDialog(true);
        },
        after() { vm.loading = false; }
      });
    },
    /*  setters  */
    setHaveHandleListRequest(key, val) {
      this.haveHandleListRequest[key] = val;
    },
    setApplyId(obj) {
      this.applyId = obj;
    },
    toggleOpeningCheckDialog(val) {
      this.openingCheckDialog = val;
    }
  },
  created() {
    this.toGetHaveHandleList();
    this.tickTock();
  },
  beforeDestroy() {
    window.clearInterval(this.timer);
  },
  components: {
    HaveHandleHeader,
    HaveHandleFilter,
    HaveHandleTable,
    HaveHandlePagination,
    HaveHandleCheckDialog
  }
};
</script>
