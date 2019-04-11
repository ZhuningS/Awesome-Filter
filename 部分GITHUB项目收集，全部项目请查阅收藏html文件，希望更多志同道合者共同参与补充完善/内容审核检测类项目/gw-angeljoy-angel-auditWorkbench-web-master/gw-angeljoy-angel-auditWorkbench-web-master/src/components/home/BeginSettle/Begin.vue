<template>
  <div v-loading="waitingAjax" element-loading-text="拼命加载中"
       class="begin-settle-begin__dialog">
      <p class="title">开始结算</p>
      <div class="content">
        <div class="left">
          <img :src="settleImg">
          &nbsp;
        </div>
        <div class="right">
          <div class="top">
            <el-button @click="toggleHaveSafe()">
              {{ haveSafe === 'YES' ? '删除' : '添加'}}保险
            </el-button>
          </div>
          <beginPersonTable
            ref="beginPersonTable"
            :personSettles="personSettles"
            :haveSafe="haveSafe"
            :safeMoney="safeMoney"
            @addPersonSettle="addPersonSettle"
            @deletePersonSettle="deletePersonSettle"
            @openSafePool="toggleOpeningSafePoolDialog"
            @openIncomeDialog="openIncomeDialog"
            @openRegisterDialog="openRegisterDialog" />
        </div>
      </div>
    <div class="footer">
      <el-button class="close-button" @click="closeReturn()">取&nbsp;消</el-button>
      <submitBtnPopover
        btnMsg="战报有误，驳回"
        btnClass="submit-button"
        type="primary" confirmMsg="确认驳回？"
        @submit="refuse()" />
      <submitBtnPopover
        btnClass="submit-button"
        type="primary" confirmMsg="确认结算？"
        @submit="confirmSubmitEdit()" />
    </div>
      <!--  修改保险池  -->
      <beginSafePoolDialog />
      <!--  修改带入信息  -->
      <beginIncomeDialog />
      <!--  选泽登记信息  -->
      <beginRegisterDialog />
  </div>
</template>

<script>
import 'src/style/settlement-dialog.scss';
import 'src/style/begin-settle-begin__dialog.scss';
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { storage } from 'src/config/storageConfig';
import submitBtnPopover from 'src/components/global/submitBtnPopover';
import beginTopTable from './BeginTopTable';
import beginPersonTable from './BeginPersonTable';
import beginSafePoolDialog from './BeginSafePoolDialog';
import beginIncomeDialog from './BeginIncomeDialog/BeginIncomeDialog';
import beginRegisterDialog from './BeginRegisterDialog';

export default {
  data() {
    return {
      clubId: '', // 俱乐部id
      settleImg: '', // 结算图片
      personSettles: [ // 玩家结算列表
        {
          actlyIncm: 0, //
          bring: 0, // 带入
          income: 0, // 原始收益
          more: 0, //
          name: '', // 昵称
          tableFee: 0, //
          uniqueId: '', //
          userName: '', // 天使账号
          index: 0 // 下标
        }
      ],
      haveSafe: '', // 保险flag
      choosePerson: {}, // 选中人员信息

      safeMoney: 0, // 保险
      remark: '', // 备注

      openingSafePoolDialog: false, // 打开 修改保险 弹窗
      openingIncomeDialog: false, // 打开 带入信息 弹窗
      openingRegisterDialog: false, // 打开 登记信息 弹窗
      waitingAjax: false, // 请求 flag
    };
  },
  watch: {
    personSettles(val) {
      const tem = storage.get('queuing_check_data', 'sessionStorage');
      tem.personSettles = val;
      storage.set('queuing_check_data', tem, null, 'sessionStorage');
    }
  },
  methods: {
    toggleHaveSafe() {
      this.haveSafe = this.haveSafe === 'YES' ? 'NO' : 'YES';
    },
    closeReturn() {
      const before = this.$route.query.before;
      const path = '/home/' + before;
      console.log(path);
      this.$router.replace({ path });
    },
    beforeConfirm() {
      const result = {
        flag: true, // 成功标志
        msg: '' // 错误信息
      };
      const sum = this.$refs.beginPersonTable.settlementSum;
      if (sum > 6 || sum < -6) {
        return {
          flag: false,
          msg: '合计盈亏应在 -6 ~ 6 之间'
        };
      }
      for (let i = 0, l = this.personSettles.length; i < l; i++) {
        if (this.personSettles[i].bring < -(this.personSettles[i].income)) {
          return {
            flag: false,
            msg: '客户亏损应小于等于客户带入'
          };
        }
        if (!this.personSettles[i].uniqueId ) {
          return {
            flag: false,
            msg: '存在客户未对应上码登记记录'
          };
        }
      }
      return result;
    },
    /*  驳回战报  */
    refuse() {
      const vm = this;
      const param = { applyId: vm.$route.query.applyId };
      notifyAjaxWithoutAction({
        vm, param, url: getUri('refuse_handle_check'), method: 'get',
        handle: '驳回申请',
        before() { vm.waitingAjax = true; },
        success(res) { vm.closeReturn() },
        after() { vm.waitingAjax = false; }
      });
    },
    /*  提交战报  */
    confirmSubmitEdit() {
      const result = this.beforeConfirm();
      if (!result.flag) {
        this.$notify.error({
          title: '提交战报失败',
          message: result.msg,
          duration: 0
        });
        return;
      }
      const vm = this;
      const param = new FormData();
      const json = {
        fish: '-1',
        id: '-1',
        mvp: '-1',
        personSettles: vm.personSettles,
        remark: vm.remark || '',
        table: {
          blind: '-1',
          duration: '-1',
          front: '-1',
          gameName: '-1',
          haveSafe: vm.haveSafe,
          personNum: '-1',
          safeMoney: vm.safeMoney,
          tableName: '-1',
          tableType: '-1',
          time: '-1',
          totalBring: '-1',
          totalHand: '-1',
          totalMore: '-1',
          totalTableFee: '-1'
        },
        pictPath: '-1',
        tuhao: '-1',
        /*  添加合计  */
        total: this.$refs.beginPersonTable.settlementSum
      };
      param.append('data', JSON.stringify(json));
      param.append('applyId', this.$route.query.applyId);
      console.log(JSON.stringify(json));
      const aaa = {
        data: JSON.stringify(json),
        applyId: this.$route.query.applyId
      };
      notifyAjaxWithoutAction({
        vm, param: aaa, url: getUri('commit_check'), method: 'post',
        handle: '提交战报', noSuccessNotify: true,
        before() { vm.waitingAjax = true; },
        success(res) {
          vm.$alert('提交战报成功', '提示', {
            callback: action => {
              vm.closeReturn();
            }
          });
        },
        after() { vm.waitingAjax = false; }
      });
    },
    openIncomeDialog(entry) {
      this.setChoosePerson(entry);
      this.toggleOpeningIncomeDialog(true);
    },
    openRegisterDialog(entry) {
      this.setChoosePerson(entry);
      this.toggleOpeningRegisterDialog(true);
    },
    /*  setters  */
    setPersonSettles(index, obj) {
      const tem = JSON.parse(JSON.stringify(this.personSettles));
      tem[index].bring = obj.bring; //
      tem[index].income = obj.income; //
      tem[index].more = obj.more; //
      if (obj.nickName) tem[index].nickName = obj.nickName;
      if (obj.uniqueId) tem[index].uniqueId = obj.uniqueId;
      if (obj.userName) tem[index].userName = obj.userName;
      if (obj.queueStatus) tem[index].queueStatus = obj.queueStatus;
      if (obj.queueStatusId) tem[index].queueStatusId = obj.queueStatusId;
      this.personSettles = tem;
    },
    addPersonSettle() {
      const l = this.personSettles.length;
      this.personSettles.push({
        actlyIncm: 0, //
        bring: 0, // 带入
        income: 0, // 原始收益
        more: 0, //
        nickName: '', // 昵称
        tableFee: 0, //
        uniqueId: '', //
        userName: '', // 天使账号
        queueStatus: '',
        queueStatusId: '',
        index: l // 下标
      });
    },
    deletePersonSettle(index) { // 移除某项
      const temArr = JSON.parse(JSON.stringify(this.personSettles));
      temArr.splice(index, 1);
      const l = temArr.length;
      for (let i = index; i < l; i++) {
        temArr[i].index = i;
      }
      this.personSettles = temArr;
    },
    setChoosePerson(obj) {
      this.choosePerson = obj;
    },
    setHaveSafe(val) {
      this.haveSafe = val;
    },
    setSafeMoney(val) {
      this.safeMoney = val;
    },
    toggleOpeningSafePoolDialog(val) {
      this.openingSafePoolDialog = val;
    },
    toggleOpeningIncomeDialog(val) {
      this.openingIncomeDialog = val;
    },
    toggleOpeningRegisterDialog(val) {
      this.openingRegisterDialog = val;
    }
  },
  created() {
    const vm = this;
    vm.clubId = this.$route.query.applyClubId;
    const queuingCheckData = storage.get('queuing_check_data', 'sessionStorage');
    vm.personSettles = JSON.parse(JSON.stringify(queuingCheckData.personSettles));
    vm.settleImg = queuingCheckData.pictPath;
    /*  初始化一个 index 字段 绑定 玩家信息 */
    for (let i = vm.personSettles.length; i--;) {
      vm.personSettles[i].index = i;
    }
    /*  初始化  safeMoney  */
    vm.setSafeMoney(queuingCheckData.table.safeMoney);
    vm.setHaveSafe(queuingCheckData.table.haveSafe);
  },

  components: {
    submitBtnPopover,
    beginTopTable,
    beginPersonTable,
    beginSafePoolDialog,
    beginIncomeDialog,
    beginRegisterDialog
  }
};
</script>
