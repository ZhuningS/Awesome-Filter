<style lang="scss">
#quick-user {
  margin-bottom: 150px;

  .user {
    margin-bottom: 50px;

    > div {
      margin-bottom: 20px;
      font-size: 16px;
    }

    .label {
      font-weight: bold;
      display: inline-block;
      text-align: right;
      width: 80px;
    }

    img {
      vertical-align: top;
    }

    .avatar {
      width: 150px;
      height: 150px;
    }

    .banner {
      height: 200px;
      width: auto;
    }
  }
}
</style>

<template>
  <div
    v-loading="searching"
    id="quick-user"
  >
    <header class="page-header">
      <user-search
        :disabled="true"
        @submit="getUserData"
      />
    </header>
    <div
      v-if="user"
      class="user"
    >
      <div>
        <span class="label">id：</span>
        {{ user.id }}
      </div>
      <div>
        <span class="label">昵称：</span>
        {{ user.nickname }}
      </div>
      <div>
        <span class="label">空间：</span>
        <a
          :href="$alias.user(user.zone)"
          target="_blank"
          v-text="user.zone"
        />
      </div>
      <div>
        <span class="label">头像：</span>
        <img
          :src="$resize(user.avatar, { width: 300 })"
          class="avatar"
        >
      </div>
      <div>
        <span class="label">背景：</span>
        <a
          :href="user.banner"
          target="_blank"
        >
          <img
            :src="$resize(user.banner, { height: 200, mode: 2 })"
            class="banner"
          >
        </a>
      </div>
      <div>
        <span class="label">签名：</span>
        {{ user.signature || '无' }}
      </div>
      <div>
        <span class="label">手机号：</span>
        {{ user.phone }}
      </div>
      <div>
        <span class="label">运营号：</span>
        {{ user.faker == 1 ? '是' : '否' }}
      </div>
      <div>
        <span class="label">总团子：</span>
        {{ user.coin_count }}，可提现：{{ user.coin_count - user.coin_from_sign }}
      </div>
      <div>
        <span class="label">等级：</span>
        {{ user.level }}，战斗力：{{ user.power }}
      </div>
      <div>
        <span class="label">性别：</span>
        {{ user.sex }}
      </div>
      <div>
        <span class="label">生日：</span>
        {{ user.birthday }}
      </div>
      <div>
        <span class="label">创建时间：</span>
        {{ user.created_at }}
      </div>
      <div>
        <span class="label">状态：</span>
        {{ user.deleted_at ? '已封禁' : user.state == 1 ? '审核中' : '正常' }}
      </div>
      <div>
        <span class="label">权限：</span>
        {{ user.is_admin == 1 ? '管理员' : '普通用户' }}
      </div>
      <div>
        <span class="label">操作：</span>
        <el-button
          v-if="user.state == 0"
          :loading="loading"
          type="warning"
          size="mini"
          @click="addUserToTrial"
        >加入审核列表</el-button>
        <el-button
          type="primary"
          size="mini"
          @click="showTransactions = !showTransactions; getTransactions(1)"
        >
          查看交易记录
        </el-button>
        <el-button
          v-if="!showInvite"
          :loading="loadingInvite"
          type="primary"
          size="mini"
          @click="getInvite(1)"
        >
          查看邀请视图
        </el-button>
        <el-button
          v-if="user.ip_address.length"
          type="primary"
          size="mini"
          @click="showIpAddress = !showIpAddress"
        >
          {{ showIpAddress ? '隐藏ip地址' : '查看ip地址' }}
        </el-button>
        <el-button
          v-if="user.deleted_at"
          :loading="loading"
          type="success"
          size="mini"
          @click="recover"
        >
          解禁
        </el-button>
        <el-button
          v-else
          :loading="loading"
          type="danger"
          size="mini"
          @click="block"
        >
          永久封禁
        </el-button>
        <el-tooltip
          v-if="user.banned_to"
          :content="user.banned_to"
          placement="top"
          effect="dark"
        >
          <el-button
            :loading="banning"
            type="primary"
            size="mini"
            @click="freeUser"
          >
            解除禁言
          </el-button>
        </el-tooltip>
        <el-popover
          v-else
          placement="right"
          width="220"
          trigger="hover">
          <el-date-picker
            v-model="banned_to"
            :picker-options="bannedOpts"
            align="right"
            type="datetime"
            placeholder="选择终点"
          />
          <el-button
            slot="reference"
            :loading="banning"
            type="danger"
            size="mini"
            style="margin-left: 10px;margin-right: 10px"
            @click="freezeUser"
          >
            禁言
          </el-button>
        </el-popover>
        <el-button
          v-if="isKing && user.coin_count - user.coin_from_sign >= 100"
          type="success"
          size="mini"
          @click="getMoney"
        >
          提现
        </el-button>
      </div>
    </div>
    <!-- 用户的 ip 列表 -->
    <el-collapse-transition>
      <el-table
        v-if="showIpAddress"
        :data="user.ip_address"
        border
        fit
        highlight-current-row
      >
        <el-table-column
          label="地址"
          prop="ip_address"
        />
        <el-table-column
          label="封禁状态"
        >
          <template slot-scope="scope">
            <el-tag v-if="scope.row.blocked !== '1'">正常</el-tag>
            <el-tag
              v-else
              type="danger"
            >
              已封禁
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="记录时间"
          prop="created_at"
        />
        <el-table-column
          label="操作时间"
          prop="updated_at"
        />
      </el-table>
    </el-collapse-transition>
    <!-- 用户的交易记录 -->
    <template v-if="showTransactions">
      <el-table
        :data="pageData"
        border
        fit
        highlight-current-row
      >
        <el-table-column
          label="id"
          prop="id"
        />
        <el-table-column
          label="类型"
          prop="type"
        />
        <el-table-column label="金额">
          <span slot-scope="scope">
            {{ scope.row.type === '支出' ? '-' : '+' }}{{ scope.row.count }}
          </span>
        </el-table-column>
        <el-table-column
          label="来源"
          prop="action"
        />
        <el-table-column
          label="来源id"
          prop="action_id"
        />
        <el-table-column label="相关用户 id">
          <a
            slot-scope="scope"
            :href="`/user/show/?id=${scope.row.about_user_id}`"
            target="_blank"
            v-text="scope.row.about_user_id"
          />
        </el-table-column>
        <el-table-column
          label="相关用户手机号"
          prop="about_user_phone"
        />
        <el-table-column
          label="相关用户注册时间"
          prop="about_user_sign_at"
        />
        <el-table-column
          label="交易时间"
          prop="created_at"
        />
      </el-table>
      <v-page
        :change="getTransactions"
        :state="pageState"
      />
    </template>
    <!-- 用户的邀请视图 -->
    <v-dialog
      v-if="user"
      v-model="showInvite"
      :fullscreen="true"
      :title="`${user.nickname}邀请的人`"
      :footer="false"
      :loading="loadingInvite"
    >
      <div class="container">
        <ve-histogram
          v-if="inviteUserLevelChartData"
          :data="inviteUserLevelChartData"
        />
        <ve-histogram
          v-if="inviteUserPowerChartData"
          :data="inviteUserPowerChartData"
        />
      </div>
    </v-dialog>
  </div>
</template>

<script>
import pageMixin from '~/mixins/page'

export default {
  name: 'QuickUser',
  mixins: [pageMixin],
  data() {
    return {
      bannedOpts: {
        disabledDate(time) {
          return time.getTime() < Date.now()
        },
        shortcuts: [
          {
            text: '30分钟',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 500)
              picker.$emit('pick', date)
            }
          },
          {
            text: '1小时',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000)
              picker.$emit('pick', date)
            }
          },
          {
            text: '3小时',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 3)
              picker.$emit('pick', date)
            }
          },
          {
            text: '6小时',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 6)
              picker.$emit('pick', date)
            }
          },
          {
            text: '12小时',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 12)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '三天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 3)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      searching: false,
      user: null,
      loading: false,
      showTransactions: false,
      showIpAddress: false,
      banned_to: null,
      banning: false,
      showInvite: false,
      loadingInvite: false,
      inviteList: []
    }
  },
  computed: {
    isKing() {
      return this.$store.state.user.id === 1
    },
    queryId() {
      return +(this.$route.query.id || 0)
    },
    queryZone() {
      return this.$route.query.zone || ''
    },
    queryIp() {
      return this.$route.query.ip || ''
    },
    inviteUserLevelChartData() {
      if (!this.inviteList.length) {
        return null
      }
      const resource = _.mapValues(_.groupBy(this.inviteList, 'level'), clist =>
        clist.map(item => _.omit(item, 'level'))
      )
      const result = []
      Object.keys(resource).forEach(level => {
        result.push({
          等级: level,
          人数: resource[level].length,
          list: resource[level]
        })
      })
      return {
        columns: ['等级', '人数'],
        rows: result
      }
    },
    inviteUserPowerChartData() {
      if (!this.inviteList.length) {
        return null
      }
      const resource = _.mapValues(_.groupBy(this.inviteList, 'power'), clist =>
        clist.map(item => _.omit(item, 'power'))
      )
      const result = []
      Object.keys(resource).forEach(power => {
        result.push({
          战斗力: power,
          人数: resource[power].length,
          list: resource[power]
        })
      })
      return {
        columns: ['战斗力', '人数'],
        rows: result
      }
    }
  },
  created() {
    if (this.queryId) {
      this.getUserData({
        type: 'id',
        value: this.queryId
      })
    }
    if (this.queryZone) {
      this.getUserData({
        type: 'zone',
        value: this.queryZone
      })
    }
    if (this.queryIp) {
      this.getUserData({
        type: 'ip_address',
        value: this.queryIp
      })
    }
  },
  methods: {
    async getInvite() {
      if (this.showInvite) {
        this.showInvite = false
        return
      }
      if (this.inviteList.length) {
        this.showInvite = true
        return
      }
      if (this.loadingInvite) {
        return
      }
      this.loadingInvite = true
      this.$axios
        .$get('user/invite/list', {
          params: { id: this.user.id }
        })
        .then(data => {
          this.inviteList = data
          this.showInvite = true
          this.loadingInvite = false
        })
        .catch(() => {
          this.loadingInvite = false
        })
    },
    async freezeUser() {
      if (this.canNot('禁言用户')) {
        return
      }
      if (!this.banned_to) {
        this.$toast.error('请先选择禁言时长')
        return
      }
      this.banning = true
      this.$axios
        .$post('admin/user/banned/freeze', {
          id: this.user.id,
          banned_to: this.banned_to
        })
        .then(() => {
          this.user.banned_to = this.banned_to.toString()
          this.banning = false
        })
        .catch(() => {
          this.banning = false
        })
    },
    async freeUser() {
      if (this.canNot('解除用户禁言')) {
        return
      }
      this.banning = true
      this.$axios
        .$post('admin/user/banned/free', {
          id: this.user.id
        })
        .then(() => {
          this.user.banned_to = null
          this.banning = false
        })
        .catch(() => {
          this.banning = false
        })
    },
    async getTransactions(page) {
      if (page <= this.pageState.max) {
        this.pageState.cur = page
        return
      }
      if (this.pageLoading) {
        return
      }
      this.pageLoading = true
      this.pageState.size = 20
      this.$axios
        .$post('admin/user/transactions', {
          id: this.user.id,
          to_page: page,
          cur_page: this.pageState.cur,
          take: this.pageState.size
        })
        .then(data => {
          this.pageState.total = data.total
          this.pageState.cur = page
          this.pageState.max = page
          if (page === 1) {
            this.pageList = data.list
          } else {
            this.pageList = this.pageList.concat(data.list)
          }
          this.pageLoading = false
        })
        .catch(() => {
          this.pageLoading = false
        })
    },
    async getUserData(data) {
      if (this.searching) {
        return
      }
      this.searching = true
      this.$axios
        .$get('admin/search/user', {
          params: data
        })
        .then(result => {
          if (data.type === 'ip_address') {
            const ids = result.filter(_ => _ !== '0')
            this.$toast.success(`共找到 ${ids.length} 个用户`)
            /*
             ids.forEach(item => {
             window.open(`${window.location.href.split('?')[0]}?id=${item}`)
             })
             */
            return
          }
          this.user = result
          this.inviteList = []
          this.searching = false
        })
        .catch(() => {
          this.searching = false
        })
    },
    async addUserToTrial() {
      if (this.canNot('添加用户到审核池')) {
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('admin/user/add_to_trial', { id: this.user.id })
        .then(() => {
          this.user.state = 1
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    async recover() {
      if (this.canNot('解禁用户')) {
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('admin/trial/user/recover', { id: this.user.id })
        .then(() => {
          this.user.deleted_at = null
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    async block() {
      if (this.canNot('封禁用户')) {
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('admin/trial/user/ban', { id: this.user.id })
        .then(() => {
          this.user.deleted_at = Date.now()
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    getMoney() {
      if (this.canNot('为用户提现')) {
        return
      }
      this.$prompt('输入要提现的金额', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          const data = +value
          if (data !== data) {
            this.$toast.error('错误的格式')
            return
          }
          if (!/^\d+$/.test(data)) {
            this.$toast.error('必须是整数')
            return
          }
          if (data <= 0) {
            this.$toast.error('必须大于0')
            return
          }
          this.$axios.$post('admin/user/withdrawal', {
            id: this.user.id,
            money: data
          })
        })
        .catch(() => {})
    }
  }
}
</script>
