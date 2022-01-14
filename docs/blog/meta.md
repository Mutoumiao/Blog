# HTML Meta

`meta`表示是属于HTML页面中常用于定义页面的说明，关键字，最后修改日期，和其它的元数据。这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务。又称为元信息标签

> 除了`meta`之外，还有 `head`、`title`、`base`等标签

## 介绍

`meta`标签是以键值对的方式书写。一般`meta`标签是由两个属性来组成，在这里用`Key`、`Value`来表示：

Key方面有两个属性：`name`、`http-equiv`
Value方面只有一个属性：`content`

以下为写法例子：

```html
<meta name="key" content="value">。 

<meta http-equiv="key" content="value">
```

## name

name属性主要用于描述网页，比如网页的关键词，叙述等。与之对应的属性值为content，content中的内容是对name填入类型的具体描述，便于搜索引擎抓取。

```html
<!-- 网页的关键字 -->
<meta name="keywords" content="关键字A,关键字B,关键字C" />


<!-- 网站内容的描述 -->
<meta name="description" content="描述内容" />


<!-- 视口设置，常用于作用在移动端 -->
<!-- viewport 属性详解：
width:页面宽度，可以取值具体的数字，也可以是device-width，表示跟设备宽度相等。 
height:页面高度，可以取值具体的数字，也可以是device-height，表示跟设备高度相等。 
initial-scale:初始缩放比例。
minimum-scale:最小缩放比例。
maximum-scale:最大缩放比例。 
user-scalable:是否允许用户缩放。
-->
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>


<!-- 定义搜索引擎爬虫的索引方式 -->
<!-- 参数介绍，默认值：all
all : 搜索引擎将索引此网页与继续通过此网页的链接索引，等价于index，follow。
none : 搜索引擎将忽略此网页，等价于noindex，nofollow。
noindex : 搜索引擎不索引此网页。
nofollow: 搜索引擎不继续通过此网页的链接索引搜索其它的网页。
index : 搜索引擎索引此网页。
follow : 搜索引擎继续通过此网页的链接索引搜索其它的网页。
-->
<!--content: all|none|noindex|nofollow|index|follow -->
<meta name="robots" content="all" />


<!-- 作者信息 -->
<meta name="author" content="Mutoumiao,839608583@qq.com" /> 


<!-- 网页制作软件: 由什么工具生成的此HTML -->
<meta name="generator" content="Visual Studio Code"> 


<!-- 版权信息：代表该网站为Mutoumiao个人版权所有 -->
<meta name="copyright" content="Mutoumiao"> 


<!-- 双核浏览器渲染方式 -->
<!-- renderer作用于360浏览器、QQ浏览器等国产双核浏览器，force作用于其他双核浏览器-->

<!-- 指定webkit内核 -->
<meta name="renderer" content="webkit">
<meta name="force-rendering" content="webkit">

<!-- 指定IE兼容模式 -->
<meta name="renderer" content="ie-comp">
<meta name="force-rendering" content="ie-comp">

<!-- 指定IE标准模式 -->
<meta name="renderer" content="ie-stand">
<meta name="force-rendering" content="ie-stand">


<!-- 搜索引擎爬虫重访时间设置 -->
<!-- 如果页面不是经常更新，为了减轻搜索引擎爬虫对服务器带来的压力，可以设置一个爬虫的重访时间。如果重访时间过短，爬虫将按它们定义的默认时间来访问。 -->
<meta name="revisit-after" content="7 days" >


<!-- 移动端常用设置 -->
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- 是否启用 WebApp 全屏模式 -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<!--控制状态栏显示样式 apple-mobile-web-app-status-bar-style 起作用的前提是已经设置了<meta name="apple-mobile-web-app-capable" content="yes"> -->
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<!-- 添加到主屏幕后，全屏显示 -->
<meta name="apple-touch-fullscreen" content="yes">
<!-- 禁止了把数字转化为拨号链接 -->
<meta name="format-detection" content="telephone=no">


<!-- 移动端非常用设置 -->
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">

```

## http-equiv

设置页面HTTP等参数作用

```html
<!-- 采取最新版本渲染当前页面 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

<!-- 设置字符编码 -->
<meta charset="utf-8" />


<!-- 指定请求和响应遵循的缓存机制 -->
<!-- 参数介绍：
no-cache: 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。
no-store: 不允许缓存，每次都要去服务器上，下载完整的响应。（安全措施）
public : 缓存所有响应，但并非必须。因为max-age也可以做到相同效果
private : 只为单个用户缓存，因此不允许任何中继进行缓存。（比如说CDN就不允许缓存private的响应）
max-age : 表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。 
-->
<!-- 例如：max-age=60表示响应可以再缓存和重用 60 秒。 -->
<!-- content:  no-cache|no-store|public|private|max-age  -->
<meta http-equiv="cache-control" content="no-cache">


<!-- 禁止百度自动转码 -->
<!-- 
用于禁止当前页面在移动端浏览时，被百度自动转码。虽然百度的本意是好的，但是转码效果很多时候却不尽人意。所以可以在head中加入例子中的那句话，就可以避免百度自动转码了。-->
<meta http-equiv="Cache-Control" content="no-siteapp" />


<!-- 设置网页到期时间 -->
<!-- 过期后网页必须到服务器上重新传输 -->
<meta http-equiv="expires" content="Fri, 14 Jan 2022 08:41:34 GMT" />


<!-- 自动刷新并重定向某页面 -->
<!-- 10秒后跳转别的页面 -->
<meta http-equiv="refresh" content="10；URL=https://child.mutoumiao.vip/">


<!-- cookie设定 -->
<meta http-equiv="Set-Cookie" content="<cookie名>=<cookie值>">
```

## link

以下为表示页面信息的link设置方式

```html

<!-- 设置网页标签页图标 -->
<link rel="shortcut icon" type="image/x-icon" href="图标地址" />

<!-- 私有属性 -->
<!-- Apple设备私有的apple-touch-icon属性 -->
<!-- 在iPhone,iPad,iTouch的safari浏览器上可以使用添加到主屏按钮将网站添加到主屏幕上，方便用户以后访问 -->
<link rel="apple-touch-icon" sizes="57x57" href="touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="72x72" href="touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="114x114" href="touch-icon-iphone4.png" />  
<link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon-ipad3-144.png" />
```
