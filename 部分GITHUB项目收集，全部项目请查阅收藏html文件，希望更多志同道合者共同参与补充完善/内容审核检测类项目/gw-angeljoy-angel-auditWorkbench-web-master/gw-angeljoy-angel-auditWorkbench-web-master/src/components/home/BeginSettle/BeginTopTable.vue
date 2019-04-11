<template>
<div>
  <el-row class="mb40">
    <el-col :span="6" class="time-wrap">
      <el-date-picker
        v-model="table.time"
        type="datetime"
        placeholder="选择时间">
      </el-date-picker>
    </el-col>
    <el-col :span="5" :offset="1">
      <globalSelect v-model="table.tableType"
                    placeholder="请选择"
                    dictValue="GAMETYPE" />
    </el-col>
    <el-col :span="2" :offset="1">
      <globalSelect v-model="table.personNum"
                    dictValue="GAME_PERSION_NUM" />
    </el-col>
    <el-col :span="2">
                  <span style="display: inline-block; line-height: 30px;">
                    人桌
                  </span>
    </el-col>
    <el-col :span="5" :offset="1">
      <globalSelect v-model="table.haveSafe"
                    placeholder="请选择"
                    dictValue="INSURANCE" />
    </el-col>
  </el-row>
  <div class="title-bar">
    <el-input class="table-name" v-model="table.tableName" placeholder="请输入牌桌名称" />
  </div>
  <div class="title-bar">
    <el-col :span="4">牌局时长</el-col>
    <el-col :span="5">盲注</el-col>
    <el-col :span="5">前注</el-col>
    <el-col :span="5">总手数</el-col>
    <el-col :span="5">总带入</el-col>
  </div>
  <el-row class="mb85">
    <!--  牌局时长  -->
    <el-col :span="2">
      <globalSelect v-model="table.duration"
                    placeholder="牌局时长"
                    dictValue="GAME_DURATION" />
    </el-col>
    <el-col :span="2">
      <span style="display: inline-block;line-height: 36px;">小时</span>
    </el-col>
    <!--  盲注  -->
    <el-col :span="4">
      <globalSelect v-model="table.blind"
                    placeholder="盲注"
                    dictValue="GAME_BLIND" />
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
    <!--  前注  -->
    <el-col :span="4">
      <el-input v-model="table.front" />
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
    <!--  总手数  -->
    <el-col :span="4">
      <el-input v-model="table.totalHand" />
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
    <!--  总带入  -->
    <el-col :span="4">
      <el-input v-model="table.totalBring" />
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
  </el-row>
</div>

</template>

<script>
import globalSelect from 'src/components/global/select';

export default {
  data() {
     return {
       /* 结算table  */
       table: {
         duration: '', // 时长
         blind: '', // 盲注
         front: '', // 前注
         gameName: '',
         haveSafe: '', // 保险
         personNum: '', // 人数
         safeMoney: '-', // 保险池
         tableName: '', // 牌桌名称
         tableType: '', // 牌桌类型
         time: '', // 游戏时间
         totalBring: '', // 总带入
         totalHand: '', // 总手数
         totalMore: 0,
         totalTableFee: 0,
       }
     };
  },
  watch: {
    'table.haveSafe'(val) {
      this.$emit('changeHaveSage', val);
    }
  },
  computed: {
    queuingCheckData() { return this.$store.state.queuing.queuingCheckData; }
  },
  created() {
    const temObj = JSON.parse(JSON.stringify(this.queuingCheckData.table));
    temObj.time = temObj.time.split('+')[0];
    this.table = temObj;
  },

  components: {
    globalSelect
  }
};
</script>
