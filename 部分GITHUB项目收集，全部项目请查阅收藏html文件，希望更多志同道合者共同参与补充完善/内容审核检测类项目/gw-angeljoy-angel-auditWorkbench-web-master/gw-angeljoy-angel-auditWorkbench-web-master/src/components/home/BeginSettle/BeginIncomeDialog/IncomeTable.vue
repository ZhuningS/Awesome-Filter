<template>
<el-table :data="searchResult.rows" border
          max-height="500"
          highlight-current-row @current-change="selectResult">
  <el-table-column label="天使生活账号">
    <template scope="scope">
      {{ scope.row.uniqueId | formatEmptyStr }}
    </template>
  </el-table-column>
  <el-table-column label="名字">
    <template scope="scope">
      {{ scope.row.userNickName | formatEmptyStr }}
    </template>
  </el-table-column>
  <!--  todo 跟一下  -->
  <el-table-column label="游戏昵称">
    <template scope="scope">
      {{ scope.row.nickName | formatEmptyStr }}
    </template>
  </el-table-column>
  <el-table-column label="上码总金额">
    <template scope="scope">
      {{ scope.row.freezeGold | formatEmptyStr }}
    </template>
  </el-table-column>
</el-table>
</template>

<script>

export default {
  props: {
    opening: null,
    searchResult: null
  },
  methods: {
    /*  选择  */
    selectResult(val) {
      if (!this.opening) { return; }
      this.$emit('selectResult', val);
    },
  }
};
</script>
