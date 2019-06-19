<template>
  <div
    v-loading="pageLoading"
    id="report-list"
  >
    <el-table
      :data="pageData"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="类型">
        <template slot-scope="scope">
          {{ computeModel(scope.row) }}
        </template>
      </el-table-column>
      <el-table-column label="链接">
        <template slot-scope="scope">
          <a
            :href="computeModelId(scope.row)"
            target="_blank"
          >
            {{ computeModelId(scope.row) }}
          </a>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="small"
            type="primary"
            @click="detail(scope.row)"
          >详情</el-button>
          <el-button
            size="small"
            type="primary"
            @click="remove(scope.$index, scope.row)"
          >确认</el-button>
        </template>
      </el-table-column>
    </el-table>
    <v-dialog
      v-model="showDetailDialog"
      :footer="false"
      title="举报详情"
    >
      <el-table
        :data="details"
        border
        fit
        highlight-current-row
      >
        <el-table-column label="举报者id">
          <template slot-scope="scope">
            {{ computeUserId(scope.row) }}
          </template>
        </el-table-column>
        <el-table-column label="举报类型">
          <template slot-scope="scope">
            {{ computeType(scope.row) }}
          </template>
        </el-table-column>
        <el-table-column label="举报留言">
          <template slot-scope="scope">
            {{ computeMessage(scope.row) }}
          </template>
        </el-table-column>
      </el-table>
    </v-dialog>
    <v-page
      :state="pageState"
      :change="handlePageChange"
    />
  </div>
</template>

<script>
import pageMixin from '~/mixins/page'

export default {
  name: 'ReportList',
  mixins: [pageMixin],
  data() {
    return {
      details: [],
      showDetailDialog: false,
      typeMenus: [
        {
          key: 'post',
          val: '帖子'
        },
        {
          key: 'user',
          val: '用户'
        },
        {
          key: 'bangumi',
          val: '番剧'
        },
        {
          key: 'video',
          val: '视频'
        },
        {
          key: 'role',
          val: '偶像'
        },
        {
          key: 'image',
          val: '图片'
        },
        {
          key: 'score',
          val: '漫评'
        },
        {
          key: 'question',
          val: '提问'
        },
        {
          key: 'answer',
          val: '回答'
        },
        {
          key: 'post_comment',
          val: '帖子评论'
        },
        {
          key: 'image_comment',
          val: '图片评论'
        },
        {
          key: 'score_comment',
          val: '漫评评论'
        },
        {
          key: 'video_comment',
          val: '视频评论'
        },
        {
          key: 'question_comment',
          val: '提问评论'
        },
        {
          key: 'answer_comment',
          val: '回答评论'
        },
        {
          key: 'role_reply',
          val: '偶像回复'
        },
        {
          key: 'post_reply',
          val: '帖子回复'
        },
        {
          key: 'image_reply',
          val: '图片回复'
        },
        {
          key: 'score_reply',
          val: '漫评回复'
        },
        {
          key: 'video_reply',
          val: '视频回复'
        },
        {
          key: 'question_reply',
          val: '提问回复'
        },
        {
          key: 'answer_reply',
          val: '回答回复'
        },
        {
          key: 'role_reply',
          val: '偶像回复'
        }
      ],
      reportOpt: [
        {
          key: 0,
          val: '其它'
        },
        {
          key: 1,
          val: '违法违规'
        },
        {
          key: 2,
          val: '色情低俗'
        },
        {
          key: 3,
          val: '赌博诈骗'
        },
        {
          key: 4,
          val: '人身攻击'
        },
        {
          key: 5,
          val: '侵犯隐私'
        },
        {
          key: 6,
          val: '内容抄袭'
        },
        {
          key: 7,
          val: '垃圾广告'
        },
        {
          key: 8,
          val: '恶意引战'
        },
        {
          key: 9,
          val: '内容重复/刷屏'
        },
        {
          key: 10,
          val: '内容不相关'
        },
        {
          key: 11,
          val: '互刷团子'
        }
      ]
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      this.pageLoading = true
      this.$axios
        .$get('admin/report/list')
        .then(data => {
          this.pageState.cur = 1
          this.pageState.size = 15
          this.pageState.total = data.length
          this.pageList = data
          this.pageLoading = false
        })
        .catch(() => {
          this.pageLoading = false
        })
    },
    computeModel(type) {
      let result = ''
      this.typeMenus.forEach(item => {
        if (item.key === type.split('-')[0]) {
          result = item.val
        }
      })
      return result
    },
    computeModelId(type) {
      let prefix = ''
      let tail = ''
      let id = ''
      if (/_/.test(type)) {
        const one = type.split('_')
        const two = one[1].split('-')
        if (two[0] === 'reply') {
          // 子评论
          tail = `?comment-id=${two[3]}&reply-id=${two[1]}`
        } else {
          // 主评论
          tail = `?comment-id=${two[1]}`
        }
        prefix = one[0]
        id = two[2]
      } else {
        id = type.split('-')[1]
        prefix = type.split('-')[0]
      }
      if (prefix === 'score') {
        prefix = 'review'
      } else if (prefix === 'question') {
        prefix = 'qaq'
      } else if (prefix === 'answer') {
        prefix = 'soga'
      } else if (prefix === 'image') {
        prefix = 'pin'
      }
      if (prefix === 'user') {
        this.$router.push(`/quick/user/?id=${id}`)
        return 'javascript:;'
      }
      return `https://www.calibur.tv/${prefix}/${id}${tail}`
    },
    computeUserId(item) {
      return item.split('|')[0]
    },
    computeType(item) {
      const key = +item.split('|')[1]
      let result = key
      this.reportOpt.forEach(item => {
        if (item.key === key) {
          result = item.val
        }
      })
      return result
    },
    computeMessage(item) {
      const arr = item.split('|')
      arr.shift()
      arr.shift()
      return arr.join('')
    },
    async remove(index, data) {
      let tail = data
      const arr = data.split('-')
      if (arr.length > 2) {
        tail = `${arr[0]}-${arr[1]}`
      }
      this.$axios.$post('admin/report/remove', { tail }).then(() => {
        this.pageList.splice(
          (this.pageState.cur - 1) * this.pageState.size + index,
          1
        )
        this.$store.commit('CHANGE_TODO', {
          key: 'report'
        })
      })
    },
    async detail(data) {
      let tail = data
      const arr = data.split('-')
      if (arr.length > 2) {
        tail = `${arr[0]}-${arr[1]}`
      }
      this.$axios
        .$get('admin/report/item', {
          params: { tail }
        })
        .then(data => {
          this.details = data
          this.showDetailDialog = true
        })
    }
  }
}
</script>
