<template>
  <div
    v-if="show"
    class="json-content"
  >
    <component
      v-for="(item, index) in content"
      :key="index"
      :item="item"
      :is="`${item.type}-parser`"
    />
  </div>
</template>

<script>
import TxtParser from './parser/TxtParser'
import ImgParser from './parser/ImgParser'
import UseParser from './parser/UseParser'
import TitleParser from './parser/TitleParser'
import ListParser from './parser/ListParser'

export default {
  name: 'JsonContent',
  components: {
    TitleParser,
    TxtParser,
    ImgParser,
    UseParser,
    ListParser
  },
  props: {
    content: {
      required: true,
      type: Array
    },
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>
