<template>
  <div class="sub-header">
    <span class="sub-title">{{ subHeader }}</span>
    <span class="btn-group">
      <el-button
        v-if="hasBtn2"
        class="sub-button"
        type="primary"
        @click.native.stop="clickBtn2">{{ btnName2 }}</el-button>
      <el-button
         v-if="hasBtn1"
         class="sub-button"
         type="primary"
         @click.native.stop="clickBtn1">{{ btnName1 }}</el-button>
    </span>
  </div>
</template>

<style>
  .sub-header {
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
  }

  .btn-group {
    float: right;
    margin-top: -10px;
  }

  .sub-button {
    right: 20px;
    min-width: 100px;
  }
</style>

<script>
export default {
  props: {
    subHeader: String,
    hasBtn1: Boolean,
    btnName1: String,
    clickBtn1: Function,
    hasBtn2: Boolean,
    btnName2: String,
    clickBtn2: Function,
  },

  data() {
    return {
    };
  }
};
</script>
