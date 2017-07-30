## http学习
### 参考书籍
* 《图解http》

### 学习目标
* 了解基本的http协议；
* 扫除知识盲点cookie、https、回话等；

### 知识点
#### 持久链接
关键词：keep-alive；
&ensp;&ensp;&ensp;&ensp;http协议的初始版本，每完成一次http请求，都要关闭tcp链接；当请求一个包含多张图片的静态页面时，会导致资源的不合理开销。因此就有了 HTTP keep-alive方法，它让建立一次tcp链接后可以发送多次http请求。优点；可以降低吴福气开销，加快客户端加载速度。

