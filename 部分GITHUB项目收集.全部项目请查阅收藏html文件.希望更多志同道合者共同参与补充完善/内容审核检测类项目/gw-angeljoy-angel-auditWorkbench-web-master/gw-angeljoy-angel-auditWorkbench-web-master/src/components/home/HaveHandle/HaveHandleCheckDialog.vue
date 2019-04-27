<template>
  <contentDialogWithoutButton
    ref="settlementDetailDialog" title="查看" :hiddenCancel="true"
    class="begin-settle-begin__dialog"
    :visible="openingCheckDialog" :waitingAjax="waitingAjax"
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
              <p>{{chooseOne.table.safeMoney}}</p>
            </td>
            <!--<td width="60">-->
            <!--</td>-->
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
              <p>{{chooseOne.personSettles[index].income}}</p>
            </td>
            <!--<td width="60"></td>-->
          </tr>
        </table>
        <div style="padding-left: 243px;" class="remark-wrap">
          <div class="left-title">
            <p class="important-info">合计：</p>
            <!--<p class="not-so-much-info">备注：</p>-->
          </div>
          <div class="remark-content">
            <p class="important-info">{{ settlementSum }}</p>
            <!--<el-input class="not-so-much-info"-->
                      <!--v-model="remark"-->
                      <!--type="textarea" :autosize="{ minRows: 1, maxRows: 2 }" />-->
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
  <!--<contentDialogWithoutButton ref="settlementDetailDialog" title="开始结算" :hiddenCancel="true"-->
                              <!--class="getting-settlement-detail-dialog "-->
                              <!--:visible="openingCheckDialog" :waitingAjax="waitingAjax"-->
                              <!--@close="close()">-->
    <!--<div class="dialog-body">-->
      <!--<el-row type="flex" justify="space-between">-->
        <!--<el-col :span="12">-->
          <!--<div class="img-box">-->
            <!--<img :src="chooseSettlementDetailImg" alt="img" class="settlement-img">-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--<div class="img-text">-->
            <!--<div style="padding-top: 220px;"></div>-->
            <!--<el-row>-->
              <!--<table>-->
                <!--<colgroup>-->
                  <!--<col width="250" />-->
                  <!--<col width="80" />-->
                  <!--<col width="80" />-->
                  <!--<col width="50" />-->
                <!--</colgroup>-->
                <!--<tbody>-->
                <!--<tr class="safe-pool-tr">-->
                  <!--<td>保险池</td>-->
                  <!--<td class="table-income" colspan="3" :class=" chooseOne.insuranceStatus === 'YES' ? 'rise-price' : 'down-price'">-->
                    <!--{{chooseOne.insurancePool}}-->
                  <!--</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<td>客户账号</td>-->
                  <!--<td>局中盈亏</td>-->
                  <!--<td>实际盈亏</td>-->
                  <!--<td>多出</td>-->
                <!--</tr>-->
                <!--<tr v-for="(entry, index) in chooseOne.personSettles"-->
                    <!--class="table-container person-tr" :key="index">-->
                  <!--<td class="user-info">-->
                    <!--&lt;!&ndash; <p>天使生活账号:{{ entry.account }}</p> &ndash;&gt;-->
                    <!--<p>-->
                      <!--天使生活账号：{{entry.uniqueId }}-->
                    <!--</p>-->
                    <!--<p>-->
                      <!--名字：{{entry.userName}}-->
                    <!--</p>-->
                    <!--<p>游戏昵称：{{ entry.nickName }}</p>-->
                    <!--<p>带入{{ entry.bring }}</p>-->

                  <!--</td>-->
                  <!--<td class="table-income" :class="judgeRiseDown(entry.income) ? 'rise-price' : 'down-price'">-->
                    <!--{{ entry.income }}-->
                  <!--</td>-->
                  <!--<td class="table-income" :class="judgeRiseDown(entry.actualProfitLoss) ? 'rise-price' : 'down-price'">-->
                    <!--{{entry.actualProfitLoss}}-->
                  <!--</td>-->
                  <!--<td>-->
                    <!--{{entry.userMore}}-->
                  <!--</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<td>合计</td>-->
                  <!--<td class="table-income">-->
                    <!--{{settlementSum}}-->
                  <!--</td>-->
                  <!--<td>-->
                  <!--</td>-->
                  <!--<td>-->
                    <!--{{chooseOne.totalMore}}-->
                  <!--</td>-->
                <!--</tr>-->
                <!--</tbody>-->
              <!--</table>-->
            <!--</el-row>-->
          <!--</div>-->
          <!--<div style="height: 20px;"></div>-->
          <!--<el-row>-->
            <!--<el-col :span="3">备注</el-col>-->
            <!--<el-col :span="21">-->
              <!--<el-input v-model="remark" :readonly="settleDialogReadOnly" />-->
            <!--</el-col>-->
          <!--</el-row>-->
        <!--</el-col>-->
      <!--</el-row>-->
    <!--</div>-->
    <!--<div slot="footer" style="text-align: center">-->
      <!--<el-button-->
        <!--v-show="settleDialogReadOnly"-->
        <!--type="primary" @click="close()">确 认</el-button>-->
      <!--<el-button-->
        <!--v-show="!settleDialogReadOnly"-->
        <!--:disabled="waitingAjax" @click="close()">取 消</el-button>-->
      <!--<submitBtnPopover-->
        <!--v-show="!settleDialogReadOnly"-->
        <!--type="primary" btnMsg="数据有误，申请重新数码识别"-->
        <!--confirmMsg="确认重新数码识别？"-->
        <!--:loading="waitingAjax" :disabled="waitingAjax" @submit="reDo()" />-->
      <!--<submitBtnPopover-->
        <!--v-show="!settleDialogReadOnly"-->
        <!--type="primary" btnMsg="开始结算" confirmMsg="确认结算？"-->
        <!--:loading="waitingAjax" :disabled="waitingAjax" @submit="submit()" />-->
    <!--</div>-->
  <!--</contentDialogWithoutButton>-->

</template>

<script>
import 'src/style/begin-settle-begin__dialog.scss';
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';
import { storage } from 'src/config/storageConfig';
import globalSelect from 'src/components/global/select';
import submitBtnPopover from 'src/components/global/submitBtnPopover';
import contentDialogWithoutButton from 'src/components/global/content-dialog-without-button';

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
        settleDialogReadOnly: true,

        waitingAjax: false,
      };
    },
    computed: {
      /*  parent  */
      openingCheckDialog() { return this.$parent.openingCheckDialog; },
      chooseResult() { return this.$parent.chooseResult; },
      chooseOne() {
        if (!this.chooseResult || !this.chooseResult.handleResultData) {
          return {
            table: {
              haveSafe: 'NO'
            }
          };
        }
        return JSON.parse(this.chooseResult.handleResultData);
      },
      chooseSettlementDetailImg() {
        const number = this.chooseResult.picFileId;
        if (process.env.NODE_ENV === 'development') {
          return 'http://dev.clubcs.royalnu.com' + number;
        }
        return number;
      },
      settlementSum() {
        let sum = 0;
        const personSettles = this.chooseOne.personList;
        if (!personSettles || !personSettles.length) {
          return 0;
        }
        const safeMoney = parseInt(this.chooseOne.insurancePool, 0);
        if (safeMoney && this.chooseOne.insuranceStatus  === 'YES') { // 有保险才算
          sum += safeMoney;
        }
        for (let i = personSettles.length; i--;) {
          const number = parseInt(personSettles[i].boardProfitLoss, 0);
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
        return num >= 0;
      },
      close() {
        this.remark = '';
        this.$parent.toggleOpeningCheckDialog(false);
      },
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
            vm.close();
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
    mounted() {
//    this.$refs.settlementDetailDialog.$el.querySelector('.el-dialog--small').style.top = '40px';
    },
    components: {
      contentDialogWithoutButton,
      submitBtnPopover,
      globalSelect
    }
  };
</script>

<style lang="scss">
  .img-box {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 14px;
    > img {
      width: 100%;
    }
  }
  .getting-settlement-detail-dialog .dialog-body .img-text .safe-pool-tr {
    height: 50px;
  }
  .getting-settlement-detail-dialog .dialog-body .img-text .mb65 {
    margin-bottom: 30px;
  }
  .getting-settlement-detail-dialog .dialog-body .img-text td {
    height: 45px;
  }
  .rise-price { color: #ff4949; }
  .down-price { color: #13ce66; }

</style>
