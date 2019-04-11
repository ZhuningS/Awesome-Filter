<template>
<div class="global-profit-loss-input"
     :class="status === 'profit' ? 'global-profit-loss-input__red' : 'global-profit-loss-input__green'">
  <el-radio-group class="global-profit-loss-input__select"
                  v-model="status">
    <el-radio-button label="profit">盈利</el-radio-button>
    <el-radio-button label="loss">亏损</el-radio-button>
  </el-radio-group>
  <el-input ref="input" :value="value" @input="inputHandler">
    <template slot="prepend">
      &nbsp;
      <span class="red" v-show="status === 'profit'">+</span>
      <span class="green" v-show="status === 'loss'">—</span>
      &nbsp;
    </template>

  </el-input>
</div>

</template>

<script>

export default {
  props: {

    max: Number,
    min: Number,
    value: null
  },
  data() {
    return {
      status: 'profit'
    };
  },
  // events: @input -> v-model
  methods: {
    inputHandler(val) {
      let temVal = val;
      const temValNumber = parseInt(temVal, 0);
      if (this.status === 'profit') { // 盈利 (max)
        console.log(123);
      } else { // 亏损 (min)
        if (temValNumber && this.min && temValNumber > this.min) {
          this.$refs.input.$refs.input.value = this.min;
          /*  problem: 有空查看 element 应该存在@inpt 后 修改问题  */
          window.setTimeout(() => {
            this.$refs.input.$refs.input.value = this.min;
          }, 20);
          temVal = this.min;
        }
      }
      this.$emit('input', temVal);
    }
  }
};
</script>

<style lang="scss">
$pl: 120px;
.global-profit-loss-input {
  box-sizing: border-box;
  display: inline-block;
  padding-left: $pl;
  .el-input-group {
    width: 200px;
  }
  &.global-profit-loss-input__red {
    .el-input__inner {
      color: #ff4949;
    }
  }
  &.global-profit-loss-input__green {
    .el-input__inner {
      color: #13ce66;
    }
  }
  .global-profit-loss-input__select {
    float: left;
    margin-left: -$pl;
    width: $pl;
    .el-radio-button__orig-radio:checked+.el-radio-button__inner {
      background-color: #bb9002;
      border-color: #a06102;
      box-shadow: -1px 0 0 0 #a06102;
      &:hover {
        background-color: #bb9002;
        border-color: #a06102;
        box-shadow: -1px 0 0 0 #a06102;
      }
      &:active {
        background-color: #bb9002;
        border-color: #a06102;
        box-shadow: -1px 0 0 0 #a06102;
      }
      &:focus {
        background-color: #bb9002;
        border-color: #a06102;
        box-shadow: -1px 0 0 0 #a06102;
      }
    }
  }
  .red {
    font-weight: 600;
    color: #ff4949;
  }
  .green {
    font-weight: 600;
    color: #13ce66;
  }

}
</style>
