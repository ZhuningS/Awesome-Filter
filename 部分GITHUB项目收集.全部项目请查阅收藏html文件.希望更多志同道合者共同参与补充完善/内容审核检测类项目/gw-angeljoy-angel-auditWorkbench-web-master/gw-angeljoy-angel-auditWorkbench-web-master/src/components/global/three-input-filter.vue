<template>
<div class="global-three-input-filter">
  <form class="global-three-input-filter__form" @submit.prevent="submit()">
    <div class="cell" v-show="show1">
      <span>{{ label1 }}</span>
      <el-input :value="value1" @input="input1"
                class="input" :placeholder="placeholder1" />
    </div>
    <div class="cell" v-show="show2">
      <span>{{ label2 }}</span>
      <el-input :value="value2" @input="input2"
                class="input" :placeholder="placeholder2" />
    </div>
    <div class="cell" v-show="show3">
      <span>{{ label3 }}</span>
      <el-input :value="value3" @input="input3"
                class="input" :placeholder="placeholder3" />
    </div>
    <div class="cell" style="text-align: right;width: 170px;padding-left: 10px;">
      <el-button @click="submit()" type="primary">搜索</el-button>
      <el-button @click="clear()">清除条件</el-button>
    </div>
  </form>
  <p class="global-three-input-filter__tip" v-show="someTip">
    {{ someTip }}
  </p>
</div>
</template>

<script>

export default {
  props: {
    label1: null, label2: null, label3: null,
    value1: null, value2: null, value3: null,
    show1: { type: Boolean, default: true },
    show2: { type: Boolean, default: true },
    show3: { type: Boolean, default: true },
    placeholder1: { type: String, default: '' }, placeholder2: { type: String, default: '' }, placeholder3: { type: String, default: '' },
    someTip: {
      type: String,
      default: ''
    },
  },
  methods: {
    // event: @submit, @clear @input1,2,3
    input1(val) { this.$emit('input1', val); },
    input2(val) { this.$emit('input2', val); },
    input3(val) { this.$emit('input3', val); },

    submit() { this.$emit('submit'); },
    clear() { this.$emit('clear'); }
  },
};
</script>

<style lang="scss" scoped>
.global-three-input-filter {
  .global-three-input-filter__form {
    width: 100%;
    display: table;
    margin-top: 14px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    .el-button {
      padding: 8px 10px;
    }
    .cell {
      position: relative;
      display: table-cell;
      padding: 15px 15px 15px 70px;
      > span {
        position: absolute;
        top: 15px;
        left: 5px;
        width: 60px;
        display: inline-block;
        font-size: 12px;
        line-height: 35px;
        text-align: right;
      }
      > .input {
        font-size: 12px;
      }
    }
  }
  .global-three-input-filter__tip {
    padding-top: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #ff4949;
  }
}
</style>
