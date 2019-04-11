export default {
  data() {
    return {
      pageState: {
        max: 0,
        cur: 0,
        size: 10,
        total: 0
      },
      pageLoading: false,
      pageList: []
    }
  },
  computed: {
    pageData() {
      if (!this.pageList.length) {
        return []
      }
      const begin = (this.pageState.cur - 1) * this.pageState.size
      return this.pageList.slice(begin, begin + this.pageState.size)
    }
  },
  methods: {
    handlePageChange(val) {
      this.pageState.cur = val
    },
    resetPageState() {
      this.pageState = {
        max: 0,
        cur: 0,
        size: 10,
        total: 0
      }
    }
  }
}
