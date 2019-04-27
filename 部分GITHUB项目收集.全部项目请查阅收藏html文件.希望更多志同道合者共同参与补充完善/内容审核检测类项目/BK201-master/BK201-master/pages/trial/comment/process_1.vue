<style lang="scss">
#trial-comment-process-1 {
  .sub-tag {
    margin-top: 5px;
  }

  .content-wrap {
    a {
      display: inline-block;
      vertical-align: middle;
    }

    .tag-wrap {
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
    }
  }

  .comment-item-img {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 5px;

    img {
      height: 150px;
      width: auto;
    }
  }

  .content {
    margin-left: 5px;
  }

  .control {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>

<template>
  <div
    v-loading="loading"
    id="trial-comment-process-1"
  >
    <el-table
      :data="list"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        label="分区"
        width="80px"
      >
        <template slot-scope="scope">
          <div>
            <el-tag>
              {{ computeArea(scope.row.type) }}
            </el-tag>
          </div>
          <div class="sub-tag">
            <el-tag>
              {{ scope.row.modal_id }}
            </el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope">
          <template v-if="checkIsHTML(scope.row.content)">
            <div
              v-for="(item, index) in transformerContent(scope.row.content)"
              :key="index"
              :class="`content-wrap comment-item-${item.type}`"
            >
              <div
                v-if="!index"
                class="tag-wrap"
              >
                <div>
                  <el-tag
                    type="info"
                  >主评论</el-tag>
                </div>
                <el-tag
                  type="info"
                  class="sub-tag"
                  v-text="scope.row.user_id"
                />
              </div>
              <a
                v-if="item.type === 'txt'"
                :href="computeCommentLink(scope.row)"
                target="_blank"
              >
                <span
                  class="content"
                  v-html="item.data"
                />
              </a>
              <a
                v-else-if="item.type === 'img'"
                :href="$resize(item.data.key)"
                target="_blank"
              >
                <img
                  :src="$resize(item.data.key, { width: 300, mode: 2 })"
                  @click="openImage(item.data.key)"
                >
              </a>
            </div>
          </template>
          <div
            v-else
            class="content-wrap comment-item-txt"
          >
            <div class="tag-wrap">
              <div>
                <el-tag type="info">子评论</el-tag>
              </div>
              <el-tag
                type="info"
                class="sub-tag"
                v-text="scope.row.user_id"
              />
            </div>
            <a
              :href="computeCommentLink(scope.row)"
              target="_blank"
            >
              <span
                class="content"
                v-text="scope.row.content"
              />
            </a>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="280px"
      >
        <template slot-scope="scope">
          <template v-if="scope.row.deleted_at">
            <el-button
              type="warning"
              size="mini"
              @click="approveComment(scope.row, scope.$index)"
            >确认</el-button>
            <el-button
              type="success"
              size="mini"
              @click="rejectComment(scope.row, scope.$index)"
            >恢复</el-button>
          </template>
          <template v-else>
            <el-button
              type="success"
              size="mini"
              @click="passComment(scope.row, scope.$index)"
            >通过</el-button>
            <el-button
              type="danger"
              size="mini"
              @click="deleteComment(scope.row, scope.$index)"
            >删除</el-button>
          </template>
          <router-link
            :to="`/quick/user/?id=${scope.row.user_id}`"
            style="margin-left: 10px"
          >
            <el-button
              type="primary"
              size="mini"
            >查看用户</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <div
      v-if="list.length"
      class="control"
    >
      <el-button
        :loading="batching"
        type="primary"
        round
        @click="batchPass"
      >全部通过</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      types: [],
      loading: true,
      batching: false
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.loading = true
      this.list = []
      this.$axios
        .$get('admin/trial/comment/list')
        .then(data => {
          this.list = data.comments
          this.types = data.types
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    computeCommentLink(comment) {
      let aliasName = comment.type
      if (aliasName === 'cartoon_role') {
        aliasName = 'cartoonRole'
      }
      if (comment.parent_id !== '0') {
        return `${this.$alias[aliasName](comment.modal_id)}?comment-id=${
          comment.parent_id
        }&reply-id=${comment.id}`
      }
      return `${this.$alias[aliasName](comment.modal_id)}?comment-id=${
        comment.id
      }`
    },
    checkIsHTML(content) {
      return content.startsWith('[{')
    },
    transformerContent(content) {
      try {
        return JSON.parse(content)
      } catch (e) {
        return []
      }
    },
    computeArea(type) {
      switch (type) {
        case 'post':
          return '帖子'
          break
        case 'image':
          return '图片'
          break
        case 'video':
          return '视频'
          break
        case 'question':
          return '提问'
          break
        case 'answer':
          return '回答'
          break
        case 'role':
          return '偶像'
          break
        case 'cartoon_role':
          return '偶像'
          break
      }
      return type
    },
    passComment(item, index) {
      this.$axios
        .$post('admin/trial/comment/pass', { id: item.id, type: item.type })
        .then(() => {
          this.list.splice(index, 1)
          this.$store.commit('CHANGE_TODO', {
            key: 'comments'
          })
        })
    },
    approveComment(item, index) {
      this.$axios
        .$post('admin/trial/comment/approve', { id: item.id, type: item.type })
        .then(() => {
          this.list.splice(index, 1)
          this.$store.commit('CHANGE_TODO', {
            key: 'comments'
          })
        })
    },
    rejectComment(item, index) {
      this.$axios
        .$post('admin/trial/comment/reject', {
          id: item.id,
          type: item.type,
          parent_id: item.parent_id
        })
        .then(() => {
          this.list.splice(index, 1)
          this.$store.commit('CHANGE_TODO', {
            key: 'comments'
          })
        })
    },
    deleteComment(item, index) {
      this.$axios
        .$post('admin/trial/comment/ban', { id: item.id, type: item.type })
        .then(() => {
          this.list.splice(index, 1)
          this.$store.commit('CHANGE_TODO', {
            key: 'comments'
          })
        })
    },
    batchPass() {
      if (this.batching || !this.list.length) {
        return
      }
      this.batching = true
      this.$axios
        .$post('admin/trial/comment/batch_pass', {
          pass_arr: this.list.filter(_ => !_.deleted_at).map(_ => {
            return {
              id: _.id,
              type: _.type
            }
          }),
          approve_arr: this.list.filter(_ => !!_.deleted_at).map(_ => {
            return {
              id: _.id,
              type: _.type
            }
          })
        })
        .then(() => {
          this.batching = false
          this.$store.commit('CHANGE_TODO', {
            key: 'comments',
            value: this.list.length
          })
          this.getData()
        })
        .catch(() => {
          this.batching = false
        })
    }
  }
}
</script>
