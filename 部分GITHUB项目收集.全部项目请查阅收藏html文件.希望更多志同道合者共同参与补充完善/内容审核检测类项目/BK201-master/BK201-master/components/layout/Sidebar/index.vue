<style lang="scss">
.scrollbar-wrapper {
  background-color: #304156;
}
</style>

<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      v-if="user"
      :show-timeout="200"
      :default-active="computedActiveRoute"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item 
        v-for="route in routes" 
        :key="route.path" 
        :item="route" 
        :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      const { routes } = this.$router.options
      const beginPath = '/dashboard'
      const endPath = '/log'
      let firstIndex
      let lastIndex
      // 有什么更好的排序方法吗？
      routes.forEach((item, index) => {
        if (item.path === beginPath) {
          firstIndex = index
        }
        if (item.path === endPath) {
          lastIndex = index
        }
      })
      const result = routes.filter(_ => !~[beginPath, endPath].indexOf(_.path))
      result.unshift(routes[firstIndex])
      result.push(routes[lastIndex])
      return result
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    computedActiveRoute() {
      if (
        this.$route.matched.some(
          _ => _.path.substring(_.path.length - 1) === '?'
        )
      ) {
        const path = this.$route.matched[this.$route.matched.length - 1].path
        const arr = path.split('/')
        arr.pop()
        return arr.join('/')
      }
      return this.$route.path
    },
    user() {
      return this.$store.state.user.id
    }
  }
}
</script>
