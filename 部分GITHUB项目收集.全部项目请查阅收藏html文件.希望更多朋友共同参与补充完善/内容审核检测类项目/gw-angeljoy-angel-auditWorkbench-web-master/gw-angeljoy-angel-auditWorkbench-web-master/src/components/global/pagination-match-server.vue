<template>
  <footer class="pagination-footer">
    <el-pagination
      @size-change="sizeChange"
      @current-change="offsetChange"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page="1"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      :total="total">
    </el-pagination>
  </footer>
</template>

<script>

export default {
  props: {
    total: Number,
  },
  data() {
    return {
      offset: 0, // current - 1 组件的页数 - 1
      limit: 10,
    };
  },
  // event: @change(offset, limit) 组件页数或数目改变时
  methods: {
    sizeChange(limit) {
      this.limit = limit;
      // 当 offset = 0 时 ，触发 change
      if (this.total / limit < this.offset + 1 && this.offset > 0) { return; }
      this.$emit('change', this.offset, this.limit);
    },
    offsetChange(current) {
      this.offset = current - 1;
      this.$emit('change', this.offset, this.limit);
    }
  }
};
</script>

<style lang="scss">
.pagination-footer {
  width: 100%;
  height: 40px;
  margin: 14px auto;
  text-align: right;

  .el-pagination {
    span,
    button {
      font-size: 12px;
      color: #333;
    }

    li {
      border-color: #ebebeb;
      color: #333;
    }

    .active {
      background-color: #f5f5f5;
      border: 1px solid #ebebeb;
      color: #999;
    }

    .btn-prev,
    .btn-next {
      border-color: #ebebeb;
    }

    .el-icon {
      color: #999;
    }

    .el-pagination__editor {
      border-color: #ebebeb;
    }
  }
}
</style>
