<style lang="scss">
.text-preview {
  position: relative;
  z-index: 1;

  .use-area {
    margin-left: 15px;
    padding-left: 1em;
    color: #646464;
    border-left: 3px solid #d3d3d3;
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
}
</style>

<template>
  <div class="text-preview">
    <div class="text-area use-area">
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
  name: 'UsePreview',
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
    },
    title: {
      get() {
        return this.item.title
      },
      set(value) {
        this.$store.commit('editor/UPDATE_SECTION_TITLE', {
          value
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
