<template>
  <el-dialog :title="title"
             :visible="visible"
             @close="close()"
             :size="size"
             :close-on-click-modal="false"
             @visible-change="visibleChange">
    <slot></slot>
      <div slot="footer" class="dialog-footer">
        <el-button
          :disabled="waitingAjax"
          :class="{hidden: hiddenCancel}"
          @click="close()">取 消</el-button>
        <el-button
          :loading="waitingAjax" @click="submit"
          :disabled="waitingAjax || disabledConfirm"
          type="primary">{{waitingAjax ? '加载中' : confirmWord}}</el-button>
      </div>
    </el-dialog>
</template>

<script>
  export default {
    name: '',
    props: {
      title: String,
      visible: {
        type: Boolean,
        default: false,
      },
      hiddenCancel: {// ---隐藏 取消按钮
        type: Boolean,
        default: false,
      },
      waitingAjax: {
        type: Boolean,
        default: false,
      },
      confirmWord: {
        type: String,
        default: '确 认'
      },
      disabledConfirm: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'small'
      }
    },
    methods: {
      // events: close; submit
      visibleChange(val) {
        if (!val && this.visible) {
          this.$emit('close');
        }
      },
      close() {
        this.$emit('close');
      },
      submit() {
        this.$emit('submit');
      }
    }

  };
</script>

<style scoped>
  .hidden {
    display: none;
  }
</style>

