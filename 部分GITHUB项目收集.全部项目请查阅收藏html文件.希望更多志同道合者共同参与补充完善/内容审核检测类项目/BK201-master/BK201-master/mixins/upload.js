export default {
  data() {
    return {
      uploadHeaders: {
        key: '',
        token: ''
      },
      uploadConfig: {
        max: 5
      },
      imageUploadAccept: [
        'image/jpeg',
        'image/png',
        'image/jpg',
        'image/gif'
      ].toString(),
      imageUploadAction: 'https://upload.qiniup.com',
      imagePrefix: 'https://image.calibur.tv/',
      getUpTokenTimer: 0
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user
    }
  },
  watch: {
    currentUser: {
      handler: function(val) {
        this.uploadHeaders.token = val.uptoken.upToken
      },
      deep: true
    }
  },
  mounted() {
    this.getUpTokenTimer = setInterval(() => {
      this.getUpToken()
    }, 1000 * 60 * 30)
  },
  beforeDestroy() {
    this.getUpTokenTimer && clearInterval(this.getUpTokenTimer)
  },
  methods: {
    async getUpToken() {
      try {
        await this.$store.dispatch('getUpToken')
      } catch (e) {}
    },
    handleImageUploadError(err, file) {
      this.$toast.error(`图片：${file.name} 上传失败`)
    },
    beforeImageUpload(file) {
      const isFormat = ~this.imageUploadAccept.split(',').indexOf(file.type)
      const isLt5M = file.size / 1024 / 1024 < this.uploadConfig.max

      if (!isFormat) {
        this.$toast.error(
          `仅支持上传${this.imageUploadAccept
            .replace(/image\//g, '')
            .replace(/,/g, '、')}格式的图片`
        )
        return false
      }
      if (!isLt5M) {
        this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`)
        return false
      }

      const createFileName = ({ userId, page, file }) => {
        return `admin/${userId}${page}/${new Date().getTime()}-${Math.random()
          .toString(36)
          .substring(3, 6)}.${file.type.split('/').pop()}`
      }

      this.uploadHeaders.key = createFileName({
        userId: this.currentUser.id,
        page: this.$route.path,
        file
      })

      return true
    }
  }
}
