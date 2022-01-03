# 常用meta标签

主要收集一些常用的meta标签

```html
1. 禁止浏览器缓存

--禁止代理服务器缓存
<meta http-equiv="Expires" CONTENT="0">

-- 禁止浏览器缓存
<meta http-equiv="Cache-Control" CONTENT="no-cache">
<meta http-equiv="Cache-Control" CONTENT="no-store">

2. 优先浏览器引擎

--优先使用ie最新版本和chrome
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
--强制使用webkit渲染
<meta name="renderer" content="webkit">
<meta name="force-rendering" content="webkit">

3.移动端若干设置
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- 是否启用 WebApp 全屏模式 -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<!--控制状态栏显示样式 apple-mobile-web-app-status-bar-style 起作用的前提是已经设置了<meta name="apple-mobile-web-app-capable" content="yes"> -->
<meta name="apple-mobile-web-app-status-bar-style" content="black">
--添加到主屏幕后，全屏显示
<meta name="apple-touch-fullscreen" content="yes">
--禁止了把数字转化为拨号链接
<meta name="format-detection" content="telephone=no">

4. 移动端非常用设置
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">

5. 基本网站信息
<!-- 编码格式 -->
<meta charset="utf-8" />
<!-- 网页窗口标题 -->
<title>标题</title>
<!-- viewport 属性详解：
width:页面宽度，可以取值具体的数字，也可以是device-width，表示跟设备宽度相等。 
height:页面高度，可以取值具体的数字，也可以是device-height，表示跟设备高度相等。 
initial-scale:初始缩放比例。
minimum-scale:最小缩放比例。
maximum-scale:最大缩放比例。 
user-scalable:是否允许用户缩放。
-->
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
<meta name="description" content="描述内容" />
<meta name="keywords" content="关键字 " />
<link rel="shortcut icon" type="image/x-icon" href="图标地址" />

6.私有属性
<!-- Apple设备私有的apple-touch-icon属性 -->
<!-- 在iPhone,iPad,iTouch的safari浏览器上可以使用添加到主屏按钮将网站添加到主屏幕上，方便用户以后访问 -->
<link rel="apple-touch-icon" sizes="57x57" href="touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="72x72" href="touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="114x114" href="touch-icon-iphone4.png" />  
<link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon-ipad3-144.png" />
```
