<template>
<contentDialog
  title="修改带入信息" class="edit-user-dialog"
  :visible="openingIncomeDialog" :waitingAjax="waitingAjax"
  @close="close()" @submit="confirmSubmit()">
  <el-form ref="form" :inline="true" style="padding-top: 20px;"
           :rules="rules" :model="form">
    <el-form-item label="局中盈亏" prop="income">
      <profitLossInput ref="profitLossInput" v-model="form.income" />
    </el-form-item>
    <el-form-item label="玩家带入" prop="bring">
      <el-input v-model="form.bring" />
    </el-form-item>
  </el-form>
  <!--  搜索栏  -->
  <incomeFilter @filterSearch="filterSearch" />
  <!--  搜索结果  -->
  <incomeTable
    :opening="openingIncomeDialog"
    :searchResult="searchResult"
    @selectResult="selectResult" />
  <!--  搜索分页  -->
  <paginationMatchServer
    :total="searchResult.total"
    @change="changeOffsetLimit" />
</contentDialog>
</template>

<script>
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { getUri } from 'src/config/gwConfig';
import { storage } from 'src/config/storageConfig';
import contentDialog from 'src/components/global/content-dialog';
import paginationMatchServer from 'src/components/global/pagination-match-server';
import profitLossInput from 'src/components/global/profitLossInput';
import incomeFilter from './IncomeFilter';
import incomeTable from './IncomeTable';

export default {
  name: '',
  data() {
    return {
      form: {
        bring: 0,
        income: 0,
        nickName: '',
        uniqueId: '',
        userName: '',
        queueStatus: '',
        queueStatusId: ''
      },
      rules: {
        income: [{ required: true, pattern: /^\d+$/, message: '局中盈亏不能为空，且需为整数' }],
        bring: [{ required: true, pattern: /^\d+$/, message: '玩家带入不能为空，且需为整数' }],
      },
      searchResult: [], // 搜索结果,
      searchResultRequest: { // 搜索请求
        angelName: '',
        userName: '',
        limit: 10,
        offset: 0
      },
      waitingAjax: false,
    };
  },
  computed: {
    /*  parent  */
    choosePerson() { return this.$parent.choosePerson; },
    openingIncomeDialog() { return this.$parent.openingIncomeDialog; },
    choose_queuing() { return storage.get('queuing_choose_queuing', 'sessionStorage'); }
  },
  watch: {
    openingIncomeDialog(val) {
      const vm = this;
      if (val) { // ---打开面板时
        vm.changeIncome();
        // 清空选人列表数据
        vm.form.nickName = '';
        vm.form.uniqueId = '';
        vm.form.userName = '';
        vm.form.queueStatus = '';
        vm.form.queueStatusId = '';
      }
    }
  },
  methods: {
    close() {
      this.searchResultRequest = {
        angelName: '',
        userName: '',
        limit: 10,
        offset: 0,
        queueStatus: '', // 排号状态
      };
      this.searchResult = [];
      this.$parent.toggleOpeningIncomeDialog(false);
    },
    /*  监控open 修改局中盈亏  */
    changeIncome() {
      const vm = this;
      /*  解决 dialog 首次打开 使用 v-if渲染问题  */
      if (!vm.$refs.profitLossInput) {
        window.setTimeout(() => {
          vm.changeIncome();
        }, 50);
        return;
      }
      vm.form = { ...vm.choosePerson };

      const income = parseInt(vm.form.income, 0);
      // 判断局中盈亏 form.income
      if (income < 0) {
        vm.$refs.profitLossInput.status = 'loss';
        vm.form.income = -1 * income;
      } else {
        vm.$refs.profitLossInput.status = 'profit';
        vm.form.income = income;
      }
      vm.search(); // 默认搜索一次
    },
    /*  确认修改  */
    confirmSubmit() {
      const vm = this;
      vm.$refs.form.validate((valid) => {
        if (valid) vm.submit();
      });
    },
    submit() {
      const vm = this;
      const incomeOperator = vm.$refs.profitLossInput.status === 'loss' ? '-' : '+';
      const index = vm.choosePerson.index;
      this.$parent.setPersonSettles(index, {
        actlyIncm: vm.choosePerson.actlyIncm, //
        bring: vm.form.bring, // 带入
        income: incomeOperator + vm.form.income, // 原始收益
        more: vm.choosePerson.more, //
        nickName: vm.form.nickName, // 昵称
        tableFee: vm.choosePerson.tableFee, //
        uniqueId: vm.form.uniqueId, //
        userName: vm.form.userNickName,
        queueStatus: vm.form.queueStatus,
        queueStatusId: vm.form.queueStatusId,
        index // 下标
      });
      vm.close();
    },

    /*  搜索栏  */
    changeOffsetLimit(offset, limit) {
      if (!this.openingIncomeDialog) { return; }
      this.searchResultRequest.offset = offset;
      this.searchResultRequest.limit = limit;
      this.search();
    },
    filterSearch(obj) {
      this.searchResultRequest.angelName = obj.angelName;
      this.searchResultRequest.userName = obj.name;
      this.search();
    },
    search() {
      const vm = this;
      const query = vm.$route.query;
      const param = {
        boardResource: 'IMAGE_REC',
        clubId: query.applyClubId,
        queueId: query.queueId,
        offset: vm.searchResultRequest.offset,
        limit: vm.searchResultRequest.limit,
        uniqueId: vm.searchResultRequest.angelName || undefined,
        userNickName: vm.searchResultRequest.userName || undefined
      };

      notifyAjaxWithoutAction({
        vm, param, url: getUri('get_queuing_operations'), method: 'get', handle: '搜索',
        noSuccessNotify: true,
        before() { vm.waitingAjax = true; },
        success(res) {
          const data = res.data;
          if (data.code == 10000) {
            vm.searchResult = data.msg;
          } else {
            vm.$notify.error({
              title: '搜索失败',
              message: data.msg,
              duration: 0
            });
          }
        },
        after() { vm.waitingAjax = false; }
      });
    },
    selectResult(val) {
      /*  解决 切换table 数据 时 ， 选择 null 问题  */
      if (!val) return;
      console.log(val);
      this.form.nickName = val.nickName;
      this.form.uniqueId = val.uniqueId;
      this.form.userName = val.name;
      this.form.userNickName = val.userNickName;
      this.form.queueStatus = val.queueStatus;
      this.form.queueStatusId = val.queueStatusId;
      /*  修改 玩家带入  */
      this.form.bring = val.freezeGold;

    },
  },
  components: {
    contentDialog,
    incomeFilter,
    incomeTable,
    paginationMatchServer,
    profitLossInput
  }
};
</script>

<style lang="scss">
  .edit-user-dialog {
    .el-dialog--small {
      padding: 0 20px 20px;
      width: 900px;
    }
    .el-dialog__body{
      padding: 10px;
      tr.current-row {
        color: #fff;
        >td {
          background-color: #13ce66;
        }
      }
    }
    .global_input-filter-bar {
      > div {
        padding: 15px 15px 15px 90px;
        > span {
          width: 85px;
        }
      }
    }
  }
</style>
