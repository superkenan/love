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
### 选择与循环  
```html
    <div class="app1">
        <p v-if='seen'>{{message}}</p>
        <ol>
            <li v-for='todo in todos'>{{todo.text}}</li>
        </ol>
    </div>
    <script>
            var app1 = new Vue({
      el:'.app1',
      data:{
        seen:false,
        message:'你猜',
        todos:[
          {text:'英雄达拉崩吧'},
          {text:'骑上最快的马'},
          {text:'嘿嘿嘿'}
        ]
      }
    })
    </script>
```
### 组件化建设
```html
<div class="app2">
    <ol>
        <todo-item v-for='todo in todos' v-bind:item='todo' v-bind:key='todo.id'></todo-item>
    </ol>
</div>
<script>
    Vue.component('todo-item',{
        porps:['item'],
        template:'<li>{{item.text}}</>'
    })
        var app3 = new Vue({
      el:'.app3',
      data:{
        todos:[
          {text:'英雄达拉崩吧',id:'1'},
          {text:'骑上最快的马',id:'2'},
          {text:'嘿嘿嘿',id:'3'}
        ]
      }
    })
</script>
```
## Vue实例
### 属性与方法
