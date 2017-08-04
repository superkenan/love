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
```javascript
    var data = {a:1};
    var vm = new Vue({
        data:data
        });
    vm.a === data.a; // -->true
    //设置属性也会影响原来的值
    vm.a = 3;
    data.a // -->2
```
值得注意的是只有这些被代理的属性是响应式的。如果在实类创建后，再去添加新的属性到实类上，他则不会导致视图的更新。除了 data 属性， Vue 实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 
```javascript
    var data = {a:1};
    var vm = new Vue({el:'#el',data:data});
    vm.$data === data   // --> true
    vm.$el === document.getElementById('el');
    vm.$watch('a',function(newVal,oldVal){
        // 此回调函数在`a`的值发生改变后回调。
        });
```
### 实类的生命生命周期
每个 Vue 实例在被创建之前都要经过一系列的初始化过程。例如，实例需要配置数据观测(data observer)、编译模版、挂载实例到 DOM ，然后在数据变化时更新 DOM 。在这个过程中，实例也会调用一些 **生命周期钩子** ，这就给我们提供了执行自定义逻辑的机会。

## 模板语法
### 插值
* 文本
```
<span>Message: {{ msg }}</span>    数据绑定
<span v-once>This will never change: {{ msg }}</span> 仅一次
```
* Html
```
    <div v-html="rawHtml"></div>
```
* 属性
```
    <div v-bind:class='a'></div>
    <div v-bind:disable='isButtonDisabled'>Button</div>
```
### 指令
* 参数:一些指令能接受一个“参数”，在指令后以冒号指明。`v-bind`用来响应更新html属性；`v-on`用来监听DOM事件
```
    <a v-bind:href="url"></a>
    <a v-on:click="doSomething">
```
* 修饰符是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
```html
    <form v-on:submit.prevent="onSubmit"></form>
```
### 过滤器
Vue.js 允许你自定义过滤器，可被用作一些常见的文本格式化。过滤器可以用在两个地方：mustache 插值和 v-bind 表达式。
```html
    {{message | capitalize }}
    <div v-bind:id="rawId | formatId"></div>
```
过滤器函数总接受表达式的值 (之前的操作链的结果) 作为第一个参数。

### 缩写
* `v-bind`缩写为`：`
```html
<!-- 完整写法 -->
<a v-bind:href='url'></a>
<!-- 简写 -->
<a :href="url"></a>
```
* `v-on`缩写为`@`
```html
    <!-- 完整写法 -->
    <div v-on:click='onClick'></div>
    <!-- 简写 -->
    <div @click='onClick'></div>
```
## 计算属性
### 概念  
模板内的表达式是非常便利的，但是它们实际上只用于简单的运算。在模板中放入太多的逻辑会让模板过重且难以维护。例如：
```html
    <div id="example">
        {{ message.split('').reverse().join('') }}
    </div>
```
在这种情况下，模板不再简单和清晰。这就是对于任何复杂逻辑，你都应当使用计算属性的原因。
### Exp1
```html
    <div id='app4'>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
```
``` javascript
    var vm = new Vue({
        el:'#app4',
        data:{
            message:'英雄达拉崩吧'
        },
        computed:{
            reversedMessage:function(){
                return this.message.split('').reverse().join('')
            }
        }
        })
```
### 计算属性与Method
```html
    <p>Reversed message: "{{ reversedMessage() }}"</p>
```
```js
    methods:{
        reversedMessage:function(){
            return this.message.split('').reverse().join('')
        }
    }
```
相同点：同一个函数，也会得到相同的结果。
不同点：method没有缓存，每次渲染时都会重新执行。computed有缓存。

### Computed属性与$watch属性
```html
    <div id='demo'>{{fullName}}</div>
```
使用watch属性
```js
    var vm = new Vue({
        el:'#demo',
        data:{
            firstName:'An',
            lastName:'BoRong',
            fullName:'An Borong'
        },
        watch:{
            firstName:function(val){
                this.fullName = val + ' ' +this.lastName;
            }
            lastName:function(val){
                this.fullName = this.firstName + ' ' + val;
            }
        }
        })
```
使用computed属性
```js
    var vm = new Vue({
        el:'#demo',
        data:{
            firstName:'An',
            lastName:'BoRong'
        }
        computed:{
            fullName:function(){
                return this.first + ' ' + this.lastName
            }
        }
        })
```
### 计算setter  
计算属性默认只有getter，不过在需要时也可以设置一个setter
```js
    computed:{
        fullName:{
            setter:function(){
                return this.firstName + ' '+ this.lastName;
            }
            getter:function(newVal){
                var names = newVal.spilt(' ');
                this.firsName = names[0];
                this.lastName = names[1];
            }
        }
    }
```
### 观察watcher
虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的 watcher 。这是为什么 Vue 通过 watch 选项提供一个更通用的方法，来响应数据的变化。当你想要在数据变化响应时，执行异步操作或开销较大的操作，这是很有用的。

##Class与Style绑定

### 绑定Class
* 对象语法  
可以给`v-bind:class`一个对象，以动态的切换class
```html
    <div v-bind:class='{active:isActive}'></div>
    <div class="static" v-bind:class='{active:isActive,'text-danger':hasError}'>
    <div class="app" v-bind:class='[activeClass, errorClass]'></div>
    </div>
```
data如下
```js
    data:{
        isActive:true,
        hasError:false
        activeClass:'heihei',
        errorClass:'hahah'
    }
```
以上的语法是表示class active的更新取决于isActive是否为真值。
### 用在组件上
**略 组件还不会玩 回头更新**

### 绑定内联样式
```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
```js
    data: {
        activeColor: 'red',
        fontSize: 30
}
```
说明：  
1. html模板支持驼峰写法，也支持引号与短横杠相互配合;
2. 会自动添加css前缀；

## 条件渲染

### `v-if`  
```html
    <div v-if='OK'>Yes</div>
    <div v-else>No</div>
```
`v-if`与`v-else`条件渲染
### 在<template></template>配合
```html
    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
```
### 使用`key`管理可复用的元素
```html
    <template v-if="loginType === 'username'">
     <label>Username</label>
     <input placeholder="Enter your username">
    </template>
    <template v-else>
     <label>Email</label>
     <input placeholder="Enter your email address">
    </template>
```
此时切换标签input标签会被复用。当是设置了key属性，则表明为不同的标签，不要复用他们。

### `v-show`与`v-if`
不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 是简单地切换元素的 CSS 属性 display 。

## 列表渲染
### `v-for`
我们用 v-for 指令根据一组数组的选项列表进行渲染。 v-for 指令需要以 item in items 形式的特殊语法， items 是源数据数组并且 item 是数组元素迭代的别名。
### 基本用法
```html
<div v-for='item in items' >{{item.message}}</div>
<script>
    ...
    data:{
        items:[{message:'a'},{message,'b'}]
    }
    ...
</script>
```
在 v-for 块中，我们拥有对父作用域属性的完全访问权限。 v-for 还支持一个可选的第二个参数为当前项的索引。
```html
<div v-for='(item,index) in items'>{{parentMessage}}--{{index}}--{{items}}</div>
<script>
    ...
    data:{
        parentMessage:'哈哈',
        items:[{message:'a'},{message,'b'}]
    }
    ...
</script>
```
### template `v-for`
```html
    <ul>
        <template v-for='item in items'>
            <li>{{item.message}}</li>
            <li class="driver"></li>
        </template>
    </ul>
```
### 对象迭代`v-for`
```html
<ul id="example-1">
    <!--接收一个参数作为value-->
  <li v-for="value in object">{{value}}</li>
      <!--接收两个参数作为value-->
  <li v-for="(value,key) in object">{{key}}--{{value}}</li>
       <!--接收三个参数作为value--> 
  <li v-for="(value,key,index) in object">{{key}}--{{value}}</li>       
</ul>

### 数组更新检测
push()；pop()；shift()；unshift()；splice()；sort()；reverse()都会触发视图的更新。
