<style lang="scss">
.image-preview {
  .body {
    .el-input {
      margin-top: 20px;
      margin-bottom: 50px;
      padding: 0 50px;
    }

    .el-input__inner {
      border-top: none;
      border-left: none;
      border-right: none;
      text-align: center;
    }

    .uploader {
      margin: 50px auto;
      width: 360px;
    }
  }

  .footer {
    text-align: right;
    line-height: $preview-footer-height;
    height: $preview-footer-height;
  }
}
</style>

<template>
  <div class="image-preview">
    <div class="body">
      <div
        v-if="item.url"
        class="wrapper"
      >
        <v-img
          :src="item.url"
          :width="item.width"
          :height="item.height"
          :full="true"
          :lazy="false"
        />
        <el-input
          v-model.trim="desc"
          maxlength="45"
          placeholder="添加图片描述"
          class="focus-textarea mousetrap"
        />
      </div>
      <el-upload
        v-else
        :data="uploadHeaders"
        :action="imageUploadAction"
        :accept="imageUploadAccept"
        :before-upload="beforeUpload"
        :on-success="handleImageUploadSuccess"
        drag
        class="uploader"
      >
        <i class="el-icon-upload"/>
        <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </div>
    <div class="footer">
      <el-upload
        :data="uploadHeaders"
        :action="imageUploadAction"
        :accept="imageUploadAccept"
        :show-file-list="false"
        :before-upload="beforeUpload"
        :on-success="handleImageUploadSuccess"
        style="display: inline-block;margin-right: 10px"
      >
        <el-button
          v-if="item.url"
          size="small"
          plain
          round
        >更换图片</el-button>
      </el-upload>
      <el-button
        v-if="item.url"
        size="small"
        type="primary"
        round
        class="save-btn"
        @click="emitSave"
      >保存</el-button>
    </div>
  </div>
</template>

<script>
import uploadMixin from '~/mixins/upload'

export default {
  name: 'ImgPreview',
  mixins: [uploadMixin],
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      saving: false
    }
  },
  computed: {
    desc: {
      get() {
        return this.item.text
      },
      set(value) {
        this.$store.commit('editor/UPDATE_SECTION_TEXT', { value })
      }
    }
  },
  mounted() {
    this.getUpToken()
    this.$channel.$on('write-save-done', () => {
      this.saving = false
    })
  },
  methods: {
    handleImageUploadSuccess(res) {
      this.$store.commit('editor/UPDATE_SECTION_IMAGE', {
        url: res.data.url,
        width: res.data.width,
        height: res.data.height,
        size: res.data.size,
        mime: res.data.type
      })
      this.$toast.success('上传成功')
    },
    beforeUpload(file) {
      this.uploadConfig.max = 5
      this.uploadConfig.pathPrefix = `user/${this.$store.state.user.id}/create`
      return this.beforeImageUpload(file)
    },
    emitSave() {
      if (!this.item.url) {
        return
      }
      this.$channel.$emit('write-save')
      this.saving = true
    }
  }
}
</script>
