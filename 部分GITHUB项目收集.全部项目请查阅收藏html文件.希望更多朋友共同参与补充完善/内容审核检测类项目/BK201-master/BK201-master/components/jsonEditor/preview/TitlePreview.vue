<style lang="scss">
.title-preview {
  height: 100%;
  position: relative;

  .title-input {
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom: 1px solid #dcdfe6;
    height: 40px;
    line-height: 40px;
    width: 100%;
    font-size: 16px;
  }
}
</style>

<template>
  <div class="title-preview">
    <input
      v-model.trim="text"
      type="text"
      class="title-input focus-textarea mousetrap"
      placeholder="段落小标题"
      maxlength="30"
    >
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
        return this.item.text
      },
      set(value) {
        this.$store.commit('editor/UPDATE_SECTION_TEXT', {
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
