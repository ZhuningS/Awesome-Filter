import Cookies from 'js-cookie'
import { Message } from 'element-ui'
import permission from '~/assets/js/permission'

export default ({ app, store, route, redirect }) => {
  const { user } = store.state
  const token = Cookies.get('JWT-TOKEN')
  const loginPath = '/login/'
  const indexPath = '/dashboard/'
  const notRolePath = '/error/401/'
  const isLoginPage = route.path === loginPath
  // 用户未登录
  if (!user.id) {
    // 没有 token，且不在登录页面，跳到登录页
    if (!token && !isLoginPage) {
      return redirect(loginPath)
    }
    if (!token) {
      return
    }
    app.$axios.setToken(token, 'Bearer')
    app.$axios
      .$post('door/refresh')
      .then(data => {
        // 登录成功
        if (data.is_admin) {
          if (isLoginPage) {
            window.location = indexPath
          }
          // 是管理员
          store.commit('SET_USER', data)
          const hasRole = permission(route, store)
          if (!hasRole) {
            redirect(notRolePath)
          }
          store.dispatch('getTodo')
        } else {
          // 不是管理员
          Message.error('你无权访问该页面')
          Cookies.remove('JWT-TOKEN')
          if (!isLoginPage) {
            window.location = loginPath
          }
        }
      })
      .catch(err => {
        // 登录失败
        Message.error(err.message)
        Cookies.remove('JWT-TOKEN')
        if (!isLoginPage) {
          window.location = loginPath
        }
      })
  } else {
    // 已登录用户不能访问登录页面
    if (isLoginPage) {
      return redirect(indexPath)
    }
    // 如果当前用户已经不是管理员了，登出，跳转到登录页面
    if (!user.is_admin) {
      store.commit('USER_LOGOUT')
      window.location = loginPath
    }
    const hasRole = permission(route, store)
    if (!hasRole) {
      redirect(notRolePath)
    }
  }
}
