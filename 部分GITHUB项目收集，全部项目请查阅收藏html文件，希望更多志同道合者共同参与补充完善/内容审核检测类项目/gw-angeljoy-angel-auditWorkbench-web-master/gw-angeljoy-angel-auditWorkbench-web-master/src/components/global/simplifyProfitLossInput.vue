<template>
  <div class="global-simplify-profit-loss-input"
       :class="status === 'loss' ? 'global-profit-loss-input__green' : 'global-profit-loss-input__red'">
    <!--<el-radio-group-->
      <!--class="global-profit-loss-input__select"-->
      <!--:disabled="disabled" v-model="status">-->
      <!--<el-radio-button class="profit" label="profit">-->
        <!--<i class="iconfont icon-jiahao"></i>-->
      <!--</el-radio-button>-->
      <!--<el-radio-button class="loss" label="loss">-->
        <!--<i class="iconfont icon-jianhao"></i>-->
      <!--</el-radio-button>-->
    <!--</el-radio-group>-->
    <div :class="{ 'disabled': disabled }" class="button-wrap">
      <img @click="changeStatus('profit')" :src="status === 'profit' ? plusRed : plusWhite" alt="">
      <img @click="changeStatus('loss')" :src="status === 'loss' ? minusGreen : minusWhite" alt="">
    </div>
    <div class="el-input">
      <input
        style="outline: none" :disabled="disabled"
        :class="{ 'disabled': disabled }"
        type="text" class="el-input__inner absolute-input"
        :value="absoluteVal" @input="inputHandler" />
    </div>
  </div>
</template>

<script>
import plusWhite from 'src/assets/img/plus0@3x.png';
import plusRed from 'src/assets/img/plus1@3x.png';
import minusWhite from 'src/assets/img/minus0@3x.png';
import minusGreen from 'src/assets/img/minus1@3x.png';

export default {
  props: {
    value: null,
    id: null,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      plusWhite, // 图片资源
      plusRed,
      minusWhite,
      minusGreen,

      absoluteVal: '', // 绝对值
      status: '' // profit || loss
    };
  },
  watch: {
    value() {
      this.setData();
    },
  },
  /**
   * events:
   *    changeStatus(status)
   *      @param: status ${String}
   *
   *      input(val) -> v-model
   * */
  methods: {
    /*  根据父级value设置组件data  */
    setData() {
      const vm = this;
      const valueToNum = parseInt(vm.value, 0);
      /*  非数字  */
      if (!valueToNum && valueToNum !== 0) {
        vm.absoluteVal = '';
        vm.status = '';
        return;
      }
      if (valueToNum === 0) {
        vm.absoluteVal = 0;
        vm.status = '';
        return;
      }
      vm.absoluteVal = Math.abs(valueToNum);
      const status = vm.status;
      if (valueToNum >= 0 && status !== 'profit') { // 盈利
        vm.status = 'profit';
      } else if (valueToNum < 0 && status !== 'loss') { // 亏损
        vm.status = 'loss';
      }
    },
    /*  更改符号  */
    changeStatus(status) {
      if (this.disabled) return;
      this.status = status;
      this.$emit('changeStatus', status, this.id);
    },
    /*  处理输入  */
    inputHandler(event) {
      const vm = this;
      const status = vm.status;
      const target = event.target;
      target.value = target.value.replace(/[^\d]/g, '');
      const inputValToNum = target.value;
      if (!inputValToNum) { // 空
        vm.absoluteVal = '';
        vm.status = '';
        vm.$emit('input', '');
        return;
      }
      vm.absoluteVal = parseInt(inputValToNum, 0);
      vm.$emit('input', status === 'loss' ? -1 * vm.absoluteVal : vm.absoluteVal);
      if (!status) vm.status = 'profit';
    },
  },
  created() {
    this.setData();
  }
};
</script>

<style lang="scss">
$pl: 58px;
.global-simplify-profit-loss-input {
  box-sizing: border-box;
  display: inline-block;
  padding-left: $pl;
  .el-input-group {
    width: 200px;
  }
  &.global-profit-loss-input__red {
    .el-input__inner {
      color: #d03836;
      /*border-color: #ff4949;*/
    }
  }
  &.global-profit-loss-input__green {
    .el-input__inner {
      color: #1f630c;
      /*border-color: #13ce66;*/
    }
  }
  .button-wrap {
    float: left;
    margin-left: -$pl;
    width: $pl;
    &.disabled {
      > img {
        cursor: not-allowed;
      }
    }
    > img {
      cursor: pointer;
      position: relative;
      top: 6px;
      width: 24px;
    }
  }
  .global-profit-loss-input__select {
    float: left;
    margin-left: -$pl;
    width: $pl;
    .el-radio-button__inner {
      padding: 10px 8px;
    }
    .el-radio-button {
      .iconfont {
        font-size: 12px;
        font-weight: 600;
        color: #838f9c;
      }
      &.profit {
        $profitColor: #d03836;
        .el-radio-button__orig-radio:checked+.el-radio-button__inner {
          background-color: $profitColor;
          border-color: $profitColor;
          box-shadow: -1px 0 0 0 $profitColor;
          .iconfont {
            color: #fff;
          }
          &:hover {
            background-color: $profitColor;
            border-color: $profitColor;
            box-shadow: -1px 0 0 0 $profitColor;
          }
          &:active {
            background-color: $profitColor;
            border-color: $profitColor;
            box-shadow: -1px 0 0 0 $profitColor;
          }
          &:focus {
            background-color: $profitColor;
            border-color: $profitColor;
            box-shadow: -1px 0 0 0 $profitColor;
          }
        }
      }
      &.loss {
        $lossColor: #1f630c;
        .el-radio-button__orig-radio:checked+.el-radio-button__inner {
          background-color: $lossColor;
          border-color: $lossColor;
          box-shadow: -1px 0 0 0 $lossColor;
          .iconfont {
            color: #fff;
          }
          &:hover {
            background-color: $lossColor;
            border-color: $lossColor;
            box-shadow: -1px 0 0 0 $lossColor;
          }
          &:active {
            background-color: $lossColor;
            border-color: $lossColor;
            box-shadow: -1px 0 0 0 $lossColor;
          }
          &:focus {
            background-color: $lossColor;
            border-color: $lossColor;
            box-shadow: -1px 0 0 0 $lossColor;
          }
        }
      }
    }
  }
  .absolute-input {
    &.disabled {
      background-color: #eef1f6;
      cursor: not-allowed;
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
