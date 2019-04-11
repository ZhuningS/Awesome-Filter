<template>
  <el-table :data="toHandleList.rows" border
            style="wdith: 100%" class="table-content">
    <el-table-column label="接收时间">
      <template scope="scope">
        {{ scope.row.applyTime | formatAngelTime | formatEmptyStr }}
      </template>
    </el-table-column>
    <el-table-column label="状态">
      <template scope="scope">
        {{ scope.row.handleStatusDisplay | formatEmptyStr }}
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <submitBtnPopover
          type="text" btnMsg="接单" confirmMsg="确认接单？"
          @submit="toApply(scope.row)" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { checkResult } from 'src/mock/index';
import { storage } from 'src/config/storageConfig';
import submitBtnPopover from 'src/components/global/submitBtnPopover';

export default {
  computed: {
    toHandleList() { return this.$parent.toHandleList; }
  },
  methods: {
    /*  审核申请  */
    toApply(row) {
      const vm = this;
      const param = { applyId: row.id };
      notifyAjaxWithoutAction({
        vm, param, url: getUri('apply_handle_check'), method: 'get',
        handle: '申请审核', noSuccessNotify: true,
        before() { vm.$parent.toggleLoading(true); },
        success(res) {
          vm.$alert('请到 “已接单未处理” 界面进行审核', '接单成功');
          vm.$parent.toGetToHandleList();

        },
        error(err) {
          const msg = err.body && err.body.errorMsg ? err.body.errorMsg : '接单失败';
          vm.$alert(msg, '接单失败');
          vm.$parent.toggleLoading(false);
        }
      });
    },
  },
  components: {
    submitBtnPopover
  }
};
</script>
