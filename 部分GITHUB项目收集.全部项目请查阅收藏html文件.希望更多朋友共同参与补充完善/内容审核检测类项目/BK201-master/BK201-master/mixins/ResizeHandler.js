const { body } = document
const WIDTH = 1024
const RATIO = 3

export default {
  watch: {
    $route() {
      if (this.device === 'mobile' && this.sidebar.opened) {
        this.$store.dispatch('app/CloseSideBar', { withoutAnimation: false })
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    const isMobile = this.isMobile()
    if (isMobile) {
      this.$store.dispatch('app/ToggleDevice', 'mobile')
      this.$store.dispatch('app/CloseSideBar', { withoutAnimation: true })
    }
  },
  methods: {
    isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        this.$store.dispatch(
          'app/ToggleDevice',
          isMobile ? 'mobile' : 'desktop'
        )

        if (isMobile) {
          this.$store.dispatch('app/CloseSideBar', { withoutAnimation: true })
        }
      }
    }
  }
}
