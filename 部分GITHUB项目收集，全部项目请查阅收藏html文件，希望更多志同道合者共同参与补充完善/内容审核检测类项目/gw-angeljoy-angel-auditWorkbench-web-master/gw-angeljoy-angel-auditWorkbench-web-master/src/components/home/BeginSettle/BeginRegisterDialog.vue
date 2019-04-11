<template>
  <contentDialog title="选择登记信息" :visible="openingRegisterDialog"
                 @close="close()" @submit="submit()"
                 class="queuing-begin-register-dialog"
                 :disabledConfirm="!haveSelect"
                 :waitingAjax="waitingAjax">
    <el-table :data="registers.rows" border highlight-current-row
              @current-change="selectResult"
              style="wdith: 100%" class="table-content">
      <el-table-column label="标题">
        <template scope="scope">
          {{ '标题字段缺失' | formatEmptyStr }}
        </template>
      </el-table-column>
      <el-table-column label="内容">
        <template scope="scope">
          {{ '内容字段缺失' | formatEmptyStr }}
        </template>
      </el-table-column>
      <el-table-column label="已冻结圈币">
        <template scope="scope">
          {{ scope.row.freezeGold | formatEmptyStr }}
        </template>
      </el-table-column>
      <el-table-column label="登记时间">
        <template scope="scope">
          {{ scope.row.createTime | formatAngelTime | formatEmptyStr }}
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template scope="scope">
          {{ showStatus(scope.row) | formatEmptyStr }}
        </template>
      </el-table-column>
    </el-table>
    <paginationMatchServer :total="registers.total" @change="changeOffsetLimit" />

  </contentDialog>

</template>

<script>
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { storage } from 'src/config/storageConfig';
import contentDialog from 'src/components/global/content-dialog';
import paginationMatchServer from 'src/components/global/pagination-match-server';

  export default {
    data() {
      return {
        registers: { rows: [] }, // 登记信息列表
        registersRequest: {
          limit: 10,
          offset: 0
        },
        selectOne: {}, // 选中的登记信息
        haveSelect: false, // 已选择登记信息
        waitingAjax: false
      };
    },
    computed: {
      /*  parent  */
      choosePerson() { return this.$parent.choosePerson; },
      openingRegisterDialog() { return this.$parent.openingRegisterDialog; },

      /*  vuex  */
      choose_queuing() { return storage.get('queuing_choose_queuing', 'sessionStorage'); }

    },
    watch: {
      openingRegisterDialog(val) {
        if (val) {
          this.toGetRegisters();
        }
      }
    },
    methods: {
      toGetRegisters() {
        const vm = this;
        const param = {
          clubId: vm.choose_queuing.clubId,
          queueId: vm.choose_queuing.id,
          offset: vm.registersRequest.offset,
          limit: vm.registersRequest.limit,
          uniqueId: vm.choosePerson.uniqueId || undefined
        };
        notifyAjaxWithoutAction({
          vm, param, url: getUri('get_queuing_operations'), method: 'get',
          handle: '获取登记信息', noSuccessNotify: true,
          before() { vm.waitingAjax = true; },
          success(res) {
            const data = res.data;
            if (data.code == 10000) {
              vm.registers = data.msg;
            } else {
              vm.$notify.error({
                title: '获取登记信息失败',
                message: data.msg,
                duration: 0
              });
            }
          },
          after() { vm.waitingAjax = false; }
        });
      },
      /*  显示状态  */
      showStatus(row) {
        if (row.queueStatus === 'START') {
          return 'START';
        } else if (row.queueStatus === 'WAIT') {
          return 'WAIT';
        }
        return '';
      },
      /*  选择  */
      selectResult(val) {
        if (!this.openingRegisterDialog) { return; }
        this.haveSelect = true;
        this.selectOne = val;
      },
      close() {
        this.haveSelect = false;
        this.selectOne = {};
        this.$parent.toggleOpeningRegisterDialog(false);
      },
      submit() {
        const vm = this;
        const param = {

        };
//        notifyAjaxWithoutAction({
//          vm, param, url: getUri('queuing_register'), method: 'post',
//          handle: '上码登记', noSuccessNotify: true,
//          before() { vm.waitingAjax = true; },
//          success(res) {
//          },
//          after() { vm.waitingAjax = false; }
//        });
      },
      changeOffsetLimit(offset, limit) {
        this.setRegistersRequest('offset', offset);
        this.setRegistersRequest('limit', limit);
        this.toGetRegisters();
      },
      /*  setters  */
      setRegistersRequest(key, val) {
          this.registersRequest[key] = val;
      },

    },
    components: {
      contentDialog,
      paginationMatchServer
    }
  };
</script>

<style lang="scss">
.queuing-begin-register-dialog {
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
