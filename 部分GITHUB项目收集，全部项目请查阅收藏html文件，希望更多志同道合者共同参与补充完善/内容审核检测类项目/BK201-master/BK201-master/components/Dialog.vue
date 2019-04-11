<style lang="scss" module>
.container {
  overflow: hidden;

  .header {
    position: relative;
    padding: 20px;
    height: 65px;
    border-bottom: 1px solid #e5e5e5;

    .title {
      font-weight: 700;
      font-size: 17px;
      line-height: 24px;
      color: #333;
    }
  }

  .close {
    position: absolute;
    right: 20px;
    top: 20px;
    font-weight: 200;
    font-size: 26px;
    opacity: 0.2;
    height: 24px;
    line-height: 24px;
    color: #000;

    &:hover {
      opacity: 0.5;
    }
  }

  .content {
    padding: 20px;
    overflow-y: auto;

    .loading,
    .no-more {
      text-align: center;
      font-size: 13px;
      margin-top: 20px;
      cursor: default;
    }

    img {
      max-width: 100%;
    }
  }

  .footer {
    margin: 20px 0;
    padding: 0 20px;
    text-align: right;

    .cancel {
      height: 28px;
      font-size: 13px;
      color: #6d757a;

      &:hover {
        color: #333333;
      }
    }

    .submit {
      height: 28px;
      margin-left: 30px;
      padding: 0 12px;
      border-radius: 20px;
      font-size: 13px;
      line-height: 26px;
      border: 1px solid;
    }
  }
}
</style>

<template>
  <el-dialog
    :width="width"
    :custom-class="customClass"
    :append-to-body="true"
    :show-close="false"
    :visible.sync="dialogVisible"
    :before-close="beforeClose"
    :fullscreen="fullscreen"
    :close-on-click-modal="clickClose"
    :close-on-press-escape="clickClose"
  >
    <section :class="$style.container">
      <header
        v-if="header"
        slot="header"
        :class="$style.header"
      >
        <slot name="title">
          <h4
            :class="$style.title"
            v-text="title"
          />
        </slot>
      </header>
      <button
        v-if="!clickClose || close"
        :class="$style.close"
        @click="cancel"
      >&times;</button>
      <main
        :style="computeDialogHeight"
        :class="$style.content"
        @scroll="handleScroll"
      >
        <template v-if="scroll">
          <ul ref="ul">
            <slot/>
          </ul>
          <slot
            v-if="loading"
            :class="$style.loading"
            name="loading"
          >
            <p :class="$style.loading">加载中...</p>
          </slot>
          <slot
            v-else-if="noMore"
            :class="$style.noMore"
            name="nomore"
          >
            <p :class="$style.noMore">没有更多了</p>
          </slot>
        </template>
        <slot v-else/>
      </main>
      <footer
        v-if="footer"
        :class="$style.footer"
      >
        <slot name="footer">
          <button
            v-if="cancelText"
            :class="$style.cancel"
            @click="cancel"
            v-text="cancelText"
          />
          <button
            :loading="loading"
            :class="[$style.submit, `btn-${theme}`]"
            @click="submit"
            v-text="submitText"
          />
        </slot>
      </footer>
    </section>
  </el-dialog>
</template>

<script>
import { Dialog } from 'element-ui'

export default {
  name: 'VDialog',
  components: {
    'el-dialog': Dialog
  },
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
    },
    customClass: {
      type: String,
      default: ''
    },
    close: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '720px'
    },
    height: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '提示'
    },
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    },
    submitText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    scroll: {
      type: Function,
      default: null
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    noMore: {
      type: Boolean,
      default: false
    },
    clickClose: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      validator: val => ~['success', 'danger'].indexOf(val),
      default: 'success'
    }
  },
  data() {
    return {
      dialogVisible: this.value
    }
  },
  computed: {
    computeDialogHeight() {
      if (this.height) {
        return {
          height: this.height
        }
      }
      if (this.scroll) {
        return {
          height: '600px'
        }
      }
      return {
        height: 'auto'
      }
    }
  },
  mounted() {
    this.$watch('value', val => {
      this.dialogVisible = val
      window.__closeImageLazy__ = val
    })
    this.$watch('dialogVisible', val => {
      this.$emit('input', val)
      window.__closeImageLazy__ = val
    })
  },
  methods: {
    beforeClose(done) {
      done()
      this.$emit('cancel')
      this.dialogVisible = false
    },
    cancel() {
      this.$emit('cancel')
      this.dialogVisible = false
    },
    submit() {
      this.$emit('submit')
    },
    handleScroll(evt) {
      if (!this.scroll || this.loading || this.noMore) {
        return
      }
      const ul = this.$refs.ul
      if (!ul) {
        return
      }
      const main = evt.currentTarget || evt.target
      if (
        this.$refs.ul.clientHeight - main.clientHeight - main.scrollTop <
        30
      ) {
        this.scroll()
      }
    }
  }
}
</script>
