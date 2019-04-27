<style lang="scss">
$textarea-padding-right: 15px;

.text-preview {
  height: 100%;
  position: relative;
  padding-bottom: $preview-footer-height;

  .text-area {
    position: relative;
    height: 100%;
    z-index: 1;

    .shim,
    textarea {
      background-color: transparent;
      display: block;
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 0;
      border-radius: 4px;
      @extend %breakWord;
    }

    .shim {
      height: auto;
      position: relative;
      visibility: hidden;
      min-height: 100%;
    }

    textarea {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      overflow-y: auto;
      border: none;
      resize: none;
      padding-right: $textarea-padding-right;
      color: #333;
    }
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
  <div class="text-preview">
    <div class="text-area">
      <textarea
        v-model.trim="text"
        class="focus-textarea mousetrap"
        placeholder="添加文字内容"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TxtPreview',
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
          value: value.replace(/\n/g, '<br>')
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
