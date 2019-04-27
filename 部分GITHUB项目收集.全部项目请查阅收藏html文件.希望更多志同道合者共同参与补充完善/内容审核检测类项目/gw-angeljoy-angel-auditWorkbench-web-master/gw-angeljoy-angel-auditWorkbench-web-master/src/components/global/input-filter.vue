<template>
  <form class="global_input-filter-bar" @submit.prevent="submit">
    <div :class="{hidden: hidden1}">
      <span>{{label1}}：</span>
      <el-input :value="value1" @change="change1" class="input" :placeholder="placeholder1"></el-input>
    </div>
    <div :class="{hidden: hidden2}">
      <span>{{label2}}：</span>
      <el-input :value="value2" @change="change2" class="input" :placeholder="placeholder2"></el-input>
    </div>
    <div style="text-align: right">
      <el-button native-type="submit" size="small" type="primary"
                 :loading="waitingAjax" :disabled="waitingAjax">&nbsp;&nbsp;搜索&nbsp;&nbsp;</el-button>
      <el-button @click="clear" size="small">&nbsp;&nbsp;清除条件&nbsp;&nbsp;</el-button>
    </div>
  </form>
</template>

<script>
export default {
  name: '',
  props: {
    label1: String, // ---左侧label
    value1: null, // ---绑定值
    placeholder1: {
      type: String,
      default: '',
    },
    hidden1: {// ---隐藏flag
      type: Boolean,
      default: false,
    },
    label2: String,
    value2: null,
    placeholder2: {
      type: String,
      default: '',
    },
    hidden2: {
      type: Boolean,
      default: false,
    },
    waitingAjax: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // events : 一定要接收change 1/2事件，，并赋值val
    change1(val) { this.$emit('change1', val); }, // ---input change 事件
    change2(val) { this.$emit('change2', val); },
    submit() {
      this.$emit('submit');
    },
    clear() { this.$emit('clear'); }, // ---清除按钮
  }
};
</script>

<style lang="scss">
  // common class ---begin
  .borderBox{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .global_input-filter-bar{
    @extend .borderBox;
    width: 100%;
    display: table;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    > div {
      position: relative;
      display: table-cell;
      padding: 15px 15px 15px 70px;
      &.hidden{
        visibility: hidden;
      }
      > span{
        position: absolute;
        top: 15px;
        left: 5px;
        width: 60px;
        display: inline-block;
        font-size: 12px;
        line-height: 35px;
        text-align: right;
      }
      > .input{
        font-size: 12px;
      }
    }
  }


</style>

