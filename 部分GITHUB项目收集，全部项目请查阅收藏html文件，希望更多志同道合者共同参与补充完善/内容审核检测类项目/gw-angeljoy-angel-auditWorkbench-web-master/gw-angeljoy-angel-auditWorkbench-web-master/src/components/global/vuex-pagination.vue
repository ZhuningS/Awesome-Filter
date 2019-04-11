<template>
  <footer class="pagination-footer">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page="1"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      :total="total">
    </el-pagination>
  </footer>
</template>

<script>
  import '../../style/pagination.scss';

  export default {
    props: {
      total: Number,
      limitMutation: String, // ---修改vuex 条数 mutation
      offsetMutation: String,
      action: String,
    },
    data() {
      return {
        page: 1, // ---用于记录 实例中  页数，
      };
    },
    methods: {
      handleCurrentChange(val) {
        this.page = val;
        this.$store.commit(this.offsetMutation, (val - 1));
        this.$store.dispatch(this.action);
      },
      handleSizeChange(val) {
        this.$store.commit(this.limitMutation, val);
        // 计算 条数 改变 是否 改变当前分页,, 改变则 返回
        if (Math.ceil(this.total / val) < this.page) { return; }
        this.$store.dispatch(this.action);
      },
    },
    beforeDestroy() {
      this.$store.commit(this.offsetMutation, 0);
      this.$store.commit(this.limitMutation, 10);
    }
  };
</script>
