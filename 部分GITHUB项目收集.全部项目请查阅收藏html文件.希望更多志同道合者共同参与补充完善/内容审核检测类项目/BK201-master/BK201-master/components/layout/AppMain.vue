<template>
  <section
    :style="indexStyle"
    class="app-main"
  >
    <transition 
      name="fade-transform" 
      mode="out-in"
    >
      <router-view/>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    indexStyle() {
      if (this.$route.path === '/dashboard/') {
        return {
          backgroundColor: '#f0f2f5'
        }
      }
      return {}
    }
  }
}
</script>

<style lang="scss">
.app-main {
  min-height: calc(100vh - 84px);
  position: relative;
  overflow: hidden;
  padding: 30px;

  .page-header {
    margin-bottom: 30px;
  }
}
</style>
