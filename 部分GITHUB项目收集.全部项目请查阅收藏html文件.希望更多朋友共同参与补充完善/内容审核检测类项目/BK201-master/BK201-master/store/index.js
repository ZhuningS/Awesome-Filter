export const state = () => ({
  user: {},
  todo: []
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  USER_LOGOUT(state) {
    state.user = {}
  },
  UPDATE_USER_INFO(state, { key, value }) {
    state.user[key] = value
  },
  SET_TODO(state, data) {
    const result = []
    Object.keys(data).forEach(key => {
      result.push({
        name: key,
        value: data[key]
      })
    })
    state.todo = result
  },
  CHANGE_TODO(state, { key, value = 1 }) {
    state.todo.forEach(item => {
      if (item.name === key) {
        item.value -= value
      }
    })
  }
}

export const actions = {
  async getUpToken({ commit }) {
    const data = await this.$axios.$get('image/uptoken')
    commit('UPDATE_USER_INFO', {
      key: 'uptoken',
      value: data
    })
  },
  async getTodo({ commit }) {
    const data = await this.$axios.$get('admin/trial_todo')
    commit('SET_TODO', data)
  }
}

export const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  avatar: state => state.user.avatar || '',
  name: state => state.user.name || '',
  roles: state => state.user.roles || []
}
