<style lang="scss" module>
$transition: 0.4s linear;
$placeholder-color: #ddd;

.inline {
  position: relative;
  background-color: transparent;
  transition: $transition;
  overflow: hidden;
  display: block;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.block {
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  background-color: transparent;
  transition: $transition;
  overflow: hidden;
  display: block;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.avatar {
  border-radius: 50%;
}

.poster {
  border-radius: 10%;
}

.retry {
  background-color: $placeholder-color;
  opacity: 0.3;
  position: relative;
  cursor: pointer;

  img {
    display: none;
  }
}

.message {
  color: #000;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.padding {
  width: 100%;
  height: 0;
}

.shim {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;

  img {
    margin: 0 auto;
  }
}

.unload {
  background-color: $placeholder-color;
  opacity: 0.3;

  img {
    display: none;
  }
}
</style>

<template>
  <div
    v-if="full"
    :class="[
      $style.block,
      {
        [$style.unload]: !loaded,
        [$style.retry]: error,
        [$style.avatar]: avatar,
        [$style.poster]: poster
      }
    ]"
    :style="lazyFullStyle"
  >
    <div
      :style="fullImagePaddingShim"
      :class="$style.padding"
    />
    <div
      ref="shim"
      :class="$style.shim"
    >
      <img
        ref="img"
        :src="$isServer ? '' : loaded ? fullImageSrc : placeholderImage"
        :style="{ width: computeShimWidth }"
        @error="handleImageLoadError"
        @load="handleImageLoadSuccess"
      >
    </div>
    <div
      v-if="error"
      :class="$style.error"
    >
      <span
        :class="$style.message"
        v-text="message"
      />
    </div>
  </div>
  <span
    v-else
    :class="[
      $style.inline,
      {
        [$style.unload]: !loaded,
        [$style.avatar]: avatar,
        [$style.poster]: poster
      }
    ]"
    :style="normalImageStyle"
  >
    <img
      ref="img"
      :src="error ? errorPlaceholder : $isServer ? '' : loaded ? flowImageSrc : placeholderImage"
      @error="handleImageLoadError"
    >
  </span>
</template>

<script>
import utils from './utils'

// TODO large height image cropper & click show all
// TODO large GIF click load
// TODO test render when use v-show
// TODO watch src change

export default {
  name: 'VImg',
  props: {
    src: {
      required: true,
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 0
    },
    full: {
      type: Boolean,
      default: false
    },
    mime: {
      type: String,
      default: ''
    },
    lazy: {
      type: Boolean,
      default: true
    },
    avatar: {
      type: Boolean,
      default: false
    },
    poster: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loaded: false,
      error: false,
      containerWidth: 0,
      message: '',
      placeholderImage: '',
      errorPlaceholder: '',
      errorMessage: '',
      retryMessage: '',
      heightLimit: 0,
      loadLimit: 0,
      retryLimit: 0
    }
  },
  computed: {
    lazyFullStyle() {
      return {
        width: `${this.width}px`,
        height: this.computeContainerHeight
          ? `${this.computeContainerHeight}px`
          : 'auto'
      }
    },
    computeContainerHeight() {
      if (this.$isServer) {
        return 0
      }
      if (this.width >= this.containerWidth) {
        return parseInt((this.height / this.width) * this.containerWidth, 10)
      }
      return this.height
    },
    fullImagePaddingShim() {
      if (this.width >= this.containerWidth) {
        return {
          paddingTop: `${(this.height / this.width) * 100}%`
        }
      }
      return {
        paddingTop: `${(this.height / this.containerWidth) * 100}%`
      }
    },
    computeShimWidth() {
      return this.width >= this.containerWidth ? '100%' : `${this.width}px`
    },
    convertImageReallyWidth() {
      const numberWidth = +this.width
        .toString()
        .replace('px', '')
        .replace('%', '')
      return parseInt(
        /%$/.test(this.width)
          ? (this.containerWidth / 50) * numberWidth
          : numberWidth * 2,
        10
      )
    },
    normalImageStyle() {
      return this.size
        ? {
            width: this.convertSize(this.size),
            height: this.convertSize(this.size)
          }
        : {
            width: this.convertSize(this.width),
            height: this.convertSize(this.height)
          }
    },
    shouldClickToLoad() {
      return !!(
        this.size &&
        this.mime &&
        this.loadLimit &&
        /gif/i.test(this.mime) &&
        this.size - this.loadLimit > 0
      )
    },
    fullImageSrc() {
      let resultWidth
      let resultHeight
      if (this.width > this.containerWidth) {
        resultWidth = this.containerWidth * 2
        resultHeight = this.computeContainerHeight * 2
      } else {
        resultWidth = this.width
        resultHeight = this.height
      }
      if (resultWidth > 9999) {
        resultHeight = parseInt((9999 / resultWidth) * resultHeight, 10)
        resultWidth = 9999
      }
      if (resultHeight > 9999) {
        resultWidth = parseInt((9999 / resultHeight) * resultWidth, 10)
        resultHeight = 9999
      }
      return this.$resize(this.src, {
        width: resultWidth,
        height: resultHeight
      })
    },
    flowImageSrc() {
      if (this.full) {
        return this.width > this.containerWidth
          ? this.$resize(this.src, {
              width: this.containerWidth * 2,
              height: this.computeContainerHeight * 2
            })
          : this.$resize(this.src, {
              width: this.width,
              height: this.height
            })
      }
      return this.$resize(
        this.src,
        this.size
          ? {
              width: +this.size * 2
            }
          : this.width === 'auto'
            ? {
                height: +this.height * 2,
                mode: 2
              }
            : {
                width: this.convertImageReallyWidth,
                height: +this.height * 2
              }
      )
    }
  },
  mounted() {
    this.containerWidth = this.$el.parentNode.offsetWidth
    if (
      !this.lazy ||
      window.__closeImageLazy__ ||
      utils.checkInView(this.$el)
    ) {
      this.loadImageResource()
    } else {
      this.bindLazyEvent()
    }
  },
  methods: {
    bindLazyEvent() {
      const eventId = utils.on(
        document,
        'scroll',
        utils.throttle(() => {
          if (utils.checkInView(this.$el)) {
            this.loadImageResource(false)
            utils.off(eventId)
          }
        }, 200),
        false
      )
    },
    bindRetryEvent() {
      const eventId = utils.on(
        this.$el,
        'click',
        e => {
          this.retryLimit--
          this.message = this.retryMessage
          this.loadImageResource(true)
          utils.off(eventId)
          e.stopPropagation()
        },
        false
      )
    },
    loadImageResource(force) {
      if (!this.shouldClickToLoad || force) {
        this.loaded = true
      }
    },
    convertSize(size) {
      if (/px$/.test(size)) {
        return size
      }
      if (/%$/.test(size)) {
        return size
      }
      return `${size}px`
    },
    handleImageLoadSuccess() {
      this.error = false
    },
    handleImageLoadError() {
      this.error = true
      if (this.full && this.retryLimit >= 0) {
        this.message = this.errorMessage
        this.bindRetryEvent()
      }
    }
  }
}
</script>
