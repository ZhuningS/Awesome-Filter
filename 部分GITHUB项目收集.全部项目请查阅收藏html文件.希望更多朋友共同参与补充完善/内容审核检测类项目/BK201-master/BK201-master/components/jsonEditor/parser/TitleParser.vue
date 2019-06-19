<style lang="scss">
.json-content-txt-parser {
  h3 {
    font-weight: bold;
    margin-top: 1.66667em;
    margin-bottom: 0.83333em;
    font-size: 18px;
    line-height: 1.7;
    color: #2f2f2f;
    @extend %breakWord;
  }
}
</style>

<template>
  <div class="json-content-txt-parser">
    <h3
      v-if="item.text"
      v-text="item.text"
    />
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
