<template>
  <div class="el-input" :class="{ 'is-disabled' : disabled }">
    <input class="el-input__inner" type="text" :disabled="disabled"
           :value="vmValue" @input="fixNumber" :placeholder="placeholder">
  </div>
</template>

<script>

export default {
  props: {
    value: null,
    min: Number, // 最小值
    max: {
      type: Number,
      default: 10000000
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      vmValue: '',
    };
  },
  // event : @input  v-model @clear
  methods: {
    fixNumber(val) {
      val = typeof val === 'object' ? val.target.value : val;
      const lastStrToNum = parseInt(val.substr(-1), 0);
      if (val.length > 0 && !lastStrToNum && lastStrToNum !== 0) {
        this.vmValue = val.substr(0, val.length - 1);
        this.fixNumber(this.vmValue);
      } else {
        this.vmValue = parseInt(val, 0);
        if (!this.vmValue) {
          this.vmValue = '';
        } else if (typeof this.min !== 'undefined' && this.vmValue <= this.min) {
          this.vmValue = '';
        } else if (this.vmValue > this.max) {
          this.vmValue = this.max;
        }
      }
      this.$emit('input', this.vmValue);
    },
    clear() { // 清理
      this.vmValue = '';
    }
  }
};
</script>

<style>
  .global-number-input__disabled {
    cursor: not-allowed;
  }

</style>

