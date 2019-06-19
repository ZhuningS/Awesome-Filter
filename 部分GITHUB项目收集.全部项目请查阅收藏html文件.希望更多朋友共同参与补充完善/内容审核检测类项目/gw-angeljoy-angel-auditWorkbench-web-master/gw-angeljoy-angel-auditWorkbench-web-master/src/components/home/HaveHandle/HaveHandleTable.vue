<template>
  <el-table :data="haveHandleList.rows" border
            style="wdith: 100%" class="table-content">
    <el-table-column label="接收时间">
      <template scope="scope">
        {{ scope.row.applyTime | formatAngelTime | formatEmptyStr }}
      </template>
    </el-table-column>
    <el-table-column label="完成时间">
      <template scope="scope">
        {{ scope.row.handleFinishTime | formatAngelTime | formatEmptyStr }}
      </template>
    </el-table-column>
    <el-table-column label="状态">
      <template scope="scope">
        {{ scope.row.handleStatusDisplay | formatEmptyStr }}
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button @click="check(scope.row)" type="text">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

export default {
  computed: {
    haveHandleList() { return this.$parent.haveHandleList; }
  },
  methods: {
    check(row) {
      this.$parent.toGetChooseResult(row);
    }
  }
};
</script>
