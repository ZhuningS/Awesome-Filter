const host = 'https://www.calibur.tv'

export default {
  index: '/',

  __query(str, obj) {
    if (!obj) {
      return str
    }
    let query = '?'
    Object.keys(obj).forEach(item => {
      query += `${item}=${obj[item]}&`
    })
    return `${str.split('?').shift()}${query.substring(0, query.length - 1)}`
  },

  url(url, query) {
    return this.__query(`${host}${url}`, query)
  },

  user(zone, path = '') {
    return `${host}/user/${zone}/${path}`
  },

  bangumi(id, path = '') {
    return `${host}/bangumi/${id}/${path}`
  },

  video(id) {
    return `${host}/video/${id}`
  },

  score(id) {
    return `${host}/review/${id}`
  },

  image(id) {
    return `${host}/pin/${id}`
  },

  post(id, query) {
    return this.__query(`${host}/post/${id}`, query)
  },

  bangumiTag(id) {
    return id ? `${host}/bangumi/tags?id=${id}` : `${host}/bangumi/tags`
  },

  bangumiNews: `${host}/bangumi/news`,

  bangumiTimeline: `${host}/bangumi/timeline`,

  cartoonRole(id) {
    return `${host}/role/${id}`
  },

  editScore(id) {
    return `${host}/review/edit/${id}`
  },

  world(type) {
    return `${host}/world/${type}`
  },

  question(id) {
    return `${host}/qaq/${id}`
  },

  answer(id) {
    return `${host}/soga/${id}`
  },

  createScore: `${host}/review/create`,

  roleTrending: `${host}/role/trending`
}
