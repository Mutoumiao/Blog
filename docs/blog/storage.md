---
sidebarDepth: 3
---

# Web Storage

## Cookie

### 介绍

[Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies) 作为数据存储方案功能之一，在Web storage API （本地存储和会话存储）或 IndexedDB还没问世前。曾经也是作为客户端数据的存储来使用，不过由于现时代又更好的存储方案，因此该方式使用逐渐淘汰。

[Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)  可以随意与服务器进行数据传输的功能。当服务器或者客户端指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，当然该方式也会带来额外的性能开销。

当服务器收到 HTTP 请求时，服务器可以在响应头里面添加一个 Set-Cookie 选项。浏览器收到响应后通常会保存下 Cookie，之后对该服务器每一次请求中都通过  Cookie 请求头部将 Cookie 信息发送给服务器。另外，Cookie 的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。

#### Cookie 的常见场景

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等）

```http
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: <cookie名>=<cookie值>
```

#### Cookie 的主要构成

- `name`：一个唯一确定的cookie名称。通常来讲cookie的名称是不区分大小写的。
- `value`：存储在cookie中的字符串值。最好为cookie的`name`和`value`进行`url`编码
- `domain`：cookie对于哪个域是有效的。所有向该域发送的请求中都会包含这个cookie信息。这个值可以包含子域(如：mutoumiao.mu2.com)，也可以不包含它(如：.mu2.com，则对于mutoumiao.com的所有子域都有效)
- `path`：表示这个cookie影响到的路径，浏览器跟会根据这项配置，像指定域中匹配的路径发送cookie。
- `expires`：失效时间，表示cookie何时应该被删除的时间戳(也就是，何时应该停止向服务器发送这个cookie)。如果不设置这个时间戳，浏览器会在页面关闭时即将删除所有cookie；不过也可以自己设置删除时间。这个值是GMT时间格式，如果客户端和服务器端时间不一致，使用`expires`就会存在偏差。
- `max-age`：与`expires`作用相同，用来告诉浏览器此cookie多久过期（单位是秒），而不是一个固定的时间点。正常情况下，`max-age`的优先级高于`expires`。

- `HttpOnly`：告知浏览器不允许通过脚本`document.cookie`去更改这个值，同样这个值在`document.cookie`中也不可见。但在http请求张仍然会携带这个cookie。注意这个值虽然在脚本中不可获取，但仍然在浏览器安装目录中以文件形式存在。这项设置通常在服务器端设置。

- `secure`：安全标志，指定后，只有在使用SSL链接时候才能发送到服务器，如果是http链接则不会传递该信息。就算设置了`secure` 属性也并不代表他人不能看到你机器本地保存的 cookie 信息，所以不要把重要信息放cookie就对了服务器端设置

#### Cookie 的生命周期

- 会话：当没有指定过期时间（`Expires`）或者有效期（`Max-Age`）时。将默认处在会话期。需要注意的是，有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期Cookie 也会被保留下来，就好像浏览器从来没有关闭一样，这会导致 Cookie 的生命周期无限期延长。

- 持久性：持久性 Cookie 的生命周期取决于过期时间（`Expires`）或有效期（`Max-Age`）指定的一段时间

#### Cookie 的容量

- 大小：由于每个浏览器限制不同，大约总限制大小为 4kb

- 数量：每个浏览器也不同，不同浏览器有的限制数量，有的没有限制，但是如果过多数据，会导致请求时过于臃肿

#### Cookie 操作封装

[完整代码](https://github.com/Mutoumiao/Blog/tree/master/demos/Storage/cookie.js)

```js
function isObject(obj) {
  return obj && obj !== null && typeof obj === 'object'
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
    ...
  }
  get(key, cb) {
    ...
  }
  set(key, value, opt, cb) {
    ...
  }
  remove(key, attr, cb) {
    ...
  }
}
```

使用方法

```js
import CookieAPI from 'cookie.js'

const cookie = new CookieAPI(// { attributes:{ path: 'xxx' } })

cookie.get(name)
cookie.set(name, value, option | callback, callback)
cookie.remove(name, value, option)
```

## SessionStorage 与 localStorage

### 介绍

[SessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage) 与 [localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 是HTML5新增的 Web Storage API。与Cookie等不同，它的容量有更高的存储空间，是属于现代中常用的数据存储方案

### 特点

#### SessionStorage

- 数据会保存到存储它的窗口或标签页 （刷新无影响）
- 数据只在构建它们的窗口或者标签页可见
- 适用短时数据存储
- 当浏览器崩溃或用户关闭已打开的多个标签页时，一些浏览器会保存并恢复当前会话。在这些情况下，浏览器在重启或恢复时，可能会保存相关的`sessionStorage`数据

#### localStorage

- 数据的生命期比窗口或者浏览器的生命期长（本地存储空间）
- 数据可被**同源**的每个窗口或者标签页共享
- 适用长期持久性数据
- 当浏览器标签页处在无痕模式时，存储在`localStorage`的数据，那么当浏览器关闭后，`localStorage`里的值一样不会保存。就算在正常模式保存后，在无痕模式下一样也没有该数据

#### 使用方法

```js
// localStorage 与 SessionStorage
storage.length
storage.index(index)  // 获取指定位置的健
storage.getItem(key)  // 获取
// 除了getItem方法外，还可通过对象的方式进行获取
storage.key | storage[key]

storage.setItem(key, value)
// 除了setIte方法外，还可通过对象赋值的方式
storage.key = value
storage[key] = value

storage.removeItem(key)  // 删除指定健
storage.clear()  // 清空全部
```

#### 操作封装

[完整代码](https://github.com/Mutoumiao/Blog/tree/master/demos/Storage/storage.js)

```js
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

  key(index) {
    return this.storage.key(index);
  }

  set(name, value) {
    const stringifyValue = JSON.stringify({
      data: value
    });

    this.storage.setItem(this.options.prefix + name, stringifyValue);
  }

  get(name, def = null) {
    const item = this.storage.getItem(this.options.prefix + name);
    if (item !== null) {
      const result = JSON.parse(item);
      return result && result.data ? result.data : result
    }
    return def
  }

  remove(name) {
    return this.storage.removeItem(this.options.prefix + name);
  }

  clear() {
   ...
  }
}

```

使用方法

```js
import StorageAPI from 'storage.js'
const options = {
  prefix: 'prefix',
};
const storage = new StorageAPI(window.sessionStorage, options);
const storage = new StorageAPI(window.localStorage, options);

```

## IndexedDB

### 介绍

[IndexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API) 是属于HTML5中新增的事务型数据库系统功能。IndexedDB 是一种将数据持久存储在用户浏览器中的方法，由于它具有丰富的查询功能与存储空间，无论当前网络状态如何，应用程序都可以联机和脱机工作。IndexedDB 对于存储大量数据的应用程序（例如，借阅库中的 DVD 目录）和不需要持久的 Internet 连接即可工作的应用程序（例如，邮件客户端、待办事项列表和记事本）非常有用。[更多介绍](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology)

### 特点

- 键值对的方式存储。字符串会进行拆分，数字会忽略
- 异步。防止大量数据的读写，阻塞页面
- 支持事务。只要有一步失败，整个事务都会取消
- 同源限制
- 存储空间较大。储存空间可以在250MB以上
- 支持二进制存储。ArrayBuffer对象和Blob对象

### 更多介绍与使用方法

- [使用 IndexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [Indexed 入门](https://wangdoc.com/javascript/bom/indexeddb.html#indexeddb-%E5%AF%B9%E8%B1%A1)

## Web SQL

Web SQL 是在浏览器上模拟的关系型数据库，开发者可以通过SQL语句来操作Web SQL，是HTML5以外一套独立的规范，兼容性差。
