export class StorageAPI {
  /**
   * @param {Object} storage
   * @param {string} options.prefix  名称前缀
   */
  constructor(storage, options) {
    this.storage = storage;
    this.options = {
      prefix: options.prefix || '',
    };

    // 实现storage.length 功能
    Object.defineProperty(this, 'length', {
      /**
       * @return {number}
       */
      get() {
        return this.storage.length;
      },
    });
  }

  /**
   * @param {string} name
   * @param {*} value
   */
  set(name, value) {
    const stringifyValue = JSON.stringify({
      data: value
    });

    this.storage.setItem(this.options.prefix + name, stringifyValue);
  }

  /**
   * @param {string} name
   * @param {*} def  默认值
   */
  get(name, def = null) {
    const item = this.storage.getItem(this.options.prefix + name);
    if (item !== null) {
      const result = JSON.parse(item);
      return result && result.data ? result.data : result
    }
    return def
  }

  /**
   * @param {number} index
   */
  key(index) {
    return this.storage.key(index);
  }

  /**
   * @param {string} name
   */
  remove(name) {
    return this.storage.removeItem(this.options.prefix + name);
  }

  clear() {
    if (this.length === 0) {
      return;
    }

    const keys = [];

    for (let i = 0; i < this.length; i++) {
      const key = this.storage.key(i);
      const regexp = new RegExp(`^${this.options.prefix}.+`, 'i');

      if (regexp.test(key) === false) {
        continue;
      }

      keys.push(key);
    }

    for (const key in keys) {
      this.storage.removeItem(keys[key]);
    }
  }
}
