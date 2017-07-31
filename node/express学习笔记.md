### express 学习笔记

* ejs引擎渲染html模板  
```javaScript
    app.engine('.html', require('ejs').__express);
    app.set('view engine', 'html');
```
* 渲染标签
```html
    <%code%>     //javascript源码
    <%-code%>   //原始html内容；
    <%=code%>  //替换过html特殊字符的内容；
```