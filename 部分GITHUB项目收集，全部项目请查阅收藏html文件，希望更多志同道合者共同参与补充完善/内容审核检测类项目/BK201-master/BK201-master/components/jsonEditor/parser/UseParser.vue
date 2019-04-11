<style lang="scss">
.json-content-txt-parser {
  blockquote {
    margin-left: 5px;
    margin-bottom: 20px;
    padding-left: 12px;
    color: #646464;
    border-left: 3px solid #d3d3d3;
    font-size: 14px;
    line-height: 27px;
    @extend %breakWord;
  }
}
</style>

<template>
  <div class="json-content-txt-parser">
    <blockquote v-html="item.text"/>
  </div>
</template>

<script>
export default {
  name: 'JsonContentTxtParser',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
