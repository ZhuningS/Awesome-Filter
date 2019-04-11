export default {
  methods: {
    mapTitle(title) {
      return {
        dashboard: '首页',
        blacklist: '敏感词',
        'blacklist-test': '审核测试',
        'blacklist-words': '敏感词库',
        'blacklist-edit': '预修改',
        report: '举报',
        'report-list': '用户举报',
        'report-manager': '举报管理',
        edit: '公众编辑',
        'edit-bangumi': '番剧',
        'edit-role': '偶像',
        log: '日志',
        'log-user': '审核员',
        'log-text': '内容记录',
        trial: '审核',
        'trial-answer-process_1': '回答',
        'trial-comment-process_1': '评论',
        'trial-image-process_1': '图片',
        'trial-post-process_1': '帖子',
        'trial-question-process_1': '提问',
        'trial-review-process_1': '漫评',
        'trial-user-process_1': '用户',
        quick: '快速通道',
        'quick-user': '用户',
        'quick-text': '内容'
      }[title]
    },
    mapIcon(icon) {
      // icons: https://fontawesome.com/icons?d=gallery&s=solid
      return {
        dashboard: 'tachometer-alt',
        blacklist: 'skull',
        'blacklist-edit': 'pen-nib',
        'blacklist-test': 'thumbtack',
        'blacklist-words': 'file-word',
        report: 'user-secret',
        'report-list': 'poll-h',
        'report-manager': 'sliders-h',
        log: 'life-ring',
        'log-user': 'search-location',
        'log-text': 'luggage-cart',
        edit: 'medal',
        'edit-bangumi': 'film',
        'edit-role': 'user-injured',
        trial: 'crosshairs',
        'trial-answer-process_1': 'newspaper',
        'trial-comment-process_1': 'comments',
        'trial-image-process_1': 'file-image',
        'trial-post-process_1': 'file-alt',
        'trial-question-process_1': 'campground',
        'trial-review-process_1': 'envelope-open-text',
        'trial-user-process_1': 'user-ninja',
        quick: 'fighter-jet',
        'quick-text': 'campground',
        'quick-user': 'user-astronaut'
      }[icon]
    },
    mapVisit(title, store = null) {
      if (title === 'dashboard') {
        return true
      }
      const list = {}
      const must = {
        'blacklist-words': '查看敏感词库',
        log: '审核员管理人',
        quick: '审核后台快速通道'
      }
      if (!list[title] && !must[title]) {
        return true
      }
      const roles = store
        ? store.state.user.roles
        : this.$store.state.user.roles
      if (must[title]) {
        return roles.some(_ => _ === must[title])
      }
      if (
        roles.some(
          _ => ~['幕后主使者', '继承繁星之人', '被神所眷恋之人'].indexOf(_)
        )
      ) {
        return true
      }
      return roles.some(_ => _ === list[title])
    }
  }
}
