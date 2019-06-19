<style lang="scss">
#trial-answer-process-1 {
  margin: 0 auto;
  max-width: 650px;

  .el-card {
    margin-bottom: 30px;

    img {
      max-width: 100%;
    }

    .title {
      padding: 15px;
      display: block;
      font-weight: bold;
      font-size: 15px;
      border-bottom: 1px solid $color-gray-normal;
    }

    .control {
      padding: 15px;
      background-color: $color-gray-light;
    }

    .json-content-txt-parser {
      margin-left: 15px;
      margin-right: 15px;
      margin-top: 15px;
    }
  }
}
</style>

<template>
  <div
    v-loading="loading"
    id="trial-answer-process-1"
  >
    <el-col
      v-for="(item, index) in list"
      :key="item.id"
    >
      <el-card :body-style="{ padding: '0px' }">
        <a
          :href="$alias.answer(item.id)"
          class="title"
          target="_blank"
        >点击查看内容</a>
        <json-content :content="item.content"/>
        <div class="control">
          <div class="bottom clearfix">
            <template v-if="item.deleted_at">
              <el-button
                type="success"
                size="mini"
                @click="submit('approve', item.id, index)"
              >确认删除</el-button>
              <el-button
                type="success"
                size="mini"
                @click="submit('reject', item.id, index)"
              >恢复答案</el-button>
            </template>
            <template v-else>
              <el-button
                type="success"
                size="mini"
                @click="submit('pass', item.id, index)"
              >通过</el-button>
              <el-button
                type="danger"
                size="mini"
                @click="submit('ban', item.id, index)"
              >删除</el-button>
            </template>
            <router-link
              :to="`/quick/user/?id=${item.user_id}`"
              style="margin-left: 10px"
            >
              <el-button
                type="primary"
                size="mini"
              >查看用户</el-button>
            </router-link>
          </div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import JsonContent from '~/components/jsonEditor/JsonContent'

export default {
  name: 'TrialAnswerProcess1',
  components: {
    JsonContent
  },
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
        .$get('admin/trial/answer/list')
        .then(data => {
          this.list = data
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    submit(type, id, index) {
      this.$axios.$post(`admin/trial/answer/${type}`, { id }).then(() => {
        this.list.splice(index, 1)
        this.$store.commit('CHANGE_TODO', {
          key: 'answer'
        })
      })
    }
  }
}
</script>
