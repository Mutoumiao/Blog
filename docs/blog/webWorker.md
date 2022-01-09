---
sidebarDepth: 2
---

# Web Workers

[Web Workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API#web_workers_%E6%A6%82%E5%BF%B5%E4%B8%8E%E7%94%A8%E6%B3%95)是解决JavaScript 单线程问题的功能，可以让Web应用程序具备后台处理能够。可以充分利用多核CPU带来的优势解决一些单线程导致阻塞UI问题

缺点：在[Web Workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API#web_workers_%E6%A6%82%E5%BF%B5%E4%B8%8E%E7%94%A8%E6%B3%95)中运行的脚本是**不能**访问该页面的`window`对象（`window.document`），也就是说**不能**够直接访问Web页面和DOM API 。

作用：当需要处理或者计算一些数据或程序时，又不希望这些数据处理任务影响Web页面本身的交互性，那么可以通过生成一个Web Worker去执行数据处理任务，同时添加事件监听去监听它发出的消息

## 简单示例

``` js
// main.js

// 判断浏览器是否支持worker
if (typeof(Worker) !== 'undefined') {
  
 const worker = new Worker('worker.js')  // 绝对路径或相对路径（同源）
 
  // 监听从worker.js 发过来的信息
 worker.addEventListener('message', (e) => {
  console.log(e.data)  //  e.data => {name: 'name', age: 11}
 }, true )
 
  // 监听从worker.js 的出错信息
 worker.addEventListener('error', (e) => {
  console.log(e.message, e)
 }, true )
 
 // 主动发消息到worker.js
  // 参数可以是对象，数组，字符串等等
 worker.postMessage("hello World") 

 
 // 主动终止worker，终止后将无法重新打开，需要重新new Worker
 worker.terminate()
}


// worker.js

importScripts('worker2.js');  // 嵌套加载

function messageHandler(e) {
 //  e.data 收到的消息内容  =>  hello World
 
 // 主动发回 main.js 的内容
  postMessage({name: 'name', age: 11})
}

addEventListener("message", messageHandler, true) 

// 可以使用定时器API工作
const times = setTimeout(postMessage, 2000, "delayed message")

```

## Service Workers

[Service workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API) 本质上充当 Web 应用程序、浏览器与网络（可用时）之间的代理服务器。这个 API 旨在创建有效的离线体验，它会拦截网络请求并根据网络是否可用来采取适当的动作、更新来自服务器的的资源。它还提供入口以推送通知和访问后台同步 API。

## 实现离线缓存

工作原理是在客户端请求网站的时候，先注册Service Worker，然后利用其拦截并缓存页面所需要的资源，当离线的时候，请求的资源会优先从Service Worker 缓存的资源中返回

[Service Workers 与离线缓存](https://segmentfault.com/a/1190000008491458)
