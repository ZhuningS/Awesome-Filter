<style lang="scss">
#blacklist-words {
  .tags-wrap {
    margin: 50px 90px 50px 100px;
    height: 400px;

    .el-tag {
      margin-left: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>

<template>
  <div
    v-loading="pageLoading"
    id="blacklist-words"
  >
    <header class="page-header">
      <el-button
        icon="el-icon-plus"
        type="primary"
        size="small"
        @click="openCreateModal"
      >
        添加高危词
      </el-button>
      <el-button
        v-if="pageList.length"
        icon="el-icon-delete"
        type="danger"
        size="small"
        @click="openDeleteModal"
      >
        删除高危词
      </el-button>
    </header>
    <div
      v-if="pageList.length"
      class="tags-wrap"
    >
      <el-tag
        v-for="tag in pageData"
        :key="tag"
        :disable-transitions="true"
        type="info"
        v-text="tag"
      />
    </div>
    <el-alert
      v-else
      type="info"
      title="暂无高危词"
    />
    <v-page
      :state="pageState"
      :change="handlePageChange"
    />
    <v-dialog
      v-model="showModal"
      :title="isDelete ? '删除高危词' : '添加高危词'"
      @submit="submitWordsChange"
    >
      <el-input
        v-model.trim="words"
        :rows="20"
        type="textarea"
        placeholder="一行一个"
      />
    </v-dialog>
  </div>
</template>

<script>
import pageMixin from '~/mixins/page'

export default {
  name: 'BlacklistWords',
  mixins: [pageMixin],
  data() {
    return {
      showModal: false,
      isDelete: false,
      words: ''
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      this.pageLoading = true
      this.$axios
        .$get('admin/trial/words/list')
        .then(data => {
          this.pageState.cur = 1
          this.pageState.size = 50
          this.pageState.total = data.length
          this.pageList = data
          this.pageLoading = false
        })
        .catch(() => {
          this.pageLoading = false
        })
    },
    async handleDelete(tag, index) {
      this.$axios
        .$post('admin/trial/words/delete', { words: [tag] })
        .then(() => {
          this.pageList.splice(
            (this.pageState - 1) * this.pageState.size + index,
            1
          )
        })
    },
    openCreateModal() {
      this.words = ''
      this.isDelete = false
      this.showModal = true
    },
    openDeleteModal() {
      this.words = ''
      this.isDelete = true
      this.showModal = true
    },
    async submitWordsChange() {
      if (!this.words) {
        return
      }
      const words = this.words.split('\n').filter(_ => _)
      try {
        if (this.isDelete) {
          await this.$axios.$post('admin/trial/words/delete', { words })
        } else {
          await this.$axios.$post('admin/trial/words/add', { words })
        }
        if (this.isDelete) {
          this.pageList = this.pageList.filter(_ => words.indexOf(_) === -1)
          this.pageState.total = this.pageList.length
        } else {
          this.pageList = words.concat(this.pageList)
        }
        this.showModal = false
      } catch (e) {
        this.$toast.error(e)
      }
    }
  }
}
</script>
