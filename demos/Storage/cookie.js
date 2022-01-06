function isObject(obj) {
  return obj && obj !== null && typeof obj === 'object'
}

function isFunction(func) {
  return typeof func === 'function'
}

export class CookieAPI {
  /**
   * @param {Object} option
   * @param {Object} option.attributes  全局cookie额外参数 {path: '/', expires: '100'}
   */
  constructor(option = {}) {
    this.GlobalAttributes = {
      path: '/'
    }
    if (isObject(option.attributes)) {
      Object.assign(this.GlobalAttributes, option.attributes)
    }
  }

  static _composeAttr(attributes) {
    let str = ''
    for (let key in attributes) {
      if (!(/^(?:expires|max\-age|path|domain|secure)$/i.test(key))) continue
      if (!attributes[key]) continue
      str = `${str}; ${key}`
      if (attributes[key] === true) continue
      try {
        str = `${str}=${attributes[key].split(';')[0]}`
      } catch (error) {
        continue
      }
    }
    return str
  }
  get(key, cb) {
    if (!key) {
      throw new Error("请填写对应参数再执行")
    }
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
    const data = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    cb && cb(key, data)
    return data
  }

  /**
   * @param {Function | Object} opt  传递函数时将是回调函数，传递对象时将是额外参数
   * @param {Function} cb  回调函数
   */
  set(key, value, opt, cb) {
    if (arguments.length < 2) {
      throw new Error("请填写对应参数再执行")
    }
    let attributes = Object.assign({}, this.GlobalAttributes)
    let callback = null

    if (isFunction(opt)) {
      callback = opt
    } else if (isFunction(cb)) {
      callback = cb
    }

    if (isObject(opt)) {
      attributes = Object.assign({}, attributes, opt)
    }

    if (typeof attributes.expires === 'number') {
      // 864e5 = 86400000 = 1天
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5).toUTCString()
    }

    const name = encodeURIComponent(key)
    const attrStr = CookieAPI._composeAttr(attributes)
    const returned = (document.cookie = `${name}=${encodeURIComponent(value)}${attrStr}`)
    callback && callback(key, value, returned)
    return returned
  }

  remove(key, attr, cb) {
    this.set(key, '', Object.assign({}, attr, { expires: -1 }), cb)
  }
}