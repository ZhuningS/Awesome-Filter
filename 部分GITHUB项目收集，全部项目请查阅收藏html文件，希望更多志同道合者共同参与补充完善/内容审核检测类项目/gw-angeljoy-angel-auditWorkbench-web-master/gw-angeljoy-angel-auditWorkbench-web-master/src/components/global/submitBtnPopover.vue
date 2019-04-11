<template>
  <div style="display: inline-block;">
    <el-popover
      ref="popover"
      placement="top-end"
      width="160"
      v-model="openingPopover">
      <p>{{confirmMsg}}</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="cancel()">取消</el-button>
        <el-button type="primary" size="mini" @click="submit()">确定</el-button>
      </div>
    </el-popover>
    <el-button :type="type"
               :loading="loading"
               :disabled="disabled"
               :class="btnClass"
               v-popover:popover>{{btnMsg}}</el-button>
  </div>
</template>

<script>

export default {
  props: {
    type: { // 按钮 样式
      type: String,
      default: ''
    },
    btnMsg: {
      type: String,
      default: '确 认'
    },
    confirmMsg: String,
    loading: {
      type: null,
      default: false
    },
    disabled: {
      type: null,
      default: false
    },
    btnClass: null
  },
  data() {
    return {
      openingPopover: false
    };
  },
  // event:  submit
  methods: {
    cancel() {
      this.openingPopover = false;
    },
    submit() {
      this.openingPopover = false;
      this.$emit('submit');
    }
  },
};
</script>
