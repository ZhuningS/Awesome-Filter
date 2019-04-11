<style lang="scss">
.page-wrap {
  margin-top: 30px;
  margin-bottom: 50px;
  margin-right: 30px;
  text-align: right;
}
</style>

<template>
  <div class="page-wrap">
    <el-pagination
      :current-page="state.cur"
      :page-size="state.size"
      :total="state.total"
      background
      layout="total, prev, pager, next, jumper"
      @current-change="change"
    />
  </div>
</template>

<script>
export default {
  name: 'VPage',
  props: {
    state: {
      required: true,
      type: Object
    },
    change: {
      required: true,
      type: Function
    }
  }
}
</script>
