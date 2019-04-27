<template>
  <contentDialogWithoutButton
    ref="settlementDetailDialog" title="开始结算" :hiddenCancel="true"
    class="queuing-operation-result-begin-settle__dialog "
    :visible="openingBeginSettleDialog" :waitingAjax="waitingAjax"
    size="full" @close="close()">
    <div class="content">
      <div class="left">
        <img :src="chooseSettlementDetailImg">
      </div>
      <div class="right">
        <div class="top">
          <!--<el-button>删除保险</el-button>-->
        </div>
        <table class="person-table" width="100%" border="1"
               cellpadding="0" cellspacing="0" style="table-layout:fixed">
          <tr v-show="chooseOne.table.haveSafe === 'YES'">
            <td class="safe-title" width="200">保险池</td>
            <td width="200"
                :class="judgeRiseDown(chooseOne.table.safeMoney) ? 'rise-price' : 'down-price'">
              <el-input :readonly="true"
                        v-model="chooseOne.table.safeMoney" />
            </td>
            <td width="60">
            </td>
          </tr>
          <tr v-for="(item, index) in chooseOne.personSettles">
            <td>
              <!-- <p>天使生活账号:{{ entry.account }}</p> -->
              <p class="important-info">游戏昵称：{{item.nickName}}</p>
              <p class="important-info">带入{{ item.bring }}</p>
              <p class="not-so-much-info">
                天使生活账号：{{item.uniqueId}}
              </p>
              <p class="not-so-much-info">名字：{{item.userName}}</p>
            </td>
            <td class="table-income"
                :class="judgeRiseDown(item.income) ? 'rise-price' : 'down-price'">
              <el-input :readonly="true" v-model="chooseOne.personSettles[index].income" />
            </td>
            <td class="sure">
              <p>{{ showQueueStatus(item.queueStatus) }}</p>
            </td>
          </tr>
        </table>
        <div class="remark-wrap">
          <div class="left-title">
            <p class="important-info">合计：</p>
            <p class="not-so-much-info">备注：</p>
          </div>
          <div class="remark-content">
            <p class="important-info">{{ settlementSum }}</p>
            <el-input class="not-so-much-info"
                      v-model="remark"
                      type="textarea" :autosize="{ minRows: 1, maxRows: 2 }" />
          </div>
        </div>
      </div>
    </div>
    <div slot="footer" class="footer">
      <el-button
        class="submit-button"
        v-show="settleDialogReadOnly"
        type="primary" @click="close()">确 认</el-button>
      <el-button
        class="close-button"
        v-show="!settleDialogReadOnly"
        :disabled="waitingAjax" @click="close()">取 消</el-button>
      <submitBtnPopover
        btnClass="submit-button"
        v-show="!settleDialogReadOnly"
        type="primary" btnMsg="数据有误，申请重新数码识别"
        confirmMsg="确认重新数码识别？"
        :loading="waitingAjax" :disabled="waitingAjax" @submit="reDo()" />
      <submitBtnPopover
        btnClass="submit-button"
        v-show="!settleDialogReadOnly"
        type="primary" btnMsg="开始结算" confirmMsg="确认结算？"
        :loading="waitingAjax" :disabled="waitingAjax" @submit="submit()" />
    </div>
  </contentDialogWithoutButton>
</template>

<script>
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { storage } from 'src/config/storageConfig';
import globalSelect from 'src/components/global/select';
import submitBtnPopover from 'src/components/global/submitBtnPopover';
import contentDialogWithoutButton from 'src/components/global/content-dialog-without-button';
import 'src/style/settlement-dialog.scss';

  export default {
    name: '',
    data() {
      return {
        settlementBoard: [
          {
            value: 'ORDINARY',
            label: '普通局'
          },
          {
            value: 'AOMAHA',
            label: '奥马哈'
          }
        ],
        safeOptions: [
          {
            value: 'YES',
            label: '有保险'
          },
          {
            value: 'NO',
            label: '无保险'
          }
        ],
        remark: '', // 备注

        waitingAjax: false,
      };
    },
    computed: {
      /*  parent  */
      settleDialogReadOnly() { return this.$parent.settleDialogReadOnly; },
      openingBeginSettleDialog() { return this.$parent.openingBeginSettleDialog; },
      beginSettleData() { return this.$parent.beginSettleData; },
      chooseOne() {
        if (!this.beginSettleData || !this.beginSettleData.handleResultData) {
          return {
            personSettles: [
              {
                actlyIncm: '',
                bring: '',
                canEdit: '',
                income: '',
                more: '',
                name: '',
                nickName: '',
                queueStatus: '',
                queueStatusId: '',
                tableFee: '',
                uniqueId: '',
                userId: '',
                userName: '',
                userNickName: ''
              }
            ],
            table: {
              haveSafe: 'NO', // 保险
              safeMoney: '', // 保险金额
            },
            remark: '' // 备注
          };
        }
        return JSON.parse(this.beginSettleData.handleResultData);
      },
      tableTime() {
        if (!this.chooseOne.boardEndtime) { return ''; }
        return this.chooseOne.boardEndtime.split('+')[0].replace('T', ' ');
      },
      chooseSettlementDetailImg() {
        const number = this.beginSettleData.picFileId;
        if (process.env.NODE_ENV === 'development') {
          return 'http://dev.clubcs.royalnu.com' + number;
        }
        return number;
      },
      settlementSum() {
        let sum = 0;
        const personSettles = this.chooseOne.personSettles;
        if (!personSettles || !personSettles.length) {
          return 0;
        }
        const safeMoney = parseInt(this.chooseOne.table.safeMoney, 0);
        if (safeMoney && this.chooseOne.table.haveSafe  === 'YES') { // 有保险才算
          sum += safeMoney;
        }
        for (let i = personSettles.length; i--;) {
          const number = parseInt(personSettles[i].income, 0);
          if (!isNaN(number)) {
            sum += number;
          } else {
            sum = '结算列表存在非数字';
            break;
          }
        }
        return sum;
      }
    },
    methods: {
      judgeRiseDown(val) {
        const num = parseInt(val, 0);
        return num > 0;
      },
      showQueueStatus(status) {
        if (status === 'ING') {
          return '未结算';
        } else if (status === 'HALFWAY_END') {
          return '已结算';
        } else if (status === 'APPLY_END') {
          return '未结算';
        } else if (status === 'END') {
          return '已结算';
        }
        return '请选择上码登记记录';
      },
      close() {
        this.remark = '';
        this.$parent.toggleOpeningBeginSettleDialog(false);
      },
      /*  申请重新识别  */
      reDo() {
        const vm = this;
        const param = {
          boardApplyId: vm.beginSettleData.id,
        };
        notifyAjaxWithoutAction({
          vm, param, url: getUri('apply_redo_settle'), method: 'post', handle: '重新数码识别',
          before() { vm.waitingAjax = true; },
          success(res) {
            storage.set('board_apply_id', vm.beginSettleData.id, null, 'sessionStorage');
            /*  等待人工结算  */
            storage.set('queuing_apply_check', 0, null, 'sessionStorage');
            vm.$parent.toggleOpeningBeginSettleDialog(false);
            vm.$parent.toggleOpeningApplyDialog(true);
            vm.$parent.toGetResults();
          },
          after() { vm.waitingAjax = false; }
        });
      },
      submit() {
        const vm = this;
        const param = {
          boardApplyId: vm.beginSettleData.id,
          boardRemark: vm.remark
        };
        notifyAjaxWithoutAction({
          vm, param, url: getUri('apply_queue_settle'), method: 'post', handle: '开始结算',
          before() { vm.waitingAjax = true; },
          success(res) {
            vm.close();
            vm.$parent.toGetResults();
          },
          after() { vm.waitingAjax = false; }
        });
      }
    },
    components: {
      contentDialogWithoutButton,
      submitBtnPopover,
      globalSelect
    },
  };
</script>

<style lang="scss">
.queuing-operation-result-begin-settle__dialog {
  .el-dialog--full {
    background-color: #f6f8f9;
    .el-dialog__body {
      overflow-x: auto;
    }
  }
  .content {
    width: 1010px;
    margin: 0 auto;
    overflow: hidden;
    .left {
      box-sizing: border-box;
      width: 500px;
      margin-right: 10px;
      float: left;
      img {
        display: block;
        width: 100%;
      }
    }
    .right {
      box-sizing: border-box;
      width: 500px;
      float: left;
      background-color: #fff;
      padding: 5px;
      border: 1px solid #f6f8f9;
      .important-info {
        color: #3c454b;
        font-weight: 600;
      }
      .not-so-much-info {
        color: #a9a9a9;
      }
      .top {
        padding-top: 244px;
        height: 40px;
      }
      .person-table {
        border-collapse: collapse;
        td,th {
          box-sizing: border-box;
          border: 1px solid #e9f2fd;
          height: 75px;
          padding: 0 10px;
          font-size: 13px;
        }
        .rise-price {
          .el-input__inner {
            color: #d03836;
          }
        }
        .down-price {
          .el-input__inner {
            color: #1f630c;
          }
        }
        .safe-title {
          color: #dba515;
        }
      }
      .remark-wrap {
        $leftWidth: 212px;
        position: relative;
        margin-top: 8px;
        padding: 10px 0 10px $leftWidth;
        border-top: 1px solid #fde9ea;
        border-bottom: 1px solid #fde9ea;
        .left-title {
          float: left;
          padding-left: 10px;
          margin-left: -$leftWidth;
          width: $leftWidth;
          line-height: 34px;
        }
        .remark-content {
          padding-left: 10px;
          border-left: 1px solid #fde9ea;
          p {
            line-height: 34px;
          }
        }
      }
    }
  }
  .footer {
    padding: 30px 0;
    text-align: center;
    .close-button {
      width: 120px;
      text-align: center;
      background-color: #b6c2c9;
      color: #fff;
      margin-right: 15px;
    }
    .submit-button {
      min-width: 120px;
      margin-right: 15px;
      text-align: center;
      background-color: #ffb230;
      color: #fff;
      border: 1px solid #ffb230;
    }
  }
}
</style>
