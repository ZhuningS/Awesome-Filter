<style lang="scss">
.json-content-list-parser {
  ul,
  ol {
    margin: 20px 0 18px 19px;
    font-size: 14px;
  }

  ul li {
    list-style-type: disc;
  }

  ol li {
    list-style-type: decimal;
  }

  li {
    line-height: 25px;
    margin-bottom: 2px;
    @extend %breakWord;
  }
}
</style>

<template>
  <div class="json-content-list-parser">
    <ol v-if="item.sort === '1'">
      <li
        v-for="(li, index) in list"
        :key="index"
        v-text="li"
      />
    </ol>
    <ul v-else>
      <li
        v-for="(li, index) in list"
        :key="index"
        v-text="li"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JsonContentListParser',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    list() {
      let list = this.item.text
      if (!list) {
        return []
      }
      while (/\n\n/.test(list)) {
        list = list.replace(/\n\n/g, '\n')
      }
      return list.split('\n')
    }
  }
}
</script>
