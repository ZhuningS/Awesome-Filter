import { Message } from 'element-ui'

const timeout = (duration = 3000) =>
  new Promise(resolve => {
    setTimeout(resolve, duration)
  })

export default {
  info(tips) {
    Message.info(tips)
    return timeout()
  },

  error(tips) {
    Message.error(tips)
    return timeout()
  },

  success(tips) {
    Message.success(tips)
    return timeout()
  },

  warn(tips) {
    Message.warning(tips)
    return timeout()
  }
}
