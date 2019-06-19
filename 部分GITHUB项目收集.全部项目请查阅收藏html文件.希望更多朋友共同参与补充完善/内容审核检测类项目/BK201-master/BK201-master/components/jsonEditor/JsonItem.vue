<style lang="scss">
.json-item {
  margin-bottom: 30px;
  height: 102px;
  width: 100%;
  position: relative;

  &.selected {
    .show-area {
      border-color: $color-blue-normal;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }

  .delete-btn {
    position: absolute;
    left: 62px;
    top: 23px;
  }

  .up-btn {
    position: absolute;
    right: 5px;
    top: 5px;
  }

  .show-area {
    background-color: $color-gray-normal;
    border: 1px solid transparent;
    transition-duration: 0.3s;
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;

    .capture {
      float: left;
      width: 76px;
      height: 76px;
      margin-right: 10px;

      .poster {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
      }

      .default {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 76px;
        font-size: 30px;
        color: #fff;

        &.yellow {
          background-color: gold;
        }

        &.green {
          background-color: #67c23a;
        }

        &.blue {
          background-color: $color-blue-normal;
        }

        &.pink {
          background-color: $color-pink-deep;
        }

        &.purple {
          background-color: #9266f9;
        }
      }
    }

    .content {
      overflow: hidden;
      height: 76px;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-right: 6px;

      .text {
        font-size: 13px;
        line-height: 16px;
        color: $color-text-normal;
        @extend %breakWord;

        &.line-4 {
          -webkit-line-clamp: 4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }

        &.line-3 {
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }

        &.oneline {
          font-weight: bold;
        }
      }

      ul li {
        list-style-type: disc;
      }

      ol li {
        list-style-type: decimal;
      }

      ul,
      ol {
        margin-left: 1.5em;
      }

      blockquote {
        border-left: 4px solid $color-gray-deep;
        padding-left: 10px;
        margin-left: 5px;
      }
    }
  }

  .append-area {
    text-align: center;

    button {
      margin: 0 8px;
    }
  }
}
</style>

<template>
  <div
    :class="[{ selected }, `json-item-${index}`]"
    class="json-item"
  >
    <el-button
      v-if="selected && sectionCount > 1"
      type="danger"
      icon="el-icon-delete"
      class="delete-btn"
      size="mini"
      circle
      @click="emitDelete"
    />
    <el-button
      v-if="selected && index"
      class="up-btn"
      icon="el-icon-arrow-up"
      size="mini"
      circle
      @click="emitSort"
    />
    <div
      class="show-area"
      @click="emitPreview"
    >
      <div class="capture">
        <template v-if="item.type === 'img'">
          <div
            v-if="item.url"
            :style="{ backgroundImage: `url(${$resize(item.url, { width: 150 })})` }"
            class="poster"
          />
          <div
            v-if="!item.url"
            class="default green"
          >
            <i class="iconfont icon-image"/>
          </div>
        </template>
        <div
          v-else-if="item.type === 'txt'"
          class="default yellow"
        >
          <i class="iconfont icon-text"/>
        </div>
        <div
          v-else-if="item.type === 'list'"
          class="default blue"
        >
          <i class="iconfont icon-list"/>
        </div>
        <div
          v-else-if="item.type === 'use'"
          class="default pink"
        >
          <i class="iconfont icon-use"/>
        </div>
        <div
          v-else-if="item.type === 'title'"
          class="default purple"
        >
          <i class="iconfont icon-title"/>
        </div>
      </div>
      <div class="content">
        <template v-if="item.type === 'txt'">
          <div
            v-if="item.text"
            class="text line-4"
            v-html="item.text"
          />
          <div
            v-else
            class="text"
          >点击添加文字</div>
        </template>
        <template
          v-else-if="item.type === 'img'"
        >
          <div
            v-if="item.text"
            class="text line-4"
            v-html="item.text"
          />
          <div
            v-else-if="item.url"
            class="text"
          >
            点击编辑图片
          </div>
          <div
            v-else
            class="text"
          >
            点击上传图片
          </div>
        </template>
        <template v-else-if="item.type === 'list'">
          <div
            v-if="item.text"
            class="text line-4"
          >
            <ol v-if="item.sort === '1'">
              <li
                v-for="(li, index) in computeList(item.text)"
                :key="index"
              >
                <span
                  class="oneline"
                  v-text="li"/>
              </li>
            </ol>
            <ul v-else>
              <li
                v-for="(li, index) in computeList(item.text)"
                :key="index"
              >
                <span
                  class="oneline"
                  v-text="li"/>
              </li>
            </ul>
          </div>
          <div
            v-else
            class="text"
          >点击添加列表</div>
        </template>
        <template v-else-if="item.type === 'use'">
          <blockquote
            v-if="item.text"
            class="text line-4"
            v-html="item.text"
          />
          <div
            v-else
            class="text"
          >点击添加引用内容</div>
        </template>
        <template v-if="item.type === 'title'">
          <div
            v-if="item.text"
            class="text line-4"
            v-html="item.text"
          />
          <div
            v-else
            class="text"
          >点击添加标题</div>
        </template>
      </div>
    </div>
    <div class="append-area">
      <el-tooltip
        content="添加文本段落"
        placement="top"
        effect="dark"
      >
        <el-button
          type="warning"
          icon="iconfont icon-text"
          circle
          plain
          size="mini"
          @click="emitCreate('txt')"
        />
      </el-tooltip>
      <el-tooltip
        content="添加图片段落"
        placement="top"
        effect="dark"
      >
        <el-button
          type="success"
          icon="iconfont icon-image"
          circle
          plain
          size="mini"
          @click="emitCreate('img')"
        />
      </el-tooltip>
      <el-tooltip
        content="添加列表段落"
        placement="top"
        effect="dark"
      >
        <el-button
          type="primary"
          icon="iconfont icon-list"
          circle
          plain
          size="mini"
          @click="emitCreate('list')"
        />
      </el-tooltip>
      <el-tooltip
        content="添加引用段落"
        placement="top"
        effect="dark"
      >
        <el-button
          type="danger"
          icon="iconfont icon-use"
          circle
          plain
          size="mini"
          @click="emitCreate('use')"
        />
      </el-tooltip>
      <el-tooltip
        content="添加小标题"
        placement="top"
        effect="dark"
      >
        <el-button
          type="info"
          icon="iconfont icon-title"
          circle
          plain
          size="mini"
          @click="emitCreate('title')"
        />
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsonItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      required: true,
      default: false
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    sectionCount() {
      return this.$store.state.editor.sections.length
    }
  },
  methods: {
    emitPreview() {
      this.$emit('preview', { index: this.index })
    },
    emitCreate(type) {
      this.$emit('create', { index: this.index, type })
    },
    emitDelete() {
      this.$emit('delete', { index: this.index })
    },
    emitSort() {
      this.$emit('sort', { index: this.index })
    },
    computeList(text) {
      let list = text
      while (/\n\n/.test(list)) {
        list = list.replace(/\n\n/g, '\n')
      }
      return list.split('\n').slice(0, 4)
    }
  }
}
</script>
