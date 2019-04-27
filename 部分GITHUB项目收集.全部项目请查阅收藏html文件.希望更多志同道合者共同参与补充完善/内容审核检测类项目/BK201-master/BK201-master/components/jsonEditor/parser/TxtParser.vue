<style lang="scss">
.json-content-txt-parser {
  h3,
  p {
    font-weight: 400;
    line-height: 1.7;
    color: #2f2f2f;
    @extend %breakWord;
  }

  h3 {
    font-weight: bold;
    margin-top: 1.66667em;
    margin-bottom: 0.83333em;
    font-size: 18px;
  }

  p {
    font-weight: 400;
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 16px;
  }
}
</style>

<template>
  <div class="json-content-txt-parser">
    <h3
      v-if="item.title"
      v-text="item.title"
    />
    <p v-html="item.text"/>
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
