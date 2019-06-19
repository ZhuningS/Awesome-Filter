export default {
  methods: {
    hasRole(name) {
      const roles = this.$store.state.user.roles
      if (roles.some(_ => _ === '幕后主使者')) {
        return true
      }
      return roles.some(_ => _ === name)
    },
    canNot(name) {
      const roles = this.$store.state.user.roles
      if (roles.some(_ => _ === '继承繁星之人')) {
        // 只能看，什么都不能操作
        this.$toast.warn('您没有权限做这个操作')
        return true
      }
      if (roles.some(_ => _ === '被神所眷恋之人')) {
        // 除了看管理后台，其它的都能操作
        return false
      }
      const result = !this.hasRole(name)
      if (result) {
        this.$toast.warn('权限不足')
      }
      return result
    }
  }
}
