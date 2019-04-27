<template>
  <el-table :data="inHandleList.rows" border
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
        <el-button @click="toCheck(scope.row)" type="text">审核处理</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { checkResult } from 'src/mock/index';
import { storage } from 'src/config/storageConfig';

export default {
  computed: {
    inHandleList() { return this.$parent.inHandleList; }
  },
  methods: {
    /*  图片识别  */
    toCheck(row) {
      const vm = this;
      const param = { applyId: row.id };
      notifyAjaxWithoutAction({
        vm, param, url: getUri('handle_check'), method: 'get', handle: '识别图片',
        before() { vm.$parent.toggleLoading(true); },
        success(res) {
          const data = res.data;
          const personSettles = data.personSettles;
          for (let i = personSettles.length; i--;) {
            personSettles[i].income = personSettles[i].income || 0;
          }
          storage.set('queuing_check_data', data, null, 'sessionStorage');
          vm.$router.push({
            path: '/home/beginSettle',
            query: {
              applyId: row.id,
              applyClubId: row.applyClubId,
              queueId: row.queueId,
              before: 'inHandle'
            }
          });
        },
        after() { vm.$parent.toggleLoading(false); }
      });
    },
  }
};
</script>
