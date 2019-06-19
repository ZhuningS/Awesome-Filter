<template>
<header class="f-header">
  <div class="f-header-div">
    <img class="f-logo" src="../../assets/sub_logo.png" alt="">
    <span class="f-name">战报审核工作台</span>
    <el-menu :default-active="activeIndex"
             class="el-menu-demo f-nav" mode="horizontal">
      <el-menu-item index="toHandle" @click="judgePath('/home/toHandle')">
        <el-badge class="tip-badge" :value="undoMsg.waitApplyCount" :hidden="!undoMsg.waitApplyCount">
          <span>未接单的战报</span>
        </el-badge>
      </el-menu-item>
      <el-menu-item index="inHandle" @click="judgePath('/home/inHandle')">
        <el-badge class="tip-badge" :value="undoMsg.waitCheckApplyCount" :hidden="!undoMsg.waitCheckApplyCount">
          <span>已接单未处理</span>
        </el-badge>
      </el-menu-item>
      <el-menu-item index="haveHandle" @click="judgePath('/home/haveHandle')">
        <el-badge class="tip-badge" :value="undoMsg.closedApplyCount" :hidden="!undoMsg.closedApplyCount">
          <span>已处理战报结果</span>
        </el-badge>
      </el-menu-item>
    </el-menu>
    <div class="btns">
      <span class="name">{{realName + '， 你好！'}}</span>
      <span class="btn" @click="changePsd">修改密码</span>
      <span class="btn" @click="toLogOut">退出登录</span>
    </div>
  </div>
</header>
</template>

<script>
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction, errorHandler } from 'src/config/usualAjax';
import { cookie, clearAllCookie } from 'src/config/cookie';
import { storage } from 'src/config/storageConfig';
import STORAGE from 'src/localStorage/index';
import COOKIE from 'src/cookie/index';
import { delayForceLogout } from 'src/config/delayForceLogout';

export default {
  name: 'header',
  data() {
    return {
      realName: '',
      activeIndex: '', // create 时 调整 激活菜单
      undoMsg: { // 未完成信息
        closedApplyCount: '',
        waitApplyCount: '',
        waitCheckApplyCount: ''
      },
      timer: -1
    };
  },
  watch: {
    $route() {
      this.changeActiveIndex();
    }
  },
  methods: {
    toGetUndoMsg() {
      const vm = this;
      notifyAjaxWithoutAction({
        vm, url: getUri('get_undo_msg'), method: 'get',
        handle: '获取未完成信息', noSuccessNotify: true, silence: true,
        success(res) { vm.undoMsg = res.data; },
        error(err) {

        }
      });
    },
    tickTock() {
      const vm = this;
      vm.timer = window.setInterval(() => {
        if (window.localStorage.CLEAR_UNDO_MSG_TIMER) {
          window.clearInterval(vm.timer);
        }
        vm.toGetUndoMsg();
      }, 5000);
    },
    /*  登出  */
    toLogOut() {
  	  const vm = this;
      const param = {};
      notifyAjaxWithoutAction({
        vm, param, url: getUri('logout'), method: 'post',
        handle: '退出', noSuccessNotify: true, silence: true,
        before() { vm.$parent.toggleIsLoading = true; },
        after() {
          vm.$parent.toggleIsLoading = false;
          clearAllCookie();
          storage.clear();
          vm.$router.replace('/login');
        }
      });
    },
    /*  判断激活 menu  */
    changeActiveIndex() {
      const fullPath = this.$route.fullPath.toLowerCase();
      if (fullPath.indexOf('tohandle') > -1) {
        this.activeIndex = 'toHandle';
      } else if (fullPath.indexOf('inhandle') > -1) {
        this.activeIndex = 'inHandle';
      } else if (fullPath.indexOf('havehandle') > -1) {
        this.activeIndex = 'haveHandle';
      } else {
        this.activeIndex = 'toHandle';
      }
    },
    changePsd() {
      this.$parent.toggleOpeningChangePsdDialog(true);
    },
    // 获取 操作树
    toGetList() {
      const vm = this;
      const USER_MENU_TREE = storage.get(STORAGE.USER_MENU_TREE);
      if (USER_MENU_TREE) {
        if (vm.judgeLoginRight(USER_MENU_TREE)) {
          console.log('有权限');
          return;
        }
        vm.$notify.error({
          message: '用户无权限访问',
          duration: 4000
        });
        delayForceLogout(vm.forceLogout);
        return;
      }
      const param = { userId: cookie(COOKIE.userId) };
      notifyAjaxWithoutAction({
        vm, param, url: getUri('user_menu'), method: 'get',
        handle: '获取操作菜单', noSuccessNotify: true,
        before() { vm.$parent.toggleIsLoading = true; },
        success(res) {
          if (!res || !res.data) return;
          if (vm.judgeLoginRight(res.data)) {
            storage.set(STORAGE.USER_MENU_TREE, res.data);
            return;
          }
          vm.$notify.error({
            message: '用户无权限访问',
            duration: 4000
          });
          delayForceLogout(vm.forceLogout);
        },
        after() { vm.$parent.toggleIsLoading = false; }
      });
    },
    /*  强制登出  */
    forceLogout() {
      clearAllCookie();
      storage.clear();
      window.location.href = '#/login';

    },
    /*  判断是否有角色权限  */
    judgeLoginRight(tree) {
      return tree[0].children[0].code === 'image_station';
    },
    /*  判断跟新路由  */
    judgePath(path) {
      if (this.$route.path.indexOf(path) > -1) {
        this.$router.go();
      } else {
        this.$router.push({ path });
      }
    }
  },
  created() {
    const vm = this;
    vm.realName = storage.get(STORAGE.USER_REAL_NAME);
    vm.toGetList();
    vm.changeActiveIndex();
    vm.toGetUndoMsg();
    vm.tickTock();
  },
  beforeDestroy() {
    window.clearInterval(this.timer);
  }
};
</script>

<style lang="scss">
.tip-badge .el-badge__content.is-fixed{
  top: 18px;
  right: 4px;
}
$headerInnerDivHeight: 48px;
.f-header {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  min-width: 960px;
  line-height: 60px;
  background-color: #090a0c;
  z-index: 1;
  > .f-header-div {
    box-sizing: border-box;
    position: relative;
    height: 60px;
    padding: 0 20px;
    zoom: 1;
    &:after {
      content: '';
      clear: both;
      width: 0;
      height: 0;
      display: block;
      visibility: hidden;
    }
    .btns {
      position: absolute;
      top: 0;
      right: 20px;
      > span {
        margin-left: 16px;
        font-size: 14px;
        line-height: $headerInnerDivHeight;
        $btnLessHeight: 14px;
        $btnBorder: 1px;
        color: #fff;
        &.btn {
          display: inline-block;
          padding: 0 14px;
          margin-top: $btnLessHeight / 2;
          height: $headerInnerDivHeight - $btnLessHeight;
          border: $btnBorder solid #714400;
          border-radius: 5px;
          line-height: $headerInnerDivHeight - $btnLessHeight - 2 * $btnBorder;
          background-color: #816300;
          cursor: pointer;
        }
        &.name {
          cursor: default;
        }
      }
    }
  }

  .f-name {
    float: left;
    font-size: 28px;
    line-height: 60px;
    color: #dcc46b;
    font-weight: 700;
  }
  .f-logo {
    float: left;
    margin-right: 10px;
    margin-top: 8px;
  }

  // ---导航栏
  .f-nav {
    margin-left: 280px;
    background-color: transparent;
    height: 60px;
    .el-menu-item {
      height: 60px;
      width: 140px;
      text-align: center;
      line-height: 60px;
      padding: 0;
      color: #dcc46b;
      &.is-active {
        color: #20a0ff;

      }
      &:hover {
        background: #fff;
        a {
          color: #aaa;
        }
      }
      a {
        display: block;
      }
    }
    .is-active {

    }
  }
}
</style>
