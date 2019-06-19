<template>
  <el-dialog :title="title"
             :visible="visible"
             :size="size"
             :modal="modal"
             @close="close()"
             :close-on-click-modal="false"
             @visible-change="visibleChange">
    <slot></slot>
    <div slot="footer" class="dialog-footer">
      <slot name="footer"></slot>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    title: String,
    visible: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'small'
    },
    modal: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // events: close
    visibleChange(val) {
      if (!val && this.visible) {
        this.$emit('close');
      }
    },
    close() {
      this.$emit('close');
    },
  }
};
</script>
