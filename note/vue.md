# vue.md 学习笔记

## 快速起步
### 声明式渲染
```javascript
    var app = new Vue({
        el:'app',
        data:{
            message:'hello Vue!'
        }
    })
```
### 事件绑定与数据绑定
```html
    <input type="password" v-model='password' v-on:click='fun1' id='app'>
    <script>
        var app = new Vue({
            el:'#app',
            data:{
                password:''
            }
            methods:{
                fun1:function (argument) {
                    // body...
                }
            }
        })
    </script>
```