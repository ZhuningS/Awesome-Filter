<style lang="scss">
#trial-user-process-1 {
  .avatar {
    width: 100px;
    height: 100px;
  }

  .banner img {
    height: 100px;
    width: auto;
  }

  .control {
    margin-left: -5px;
    margin-bottom: 20px;
    text-align: center;

    a {
      margin: 0 10px;
    }
  }
}
</style>

<template>
  <div
    v-loading="loading"
    id="trial-user-process-1"
  >
    <el-table
      :data="list"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        label="昵称"
        width="120px"
      >
        <a
          slot-scope="scope"
          :href="$alias.user(scope.row.zone)"
          target="_blank"
          v-text="scope.row.nickname"
        />
      </el-table-column>
      <el-table-column
        label="头像"
        width="120px"
      >
        <img
          slot-scope="scope"
          :src="$resize(scope.row.avatar, { width: 200 })"
          class="avatar"
        >
      </el-table-column>
      <el-table-column label="背景">
        <a
          slot-scope="scope"
          :href="$resize(scope.row.banner)"
          target="_blank"
          class="banner"
        >
          <img :src="$resize(scope.row.banner, { height: 200, mode: 2 })">
        </a>
      </el-table-column>
      <el-table-column
        label="签名"
        prop="signature"
      />
      <el-table-column
        label="操作"
        width="280px"
      >
        <template slot-scope="scope">
          <div class="control">
            <el-button
              size="small"
              type="success"
              @click="passUser(scope.$index, scope.row.id)"
            >通过</el-button>
            <router-link :to="`/quick/user/?zone=${scope.row.zone}`">
              <el-button
                size="small"
                type="primary"
              >查看详情</el-button>
            </router-link>
            <el-button
              size="small"
              type="danger"
              @click="delUser(scope.$index, scope.row.id)"
            >封禁</el-button>
          </div>
          <div>
            <el-button
              size="small"
              @click="delSomething(scope.$index, scope.row.id, scope.row.zone, 'nickname')"
            >昵称</el-button>
            <el-button
              size="small"
              @click="delSomething(scope.$index, scope.row.id, '', 'avatar')"
            >头像</el-button>
            <el-button
              size="small"
              @click="delSomething(scope.$index, scope.row.id, '', 'banner')"
            >背景</el-button>
            <el-button
              size="small"
              @click="delSomething(scope.$index, scope.row.id, '', 'signature')"
            >签名</el-button>
          </div>
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
        .$get('admin/trial/user/list')
        .then(data => {
          this.list = data
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    passUser(index, id) {
      this.$axios.$post('admin/trial/user/pass', { id }).then(() => {
        this.list.splice(index, 1)
        this.$store.commit('CHANGE_TODO', {
          key: 'users'
        })
      })
    },
    delUser(index, id) {
      this.$confirm('确定吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$axios.$post('admin/trial/user/ban', { id }).then(() => {
            this.list.splice(index, 1)
            this.$store.commit('CHANGE_TODO', {
              key: 'users'
            })
          })
        })
        .catch(() => {})
    },
    delSomething(index, id, value, key) {
      this.$confirm('确定吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$axios
            .$post('admin/trial/user/delete_info', {
              id,
              key,
              value
            })
            .then(() => {
              this.list[index][key] = value
            })
        })
        .catch(() => {})
    }
  }
}
</script>
