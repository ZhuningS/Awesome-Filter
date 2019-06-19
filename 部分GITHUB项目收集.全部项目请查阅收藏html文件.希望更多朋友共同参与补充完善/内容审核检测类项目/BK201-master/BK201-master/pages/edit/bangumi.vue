<template>
  <div id="edit-bangumi">
    <el-table
      :data="list"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="名称">
        <template slot-scope="scope">
          <a
            :href="$alias.bangumi(scope.row.id)"
            target="_blank"
          >{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column
        label="原名"
        prop="alias"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="passBangumi(scope.row.id, scope.$index)"
          >通过</el-button>
          <router-link
            :to="`/quick/user/?id=${scope.row.state}`"
            style="margin-left: 10px"
          >
            <el-button
              size="mini"
              type="warning"
            >查看变更人</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'EditBangumi',
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
        .$get('admin/trial/bangumi/list')
        .then(data => {
          this.list = data
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    passBangumi(id, index) {
      this.$axios.$post('admin/trial/bangumi/pass', { id }).then(() => {
        this.list.splice(index, 1)
      })
    }
  }
}
</script>
