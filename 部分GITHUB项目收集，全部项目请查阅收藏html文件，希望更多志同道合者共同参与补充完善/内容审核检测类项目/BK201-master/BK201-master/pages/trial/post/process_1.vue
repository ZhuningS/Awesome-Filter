<style lang="scss">
#trial-post {
  .trial-post-item {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid $color-gray-normal;

    .header {
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        border-radius: 4px;
        margin-right: 10px;
      }
    }

    .body {
      .content {
        font-size: 13px;
        color: $color-text-light;
        text-indent: 45px;
        margin-top: -15px;
      }

      .images {
        img {
          width: 100px;
          height: 100px;
          vertical-align: top;
          margin-right: 5px;
          margin-bottom: 5px;
          cursor: pointer;
        }
      }
    }

    .item {
      margin-bottom: 10px;
    }

    .label {
      font-weight: bold;
      font-size: 14px;
      display: inline-block;
      width: 45px;
    }

    .el-tag {
      margin-right: 10px;
    }
  }
}
</style>

<template>
  <div
    v-loading="loading"
    id="trial-post"
  >
    <div>
      <div
        v-for="(item, index) in list"
        :key="item.id"
        class="trial-post-item"
      >
        <div class="header">
          <p class="item">
            <span class="label">用户：</span>
            <a
              :href="$alias.user(item.user.zone)"
              class="user"
              target="_blank"
            >
              <img :src="$resize(item.user.avatar, { width: 60 })">
              <span
                class="nickname"
                v-text="item.user.nickname"
              />
            </a>
          </p>
          <p class="item">
            <span class="label">标题：</span>
            <a
              :href="$alias.post(item.id)"
              target="_blank"
              v-html="item.f_title.text || item.title"
            />
          </p>
        </div>
        <div class="body">
          <div class="item">
            <span class="label">内容：</span>
            <div
              class="content"
              v-html="item.f_content.text || item.content"
            />
          </div>
          <div
            v-if="item.images.length"
            class="images item"
          >
            <p class="label">图片：</p>
            <img
              v-for="(img, subIndex) in item.images"
              :key="subIndex"
              :src="$resize(img.url, { width: 200 })"
              @click="deleteImage(img.id, img.url, index, subIndex)"
            >
          </div>
          <div
            v-if="item.words.filters.length"
            class="tags item"
          >
            <span class="label">词汇：</span>
            <el-tag
              v-for="tag in item.words.filters"
              :key="tag"
              type="info"
              size="mini"
              v-text="tag"
            />
          </div>
        </div>
        <div class="item">
          <span class="label">状态：</span>
          {{ computePostState(item) }}
        </div>
        <div class="item">
          <span class="label">操作：</span>
          <template v-if="item.deleted_at">
            <el-button
              size="small"
              type="danger"
              @click="submit('approve', index, item.id)"
            >确认删除</el-button>
            <el-button
              size="small"
              type="success"
              @click="submit('reject', index, item.id)"
            >恢复帖子</el-button>
          </template>
          <template v-else>
            <el-button
              size="small"
              type="success"
              @click="submit('pass', index, item.id)"
            >通过</el-button>
            <el-button
              size="small"
              type="danger"
              @click="submit('ban', index, item.id)"
            >删帖</el-button>
          </template>
          <router-link
            :to="`/quick/user/?zone=${item.user.zone}`"
            style="margin-left: 10px;margin-right: 10px"
          >
            <el-button
              size="small"
              type="warning"
            >查看用户</el-button>
          </router-link>
          <el-button
            v-if="item.images.length"
            size="small"
            type="primary"
            style="margin-left: 10px;margin-right: 10px"
            @click="openImages(item.images)"
          >查看所有图片</el-button>
          <a
            :href="$alias.bangumi(item.bangumi_id)"
            target="_blank"
          >
            <el-button
              size="small"
              type="primary"
            >查看番剧</el-button>
          </a>
          <a
            v-if="computePostState(item) === '吧务已删除'"
            :href="`/quick/user/?id=${item.state}`"
            target="_blank"
            style="margin-left: 10px;margin-right: 10px"
          >
            <el-button
              size="small"
              type="primary"
            >查看版主</el-button>
          </a>
        </div>
      </div>
    </div>
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
        .$get('admin/trial/post/list')
        .then(data => {
          this.list = data
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    openImages(images) {
      images.forEach(item => {
        window.open(item.url)
      })
    },
    submit(type, index, id) {
      this.$axios.$post(`admin/trial/post/${type}`, { id }).then(() => {
        this.list.splice(index, 1)
        this.$store.commit('CHANGE_TODO', {
          key: 'posts'
        })
      })
    },
    deleteImage(id, url, index, subIndex) {
      if (!url) {
        return
      }
      this.$axios
        .$post('admin/trial/post/delete_image', { id, url })
        .then(() => {
          this.list[index].images.splice(subIndex, 1)
        })
    },
    computePostState(post) {
      const userId = parseInt(post.user_id, 10)
      const state = post.state
      if (post.deleted_at) {
        return userId === state ? '系统已删除' : '吧务已删除'
      }
      if (userId === state) {
        return '刚发布'
      }
      if (post.is_nice) {
        return '被加精'
      }
      if (post.top_at) {
        return '被置顶'
      }
      return '未知'
    }
  }
}
</script>
