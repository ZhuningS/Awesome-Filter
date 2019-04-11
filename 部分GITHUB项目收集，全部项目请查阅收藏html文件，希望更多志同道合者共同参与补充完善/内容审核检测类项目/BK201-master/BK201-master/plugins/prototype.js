import Vue from 'vue'
import captcha from '~/assets/js/captcha'
import Toast from '~/assets/js/toast'
import Cookies from 'js-cookie'
import Alias from '~/assets/js/alias'

Vue.use({
  install(Vue) {
    Vue.prototype.$channel = new Vue()

    Vue.prototype.$cookie = Cookies

    Vue.prototype.$captcha = captcha

    Vue.prototype.$toast = Toast

    Vue.prototype.$alias = Alias

    Vue.prototype.$resize = (url, options = {}) => {
      if (!url) {
        return ''
      }

      if (/imageMogr2/.test(url)) {
        return url
      }

      const link = /^http/.test(url) ? url : `https://image.calibur.tv/${url}`
      const canUseWebP = () => {
        if (Vue.prototype.$isServer) {
          return false
        }
        if (window.supportWebP !== undefined) {
          return window.supportWebP
        }

        const elem = document.createElement('canvas')

        if (elem.getContext && elem.getContext('2d')) {
          const support =
            elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
          window.supportWebP = support
          return support
        }

        return false
      }

      const useWebP = options.webP === undefined ? true : options.webP
      const format = canUseWebP() && useWebP ? '/format/webp' : ''
      const mode = options.mode === undefined ? 1 : options.mode

      if (
        (mode === 1 && !options.width) ||
        (!options.width && !options.height)
      ) {
        return `${link}?imageMogr2/auto-orient/strip${format}`
      }

      let width
      let height

      if (mode === 1) {
        width = `/w/${options.width}`
        height = options.height ? `/h/${options.height}` : `/h/${options.width}`
      } else {
        width = options.width ? `/w/${options.width}` : ''
        height = options.height ? `/h/${options.height}` : ''
      }

      return `${link}?imageMogr2/auto-orient/strip|imageView2/${mode}${width}${height}${format}`
    }
  }
})
