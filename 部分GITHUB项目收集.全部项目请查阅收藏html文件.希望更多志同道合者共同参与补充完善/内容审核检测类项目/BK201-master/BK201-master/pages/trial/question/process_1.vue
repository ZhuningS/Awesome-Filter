<style lang="scss">
#trial-question-process-1 {
  .trial-qaq-item {
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
    id="trial-question-process-1"
  >
    <div>
      <div
        v-for="(item, index) in list"
        :key="item.id"
        class="trial-qaq-item"
      >
        <div class="header">
          <p class="item">
            <span class="label">标题：</span>
            <a
              :href="$alias.question(item.id)"
              target="_blank"
              v-text="item.title"
            />
          </p>
        </div>
        <div class="body">
          <div class="item">
            <span class="label">内容：</span>
            <div
              class="content"
              v-html="item.content"
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
            >
          </div>
        </div>
        <div class="item">
          <span class="label">操作：</span>
          <template v-if="item.deleted_at">
            <el-button
              size="small"
              type="danger"
              @click="submit('approve', item.id, index)"
            >确认删除</el-button>
            <el-button
              size="small"
              type="success"
              @click="submit('reject', item.id, index)"
            >恢复提问</el-button>
          </template>
          <template v-else>
            <el-button
              size="small"
              type="success"
              @click="submit('pass', item.id, index)"
            >通过</el-button>
            <el-button
              size="small"
              type="danger"
              @click="submit('ban', item.id, index)"
            >删除</el-button>
          </template>
          <router-link
            :to="`/quick/user/?id=${item.user_id}`"
            style="margin-left: 10px;margin-right: 10px"
          >
            <el-button
              size="small"
              type="warning"
            >查看用户</el-button>
          </router-link>
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
        .$get('admin/trial/question/list')
        .then(data => {
          this.list = data
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    submit(type, id, index) {
      this.$axios.$post(`admin/trial/question/${type}`, { id }).then(() => {
        this.list.splice(index, 1)
        this.$store.commit('CHANGE_TODO', {
          key: 'question'
        })
      })
    }
  }
}
</script>
