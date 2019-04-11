<template>
  <div>
    <table class="person-table" width="100%" border="1"
           cellpadding="0" cellspacing="0" style="table-layout:fixed">
      <!--  保险池  -->
      <tr v-show="haveSafe === 'YES'">
        <td class="safe-title" width="200">保险池</td>
        <td width="200"
            :class="judgeRiseDown(safeMoney) ? 'rise-price' : 'down-price'">
          <p>{{safeMoney}}</p>
        </td>
        <td width="60">
          <el-button @click="openSafePool()" type="text">修改</el-button>
        </td>
      </tr>
      <tr v-for="(item, index) in personSettles">
        <td class="user-info" width="200">
          <p class="important-info">游戏昵称：{{item.nickName}}</p>
          <p class="important-info">带入{{ item.bring }}</p>
          <p class="not-so-much-info">天使生活账号：{{item.uniqueId}}</p>
          <p class="not-so-much-info">名字：{{item.userName}}</p>
          <span class="match-tip" v-show="!item.uniqueId">
          <i class="el-icon-information"></i>
        </span>
        </td>
        <td class="table-income"
            width="200"
            :class="judgeRiseDown(item.income) ? 'rise-price' : 'down-price'">
          <p>{{personSettles[index].income}}</p>
        </td>
        <td class="sure" width="60">
          <el-button @click="openIncomeDialog(item)" type="text">修改</el-button>
          <span class="delete-player">
        <i @click="deletePerson(item)" class="iconfont icon-offline_fill"></i>
        </span>
        </td>
      </tr>
    </table>
    <div class="remark-wrap">
      <div class="left-title">
        <p style="font-size: 16px;" class="important-info">合计：</p>
        <!--<p class="not-so-much-info">备注：</p>-->
      </div>
      <div class="remark-content">
        <p class="important-info">{{ settlementSum }}</p>
        <span class="add-player">
        <i @click="addPerson()" class="iconfont icon-addition_fill"></i>
        </span>
      </div>
    </div>
  </div>
<!--<el-row class="home-begin-settle__person-table">-->
  <!--<table>-->
    <!--<colgroup>-->
      <!--<col width="400" />-->
      <!--<col width="50" />-->
      <!--<col width="100">-->
      <!--<col width="50" />-->
    <!--</colgroup>-->
    <!--<tbody>-->
    <!--&lt;!&ndash;  根据有无保显示此行  &ndash;&gt;-->
    <!--<tr class="safe-pool-tr" v-show="haveSafe === 'YES'">-->
      <!--<td>保险池</td>-->
      <!--<td class="table-income"-->
          <!--:class="judgeRiseDown(safeMoney) ? 'rise-price' : 'down-price'" >-->
        <!--{{ safeMoney }}-->
      <!--</td>-->
      <!--<td>-</td>-->
      <!--<td>-->
        <!--<el-button @click="openSafePool()" type="text">修改</el-button>-->
      <!--</td>-->
    <!--</tr>-->
    <!--<tr v-for="(entry, index) in personSettles"-->
        <!--class="table-container person-tr" :key="index">-->
      <!--<td class="user-info">-->
        <!--&lt;!&ndash; <p>天使生活账号:{{ entry.account }}</p> &ndash;&gt;-->
        <!--<p>-->
          <!--天使生活账号：{{entry.uniqueId}}-->
        <!--</p>-->
        <!--<p>名字：{{entry.userName}}</p>-->
        <!--<p>游戏昵称：{{ entry.nickName}}</p>-->
        <!--<p>带入{{ entry.bring }}</p>-->
        <!--<span class="match-tip" :span="6" :class="{'pass-user': (entry.uniqueId && entry.uniqueId > 0)}">-->
          <!--<i :class="(entry.uniqueId && entry.uniqueId > 0) ? '' : 'el-icon-information'"></i>-->
        <!--</span>-->
      <!--</td>-->
      <!--<td class="table-income" :class="judgeRiseDown(entry.income) ? 'rise-price' : 'down-price'">-->
        <!--{{ entry.income }}-->
      <!--</td>-->
      <!--<td class="sure">-->
        <!--<p>{{ showQueueStatus(entry.queueStatus) }}</p>-->
      <!--</td>-->
      <!--<td class="queuing-settle-begin__person-table">-->
        <!--<el-button @click="openIncomeDialog(entry)" type="text">-->
          <!--{{ entry.queueStatus ? '修改' : '选择' }}上码登记记录-->
        <!--</el-button>-->
        <!--<span class="delete-player">-->
          <!--<i @click="deletePerson(entry)" class="iconfont icon-offline_fill"></i>-->
        <!--</span>-->
        <!--&lt;!&ndash;<br>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-button @click="deletePerson(entry)" type="text">删除玩家</el-button>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-button @click="openRegisterDialog(entry)" type="text">选择登记信息</el-button>&ndash;&gt;-->
      <!--</td>-->
    <!--</tr>-->
    <!--<tr>-->
      <!--<td>合计</td>-->
      <!--<td class="table-income">-->
        <!--{{settlementSum}}-->
      <!--</td>-->
      <!--<td></td>-->
      <!--<td class="queuing-settle-begin__person-table">-->
        <!--<span class="add-player">-->
          <!--<i @click="addPerson()" class="iconfont icon-addition_fill"></i>-->
        <!--</span>-->
      <!--</td>-->
    <!--</tr>-->

    <!--</tbody>-->
  <!--</table>-->
<!--</el-row>-->
</template>

<script>

export default {
  props: {
    personSettles: null, // 玩家信息列表
    haveSafe: null, // 保险flag
    safeMoney: null, // 保险
  },
  computed: {
    /*  parent  */
    settlementSum() {
      let sum = 0;
      const personSettles = this.personSettles;
      if (!personSettles || !personSettles.length) {
        return 0;
      }
      const safeMoney = parseInt(this.safeMoney, 0);
      if (safeMoney && this.haveSafe === 'YES') { // 有保险才算
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
    judgeRiseDown(val) {
      const num = parseInt(val, 0);
      return num >= 0;
    },
    deletePerson(entry) {
      this.$emit('deletePersonSettle', entry.index);
    },
    addPerson() {
      this.$emit('addPersonSettle');
    },
    openSafePool() {
      this.$emit('openSafePool', true);
    },
    openIncomeDialog(entry) {
      this.$emit('openIncomeDialog', entry);
    },
    openRegisterDialog(entry) {
      this.$emit('openRegisterDialog', entry);
    }
  },
};
</script>
