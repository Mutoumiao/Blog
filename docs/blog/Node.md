# Node

## 基本模块

### 全局变量

```js
__filename  // 返回正在执行脚本文件的绝对路径
__dirname  // 返回正在执行脚本所在目录


// timer类的函数
setImmediate(callback[, ...args])
setInterval(callback, delay[, ...args])
setTimeout(callback, delay[, ...args])

// 进程对象，提供与当前进程互动的接口
process
process.version  // 提供node版本说明
process.platform  // 当前执行环境
process.exit()  // 进程退出等方法
/** 
  version: 'v16.14.2',
  ...
*/

// 模块类
require  // 实现模块的加载
module.exports // 处理模块的导出
```

**this 说明：**

```js
// 全局调用
console.log(this)  // => {}

// 默认情况下 this 是一个空对象，和 global 并不一样

console.log(this === global)  // => false

(function {
  console.log(this === global) // => true
})()
```

### process 进程

[process](http://nodejs.cn/api/process.html) 对象提供有关当前 Node.js 进程的信息并对其进行控制。 虽然它作为全局可用，但是建议通过 require 或 import 显式地访问它：

```js
const process = require('process')
```

模块作用：

- 获取正在执行脚本的信息
- 获取环境信息、硬件信息
- 执行进程操作 （监听进程事件、创建子进程）

基础例子：

```ts
const process = require('process')

// 1.资源：CPU 内存

// 1-1 memoryUsage：返回描述 Node.js 进程的内存使用量（以字节为单位）的对象
process.memoryUsage()
// {
//   rss: 22769664,    // 常驻内存
//   heapTotal: 4882432,   // 执行时申请总内存大小
//   heapUsed: 4170216,  // 实际所使用的内存大小
//   external: 378188,    // 底层 C++ 对象的内存使用大小
//   arrayBuffers: 11158   //  ArrayBuffer、SharedArrayBuffer、buffer 分配的内存大小
// }

Buffer.alloc(10000)
// {
//   ...
//   arrayBuffers: 21158
// }

// 1-2 cpuUsage 返回当前进程的用户和系统 CPU 时间使用情况
process.cpuUsage()
// { user: 39051, system: 12588 }

// 2.运行环境：运行目录、node环境、CPU架构、用户环境、系统平台
process.cwd()  // 当前运行目录
process.version  // 运行node版本
process.versions // 更详情的版本信息
process.arch   // CPU架构
process.env   // 环境变量信息
process.env.NODE_ENV
process.env.PATH
process.env.USERPROFILE  //管理员目录 window
process.env.HOME   //管理员目录 macos
process.platform   // 系统平台


// 3.运行状态：启动参数、进程占用的PID、运行时间
process.argv   // 命令行参数数组
process.argv0   // 同理 process.argv[0]  execArgv
process.pid   // 程序PID
process.uptime()   // 脚本运行开始到结束的运行时间

// 4.进程事件
// process 对象是 EventEmitter 的实例

// 退出事件
process.on('exit', (code) => {
  console.log('exit：' + code)
})
// 退出前事件
process.on('beforeExit', (code) => {
  console.log('before exit：' + code)
})

// 5.操作调用
process.exit()  // 手动退出进程

```

### path 路径

用于处理文件/目录的路径

常用API

```ts
path.basename(path[, ext]) // 获取路径中基础名称
path.dirname(path)  // 获取路径中目录名称
path.extname(path)  // 获取路径中扩展名称
path.isAbsolute(path)  // 获取路径是否为绝对路径
path.join([...paths])  // 拼接多个路径片段

path.resolve([...paths]) // 返回绝对路径
path.parse(path)  // 解析路径
path.format(pathObject)    // 序列化路径，与解析路径相反操作
path.normalize(path)  // 规范化处理，处理带有'..'或则'.'等片段处理
```

### Buffer 缓冲区

[Buffer](http://nodejs.cn/api/buffer.html) 编解码二进制数据包

特点和使用：

- 实现Node平台下的二进制数据操作
- 不占据V8堆内存大小的内存空间
- 内存的使用由Node来控制，由V8的GC回收
- 一般配合 Stream 流使用，充当数据缓冲区

![buffer](../images/buffer.png)

#### 常用创建 Buffer 实例

```ts
const { Buffer } = require('buffer')

Buffer.alloc(size[, fill[, encoding]])  // 创建指定字节大小的buffer
Buffer.allocUnsafe(size)  // 创建指定大小的buffer (不安全)
Buffer.from(...)   // 接收数据，创建 buffer
```

#### 常用 Buffer 实例方法

```ts
const buf = Buffer.alloc(50)

buf.fill(value[, offset[, end]][, encoding])  // 使用数据填充buffer
buf.write(string[, offset[, length]][, encoding])  // 向buffer中写入数据
buf.toString([encoding[, start[, end]]])  // 从buffer中提取数据
buf.slice([start[, end]]) // 截取buffer
buf.indexOf(value[, byteOffset][, encoding])  // 在buffer中查找数据
buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])  // 拷贝buffer中的数据
```

#### 常用 Buffer 静态方法

```ts  
Buffer.concat(list[, totalLength])  // 将多个buffer拼接成一个新的buffer
Buffer.isBuffer(obj)  // 判断当前数据是否为buffer
```

### Fs 文件系统

[fs](http://nodejs.cn/api/fs.html) 是属于内置核心模块，提供文件系统操作API

#### 第三方库推荐

- [fs-extra](https://github.com/jprichardson/node-fs-extra) fs模块的超集

#### 常用文件操作API

```js
const fs = require('fs')

fs.readFile(path[, options], callback)  // 从指定文件中读取数据
fs.writeFile(file, data[, options], callback)  // 向指定文件中写入数据
fs.appendFile(path, data[, options], callback)  // 追加的方式向指定文件中写入数据
fs.copyFile(src, dest[, mode], callback)  // 将某个文件中的数据拷贝到另一文件
fs.watchFile(filename[, options], listener)   // 将指定文件进行监控
```

#### 大文件操作方法

通过使用Buffer 缓存区的功能方法，将读取在字节内容存入Buffer中，再通过Buffer写入文件中

```ts
// 使用fs.open(path)方法打开文件获取fd，再通过以下API操作字节读取/写入
// 注意：操作后需调用 fs.close(fd) 关闭
fs.read(fd, buffer, offset, length, position, callback)
fs.write(fd, buffer[, offset[, length[, position]]], callback)
```

#### 常见目录操作API

```ts
fs.access(path[, mode], callback)   // 判断文件或目录是否具有操作权限
fs.stat(path[, options], callback)    // 获取目录及文件信息
fs.mkdir(path[, options], callback)   // 创建目录
fs.rmdir(path[, options], callback)   // 删除目录
fs.readdir(path[, options], callback)   // 读取目录中内容
fs.unlink(path, callback)   // 删除指定文件
```

### 模块

#### module属性

任意js文件就是一个模块，可以直接使用module属性

```js
module.id  // 返回模块标识符，一般是一个绝对路径
module.filename  // 返回文件模块的绝对路径
module.loaded   // 返回布尔值，标识模块是否完成加载
module.parent   // 返回对象存放调用当前模块的模块
module.children  // 返回数组，存放当前模块调用的其他模块
module.exports   // 返回当前模块需要暴露的内容
module.paths   //  返回数组，存放不同目录下的node_modules位置
```

#### require 属性

require 方法基本功能是读取并执行一个模块文件

```js
require.resolve(request[, options])   // 返回模块文件绝对路径
require.main   // 返回主模块对象
// Module {
//   id: '.',
//   path: '/absolute/path/to',
//   exports: {},
//   filename: '/absolute/path/to/entry.js',
//   loaded: false,
//   children: [],
//   paths:
//    [ '/absolute/path/to/node_modules',
//      '/absolute/path/node_modules',
//      '/absolute/node_modules',
//      '/node_modules' ] }
```

### Node 事件循环

与浏览器中的事件循环只有宏任务队列与微任务队列不同。Node事件队列包含有以下内容：

```txt
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘

```

- **timers 定时器**：执行 `setTimeout()` 和 `setInterval()` 的回调函数
- **pending callbacks 待定回调**：执行系统操作的回调（例如 tcp、udp）
- **idle, prepare**：仅系统内部使用
- **poll 轮询**：检索新的 I/O 事件、执行与 I/O 相关的回调（例如 读取文件等I/O操作)
- **check 检测**： `setImmediate()` 回调函数在这里执行
- **close callbacks 关闭的回调函数**：执行`close`事件的回调，如：`socket.on('close', ...)`
