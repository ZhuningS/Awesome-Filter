<style lang="scss">
#todo-nav {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  padding-left: 10px;
  overflow: hidden;

  .todo-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 24px;
    border: 1px solid;
    color: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
  }

  .level-0 {
    border-color: #909399;
    background-color: #909399;
  }

  .level-1 {
    background-color: #67c23a;
    border-color: #67c23a;
  }

  .level-2 {
    background-color: #409eff;
    border-color: #409eff;
  }

  .level-3 {
    background-color: #e6a23c;
    border-color: #e6a23c;
  }

  .level-4 {
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
}
</style>

<template>
  <div id="todo-nav">
    <nuxt-link
      v-for="(item, index) in todo"
      v-if="item.value > 0"
      :key="index"
      :to="mapTodo(item.name, 'link')"
      :class="`level-${mapTodo(item.name, 'level')}`"
      class="todo-item"
    >
      {{ mapTodo(item.name, 'label') + '  ' + item.value }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TodoNav',
  computed: {
    todo() {
      return this.$store.state.todo
    }
  },
  methods: {
    mapTodo(name, key) {
      const list = [
        {
          name: 'users',
          label: '用户',
          level: 2,
          link: '/trial/user/process_1/'
        },
        {
          name: 'posts',
          label: '帖子',
          level: 4,
          link: '/trial/post/process_1/'
        },
        {
          name: 'images',
          label: '图片',
          level: 3,
          link: '/trial/image/process_1/'
        },
        {
          name: 'comments',
          label: '评论',
          level: 2,
          link: '/trial/comment/process_1/'
        },
        {
          name: 'bangumi',
          label: '番剧',
          level: 1,
          link: '/edit/bangumi/'
        },
        {
          name: 'role',
          label: '偶像',
          level: 1,
          link: '/edit/role/'
        },
        {
          name: 'score',
          label: '漫评',
          level: 3,
          link: '/trial/review/process_1/'
        },
        {
          name: 'question',
          label: '提问',
          level: 3,
          link: '/trial/question/process_1/'
        },
        {
          name: 'answer',
          label: '回答',
          level: 3,
          link: '/trial/answer/process_1/'
        },
        {
          name: 'report',
          label: '举报',
          level: 4,
          link: '/report/list/'
        }
      ]
      return list.filter(_ => _.name === name)[0][key]
    }
  }
}
</script>
