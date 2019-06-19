<template>
  <div id="edit-role">
    <el-table
      :data="list"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="名称">
        <template slot-scope="scope">
          <a
            :href="$alias.cartoonRole(scope.row.id)"
            target="_blank"
          >{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="success"
            size="mini"
            @click="passRole(scope.row.id, scope.$index)"
          >通过</el-button>
          <el-button
            type="danger"
            size="mini"
            @click="banRole(scope.row.id, scope.row.bangumi_id, scope.$index)"
          >删除</el-button>
          <router-link
            :to="`/admin/role/edit/${scope.row.id}`"
            style="margin-left: 10px"
          >
            <el-button
              size="mini"
              type="primary"
            >编辑</el-button>
          </router-link>
          <router-link
            :to="`/quick/user/?id=${scope.row.state}`"
            style="margin-left: 10px"
          >
            <el-button
              size="mini"
              type="primary"
            >查看变更人</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: true
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$axios
        .$get('admin/trial/cartoon_role/list')
        .then(data => {
          this.list = data
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    banRole(id, bangumi_id, index) {
      this.$axios
        .$post('admin/trial/cartoon_role/ban', { id, bangumi_id })
        .then(() => {
          this.list.splice(index, 1)
        })
    },
    passRole(id, index) {
      this.$axios.$post('admin/trial/cartoon_role/pass', { id }).then(() => {
        this.list.splice(index, 1)
      })
    }
  }
}
</script>
