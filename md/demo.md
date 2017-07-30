### markdowm 学习资料
#### 为什么学习markdown
* 主要是为了方便整理学习笔记，并在gitHub上进行托管。
#### 环境搭建
1. 编辑器使用 Sublime3；
2. 插件Markdowm Editing：用来是Sublime语法高亮及提示；
3. 插件Markdowm Preview: 用来在浏览器中预览Markdowm文件；
```
//插件Markdowm Preview需设置快捷键
{ "keys": ["alt+m"], "command": "markdown_preview", "args": {"target": "browser", "parser":"markdown"} }
```
#### 主要语法
* 块引用
>我是
>块
>引用
* 分割线
-------------------
* 行内元素
    1. 链接
        我是[传送门]('https://github.com/AmberAAA/love')。
    2. 强调
        *我是斜体*
        _我也是斜体_
        **我表示强调**
        __我表示强调__
    3. 小段代码
        `var a = 3;`
    4. 图片
        ！ [我是图片](http://moepic.cc/images/2016/04/22/08b4ba3ab3ba88b56223cdc31b710011.jpg)
#### 参考资料
    * [Markdown-wiki](https://en.wikipedia.org/wiki/Markdown#Example);