## http学习
### 参考书籍
* 《图解http》

### 学习目标
* 了解基本的http协议；
* 扫除知识盲点cookie、https、回话等；

### 知识点
#### 持久链接
* 关键词：keep-alive；
&ensp;&ensp;&ensp;&ensp;http协议的初始版本，每完成一次http请求，都要关闭tcp链接；当请求一个包含多张图片的静态页面时，会导致资源的不合理开销。因此就有了 HTTP keep-alive方法，它让建立一次tcp链接后可以发送多次http请求。优点；可以降低服务器开销，加快客户端加载速度。

* 关键词：WebSocket
&ensp;&ensp;&ensp;&ensp;Webocket是浏览器与服务器建立的一种全双工通信标准。发起方依然是客户端，但一旦确认链接，任意一方均可向对方发送报文。可实现功能:
  - 推送服务
  - 减少通信量
  - 握手：请求   Upgrade：WebSocket
  - 握手：响应   code：101
