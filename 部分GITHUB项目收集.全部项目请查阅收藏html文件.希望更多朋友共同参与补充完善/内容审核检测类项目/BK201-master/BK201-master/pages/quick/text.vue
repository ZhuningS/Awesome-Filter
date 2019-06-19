<style lang="scss">
#quick-text {
  .header {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>

<template>
  <div id="quick-text">
    <h3 class="page-header">帖子操作：</h3>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card>
          <el-button
            type="primary"
            @click="changePostArea"
          >
            修改帖子版区
          </el-button>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <el-button
            type="warning"
            @click="deletePostTitle"
          >
            删除帖子标题
          </el-button>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <el-button
            type="danger"
            @click="destroyPost"
          >
            删除帖子
          </el-button>
        </el-card>
      </el-col>
    </el-row>
    <h3 class="header">评论操作：</h3>
    <el-alert
      title="帖子：post，相册：image，漫评：score，视频：video，提问：question，回答：answer，偶像：role"
      type="info"
      class="header"
    />
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card>
          <el-button>
            占个位子
          </el-button>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <el-button
            type="warning"
            @click="deleteOneComment"
          >
            删除某条评论
          </el-button>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <el-button
            type="danger"
            @click="deleteUserComment"
          >
            删除某人评论
          </el-button>
        </el-card>
      </el-col>
    </el-row>
    <h3 class="header">图片操作：</h3>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card>
          <el-button
            type="primary"
            @click="deleteAlbumPoster"
          >
            删除相册封面
          </el-button>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <el-button
            type="warning"
            @click="deleteImage"
          >
            删除某张图片
          </el-button>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <el-button
            type="danger"
            @click="deleteAlbum"
          >
            删除相册
          </el-button>
        </el-card>
      </el-col>
    </el-row>
    <h3 class="header">其它操作：</h3>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card>
          <el-button
            type="danger"
            @click="deleteReview"
          >
            删除漫评
          </el-button>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <el-button
            type="danger"
            @click="deleteQuestion"
          >
            删除提问
          </el-button>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <el-button
            type="danger"
            @click="deleteAnswer"
          >
            删除回答
          </el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const commentTypes = [
  'post',
  'image',
  'score',
  'video',
  'question',
  'answer',
  'role'
]

export default {
  name: 'QuickText',
  methods: {
    changePostArea() {
      this.$prompt('请输入帖子id和番剧id，-分割', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          const data = value.split('-')
          if (data.length !== 2) {
            this.$toast.error('错误的格式')
            return
          }
          if (!/^\d+$/.test(data[1]) || !/^\d+$/.test(data[0])) {
            this.$toast.error('非法的id')
            return
          }
          this.$axios.$post('admin/trial/post/change_area', {
            post_id: data[0],
            bangumi_id: data[1]
          })
        })
        .catch(() => {})
    },
    deletePostTitle() {
      this.$prompt('请输入帖子id', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d+$/,
        inputErrorMessage: '非法的id'
      })
        .then(({ value }) => {
          if (value < 1) {
            this.$toast.error('非法的id')
            return
          }
          this.$axios.$post('admin/trial/post/delete_title', { id: value })
        })
        .catch(() => {})
    },
    destroyPost() {
      this.$prompt('请输入帖子id', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d+$/,
        inputErrorMessage: '非法的id'
      })
        .then(({ value }) => {
          if (value < 1) {
            this.$toast.error('非法的id')
            return
          }
          this.$axios.$post('admin/trial/post/ban', { id: value })
        })
        .catch(() => {})
    },
    deleteOneComment() {
      this.$prompt('输入 type 和 id，用 - 分割', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          const data = value.split('-')
          if (data.length !== 2) {
            this.$toast.error('错误的格式')
            return
          }
          if (commentTypes.indexOf(data[0]) === -1) {
            this.$toast.error('错误的类型')
            return
          }
          if (!/^\d+$/.test(data[1])) {
            this.$toast.error('非法的id')
            return
          }
          this.$axios.$post('admin/trial/comment/ban', {
            id: data[1],
            type: data[0]
          })
        })
        .catch(() => {})
    },
    deleteUserComment() {
      this.$prompt('输入 type 和 user_id，用 - 分割', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          const data = value.split('-')
          if (data.length !== 2) {
            this.$toast.error('错误的格式')
            return
          }
          if (commentTypes.indexOf(data[0]) === -1) {
            this.$toast.error('错误的类型')
            return
          }
          if (!/^\d+$/.test(data[1])) {
            this.$toast.error('非法的id')
            return
          }
          this.$axios.$post('admin/trial/comment/batch_ban', {
            user_id: data[1],
            type: data[0]
          })
        })
        .catch(() => {})
    },
    deleteAlbumPoster() {
      this.$prompt('请输入图片id', '删除图片', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d+$/,
        inputErrorMessage: '非法的id'
      })
        .then(({ value }) => {
          if (value < 1) {
            this.$toast.error('非法的id')
            return
          }
          this.$axios.$post('admin/trial/image/delete_poster', { id: value })
        })
        .catch(() => {})
    },
    deleteImage() {
      this.$prompt('请输入相册id', '删除相册', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d+$/,
        inputErrorMessage: '非法的id'
      })
        .then(({ value }) => {
          if (value < 1) {
            this.$toast.error('非法的id')
            return
          }
          this.$axios.$post('admin/trial/image/ban', {
            id: value,
            type: 'image'
          })
        })
        .catch(() => {})
    },
    deleteAlbum() {
      this.$prompt('请输入图片id', '删除图片', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d+$/,
        inputErrorMessage: '非法的id'
      })
        .then(({ value }) => {
          if (value < 1) {
            this.$toast.error('非法的id')
            return
          }
          this.$axios.$post('admin/trial/image/ban', {
            id: value,
            type: 'album'
          })
        })
        .catch(() => {})
    },
    deleteReview() {
      this.$prompt('请输入漫评id', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d+$/,
        inputErrorMessage: '非法的id'
      })
        .then(({ value }) => {
          if (value < 1) {
            this.$toast.error('非法的id')
            return
          }
          this.$axios.$post('admin/trial/score/ban', { id: value })
        })
        .catch(() => {})
    },
    deleteQuestion() {
      this.$prompt('请输入问题id', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d+$/,
        inputErrorMessage: '非法的id'
      })
        .then(({ value }) => {
          if (value < 1) {
            this.$toast.error('非法的id')
            return
          }
          this.$axios.$post('admin/trial/question/ban', { id: value })
        })
        .catch(() => {})
    },
    deleteAnswer() {
      this.$prompt('请输入回答id', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d+$/,
        inputErrorMessage: '非法的id'
      })
        .then(({ value }) => {
          if (value < 1) {
            this.$toast.error('非法的id')
            return
          }
          this.$axios.$post('admin/trial/answer/ban', { id: value })
        })
        .catch(() => {})
    }
  }
}
</script>
