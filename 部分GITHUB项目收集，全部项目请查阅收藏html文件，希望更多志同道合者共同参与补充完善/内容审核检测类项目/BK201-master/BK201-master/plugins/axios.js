import { Message } from 'element-ui'

const generateRequestError = err => {
  if (/timeout of/.test(err.message)) {
    err.statusCode = 504
    err.message = '网路请求超时，请稍候再试！'
    return err
  }
  if (!err.response) {
    err.statusCode = 502
    err.message = '网络错误，请刷新网页重试！'
    return err
  }
  err.statusCode = err.response.status
  err.message = err.response.data.message
  return err
}

export default ({ $axios, redirect, app }) => {
  $axios.setHeader('Accept', 'application/x.api.latest+json')
  if (app.store.state.user) {
    $axios.setToken(app.store.state.user.token, 'Bearer')
  }

  $axios.onRequest(config => {
    config.baseURL = process.env.API_URL
    return config
  })

  $axios.onResponse(resp => {
    if (
      resp.config.method === 'post' &&
      !/\/door\/refresh/.test(resp.config.url)
    ) {
      Message.success('操作成功')
    }
    return resp.data
  })

  $axios.onError(error => {
    const err = generateRequestError(error)
    Message.error(err.message)
    if (err.statusCode === 401) {
      app.store.commit('USER_LOGOUT')
      redirect('/login')
    }
  })
}
