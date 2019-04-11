<style lang="scss">
$textarea-padding-right: 15px;

.list-preview {
  position: relative;
  z-index: 1;

  .sort-wrap {
    height: 28px;
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 8px;
    margin-bottom: 10px;
    border-bottom: 1px solid $color-gray-light;

    span {
      line-height: 20px;
    }

    .el-switch {
      margin-bottom: 0 !important;
      float: right;
    }
  }

  .content-wrap {
    position: relative;
    margin-bottom: 46px;
  }

  .shim,
  textarea {
    width: 100%;
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0;
    padding-left: 15px;
    padding-right: 15px;
    @extend %breakWord;
  }

  .shim {
    height: auto;
    position: relative;
    visibility: hidden;
    white-space: pre-wrap;
    min-height: 300px;
  }

  textarea {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    overflow-y: auto;
    border: none;
    resize: none;
    color: #333;
  }

  .footer {
    position: absolute;
    width: 100%;
    height: $preview-footer-height;
    line-height: $preview-footer-height;
    padding-right: $textarea-padding-right;
    left: 0;
    bottom: 0;
    text-align: right;
  }
}
</style>

<template>
  <div class="list-preview">
    <div class="sort-wrap">
      <span>顺序：{{ sort ? '有序' : '无序' }}</span>
      <el-switch v-model="sort"/>
    </div>
    <div class="content-wrap">
      <pre
        class="shim"
        v-html="item.text"
      />
      <textarea
        v-model.trim="text"
        class="focus-textarea mousetrap"
        placeholder="添加文字列表，回车分割"
        @focus="textAreaFocus"
      />
    </div>
    <!--
    <div class="footer">
      <el-button
        :loading="saving"
        size="small"
        type="primary"
        round
        class="save-btn"
        @click="emitSave"
      >保存</el-button>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: 'ListPreview',
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      saving: false
    }
  },
  computed: {
    text: {
      get() {
        return this.item.text.replace(/<br>/g, '\n')
      },
      set(value) {
        this.$store.commit('editor/UPDATE_SECTION_TEXT', {
          value
        })
      }
    },
    sort: {
      get() {
        return this.item.sort === '1'
      },
      set(value) {
        this.$store.commit('editor/UPDATE_SECTION_SORT', {
          value: value ? '1' : '0'
        })
      }
    }
  },
  mounted() {
    this.$channel.$on('write-save-done', () => {
      this.saving = false
    })
  },
  methods: {
    textAreaFocus() {
      if (this.text.length < 100) {
        document.body.scrollTop = 0
      }
    },
    emitSave() {
      if (!this.text.replace(/\n/g, '')) {
        return
      }
      this.$channel.$emit('write-save')
      this.saving = true
    }
  }
}
</script>
