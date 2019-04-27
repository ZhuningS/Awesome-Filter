<style lang="scss">
.json-content-img-parser {
  margin-bottom: 25px;
  text-align: center;

  .img-tip {
    min-width: 20%;
    max-width: 80%;
    min-height: 22px;
    padding: 10px;
    border-bottom: 1px solid #d9d9d9;
    font-size: 14px;
    color: #969696;
    line-height: 1.7;
    text-align: center;
    display: inline-block;
    @extend %breakWord;
  }
}
</style>

<template>
  <div class="json-content-img-parser">
    <v-img
      :src="item.url"
      :width="item.width"
      :height="item.height"
      :full="true"
    />
    <p
      v-if="item.text"
      class="img-tip"
      v-text="item.text"
    />
  </div>
</template>

<script>
export default {
  name: 'JsonContentImgParser',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
