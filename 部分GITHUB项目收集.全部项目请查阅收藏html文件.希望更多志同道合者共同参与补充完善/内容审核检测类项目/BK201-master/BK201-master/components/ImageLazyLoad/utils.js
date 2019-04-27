class Utils {
  constructor() {
    this.id = 0
    this.listeners = {}
  }

  checkInView(ele, scale = 1.3) {
    if (typeof window === 'undefined' || !(ele instanceof Element)) {
      return false
    }
    const rect = ele.getBoundingClientRect()
    return (
      rect.top < window.innerHeight * scale &&
      rect.bottom > 0 &&
      (rect.left < window.innerWidth * scale && rect.right > 0)
    )
  }

  on(element, evt, handler, capture = false) {
    const events = typeof evt === 'string' ? [evt] : evt
    const result = []
    events.forEach(event => {
      const id = this.id++
      element.addEventListener(event, handler, capture)
      this.listeners[id] = {
        element,
        event,
        handler,
        capture
      }
      result.push(id)
    })
    return result
  }

  off(ids) {
    ids.forEach(id => {
      if (this.listeners[id]) {
        const h = this.listeners[id]
        h.element.removeEventListener(h.event, h.handler, h.capture)
        delete this.listeners[id]
      }
    })
  }

  throttle(func, wait, options) {
    let context, args, result
    let timeout = null
    let previous = 0
    if (!options) options = {}
    let later = function() {
      previous = options.leading === false ? 0 : Date.now()
      timeout = null
      result = func.apply(context, args)
      if (!timeout) context = args = null
    }
    return function() {
      let now = Date.now()
      if (!previous && options.leading === false) previous = now
      let remaining = wait - (now - previous)
      context = this
      args = arguments
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        previous = now
        result = func.apply(context, args)
        if (!timeout) context = args = null
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining)
      }
      return result
    }
  }
}

export default new Utils()
