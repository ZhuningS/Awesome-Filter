import comp from './ImageLazyLoad.vue'

comp.install = function(Vue, opts = {}) {
  Vue.component(comp.name, {
    extends: comp,
    data() {
      return {
        heightLimit: opts.heightLimit || 0,
        loadLimit: opts.loadLimit || 0,
        retryLimit: opts.retryLimit || 3,
        placeholderImage:
          opts.placeholderImage ||
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        errorPlaceholder:
          opts.errorPlaceholder ||
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        errorMessage: opts.errorMessage || '图片加载失败，请点击重试',
        retryMessage: opts.retryMessage || '加载中...'
      }
    }
  })
}

export default comp
