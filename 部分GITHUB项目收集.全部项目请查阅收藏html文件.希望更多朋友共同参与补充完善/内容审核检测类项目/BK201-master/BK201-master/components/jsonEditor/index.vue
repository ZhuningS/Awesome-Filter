<style lang="scss">
.json-editor-main {
  height: 100%;

  .editor-tabs {
    width: 315px;
    height: 100%;
    overflow-y: auto;
    float: left;
    margin-right: 10px;
    padding-right: 15px;
    position: relative;
  }

  .list-complete-wrap {
    position: relative;
  }

  .list-complete-item {
    transition: all 0.5s;
  }

  .list-complete-enter,
  .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-complete-leave-active {
    position: absolute;
  }

  .editor-preview {
    overflow: hidden;
    min-height: 100%;
  }
}
</style>

<template>
  <div class="json-editor-main">
    <div class="editor-tabs">
      <transition-group
        name="list-complete"
        tag="div"
        class="list-complete-wrap"
      >
        <json-item
          v-for="(item, index) in sections"
          :key="item.id"
          :item="item"
          :index="index"
          :selected="index === selectedIndex"
          class="list-complete-item"
          @preview="handleItemPreview"
          @create="handleItemAppend"
          @delete="handleItemDelete"
          @sort="handleItemSort"
        />
      </transition-group>
    </div>
    <component
      :is="`${curPreview.type}-preview`"
      :item="curPreview"
      class="editor-preview"
    />
  </div>
</template>

<script>
import JsonItem from './JsonItem'
import ImgPreview from './preview/ImgPreview'
import TxtPreview from './preview/TxtPreview'
import ListPreview from './preview/ListPreview'
import UsePreview from './preview/UsePreview'
import TitlePreview from './preview/TitlePreview'
import Mousetrap from 'mousetrap'

export default {
  name: 'JsonEditorMain',
  components: {
    JsonItem,
    ImgPreview,
    TxtPreview,
    UsePreview,
    ListPreview,
    TitlePreview
  },
  props: {},
  computed: {
    id() {
      return +(this.$route.params.id || 0)
    },
    sections() {
      return this.$store.state.editor.sections
    },
    selectedIndex() {
      return this.$store.state.editor.selectedIndex
    },
    curPreview() {
      return this.sections[this.selectedIndex]
    }
  },
  mounted() {
    this.$channel.$on('write-save', (auto = false) => {
      const richContent = this.getRichContent()
      if (!richContent.length) {
        this.$toast.info('内容不能为空！')
        return
      }
      this.$emit('submit', {
        content: richContent,
        desc: this.getPureContent(),
        publish: false,
        id: this.id,
        auto
      })
    })
    this.$channel.$on('write-publish', () => {
      const richContent = this.getRichContent()
      if (!richContent.length) {
        this.$toast.info('内容不能为空！')
        return
      }
      this.$emit('submit', {
        content: richContent,
        desc: this.getPureContent(),
        publish: true,
        id: this.id
      })
    })
    Mousetrap.bind(['command+s', 'ctrl+s'], () => {
      if (this.id) {
        this.$channel.$emit('write-save', true)
      }
      return false
    })
  },
  methods: {
    getRichContent() {
      const result = []
      this.sections.forEach(item => {
        if (item.type === 'img') {
          if (item.url) {
            result.push(item)
          }
        } else if (item.type === 'txt') {
          if (item.text) {
            result.push(item)
          }
        } else if (item.type === 'use') {
          if (item.text) {
            result.push(item)
          }
        } else if (item.type === 'list') {
          if (item.text) {
            result.push(item)
          }
        } else if (item.type === 'title') {
          if (item.text) {
            result.push(item)
          }
        }
      })
      return result
    },
    getPureContent() {
      let result = ''
      const convertList = str => {
        if (!str) {
          return []
        }
        while (/\n\n/.test(str)) {
          str = str.replace(/\n\n/g, '\n')
        }
        return str.split('\n')
      }
      this.sections.forEach(item => {
        if (item.type === 'txt' && item.text) {
          result += `${item.text.replace(/<br>/g, '\n')} `
        }
        if (item.type === 'title' && item.text) {
          result += `${item.text} `
        }
        if (item.type === 'use' && item.text) {
          result += `${item.text.replace(/<br>/g, '\n')} `
        }
        if (item.type === 'list' && item.text) {
          const strArr = convertList(item.text)
          strArr.forEach((p, index) => {
            result += `${index + 1}:${p} `
          })
        }
      })
      return result.slice(0, -1)
    },
    handleItemPreview({ index }) {
      this.$store.commit('editor/SWITCH_SECTION', { index })
      this.focusTextareaAndScroll()
    },
    handleItemAppend({ index, type }) {
      this.$store.commit('editor/APPEND_SECTION', { index, type })
      this.focusTextareaAndScroll(index)
    },
    handleItemDelete({ index }) {
      this.$store.commit('editor/DELETE_SECTION', { index })
    },
    handleItemSort({ index }) {
      this.$store.commit('editor/SORT_SECTION', { index })
    },
    focusTextareaAndScroll(index) {
      this.$nextTick(() => {
        const textarea = this.$el.querySelector('.focus-textarea')
        textarea && textarea.focus()
        if (index === this.sections.length - 2) {
          const dom = document.querySelector(`.json-item-${index}`)
          dom &&
            this.$scrollToY(
              (index + 2) * 300,
              1000,
              document.querySelector('.editor-tabs')
            )
        }
      })
    }
  }
}
</script>
