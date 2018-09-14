# vue-laydal
> A popup component for vue.js

## Introduce
`laydal`，其实就是 `layer`(layui中的弹出层库) 和 `modal`（bootstrap模态框）的结合体。<br/>
做这个包的初衷就是因为 `layer` 并没有 es6 和 CommonJS 模块化的 版本 ，并且 `layer` 中没有模态框这一功能。于是就有了 `laydal`,解决日常开发需求。<br />

你可以在安装完 `laydal` 后 使用 `layer` 的所有接口api ，其功能完全和 `layer` 官方文档一样。<br/>
所以要想知道 `layer` 的用法，看其官方文档即可。<a href="https://layer.layui.com/">layer官网</a> <br/>

另外，我在 `laydal` 中加入了 `modal` 组件，其就是 `bootstrap` 中的 模态框原型，样式完全和 `bootstrap-3.x.x` 版本一模一样，同时你可以在 `modal` <br/>
组件中使用 `bootstrap-3.x.x` 的 所有样式。


## Installation
**Using npm**
``` bash
$ npm install vue-laydal --save
```

## Usage

**1.全局安装**
> 全局安装会给所有子组件 添加 `layer` 函数 ， 即 你可以使用 `this.$layer` 访问 `layer` 的所有方法。
> 全局安装同时会给所有子组件注册 `<modal />` 组件，你可以在任何组件模板中使用它。

``` js
// mian.js
import Vue from 'vue'
import laydal from 'vue-laydal'

Vue.use(laydal)

// new Vue({ //...})
```
**2.局部安装**
> 使用解构的方式，在你需要的时候引入。引入 `modal` 组件时，需要局部注册下。

``` js
import { layer , modal } from 'vue-laydal'
export default {
  name: "demo",
  components:{ modal },
  data(){
    return {}
  },
  methods: {
    layer.msg('hello laydal')
  }
}
```

## Slots
| 名称 | 说明 |
| :----: | :----: |
| title | 模态框头部 slot |
| body | 模态框主体内容 slot |


## Properties

| 属性 | 类型 | 说明 | 可选值 | 默认值 | 是否必需 |
| :----: | :----: | :----: | :----: | :----: | :----: |
| v-modal | Boolean | 控制模态框的显示隐藏 | - | - | 是 |
| width | String | 模态框的宽度 | - | 580px | 否 |
| height | String | 模态框的高度 | - | auto | 否 |
| closeText | String | 关闭按钮的文本 | - | 关闭 | 否 |
| saveText | String | 保存按钮的文本 | - | 保存 | 否 |
| hideclosebtn | Boolean | 是否隐藏关闭按钮 | - | false | 否 |
| hidesavebtn | Boolean | 是否隐藏保存按钮 | - | false | 否 |
| clickmaskclose | Boolean | 是否使用点击弹窗遮罩层关闭模态框 | - | true | 否 |


## Events

**@confirm**
> 点击确定按钮触发事件句柄

``` html
<modal v-model="show" @confirm="yes"></modal>
<button @click="show = true">click</button>
```

``` js
export default {
  data(){
    return {
      show: false
    }
  },
  methods: {
    yes(){
      // do something you need before hide the modal
      this.show = false;

    }
  }
}
```


**@shown**
> 模态框显示时触发事件

``` html
<modal v-modal="show" @shown="whenshow" />
<button @click="show = true">show modal</button>
```

``` js
export default {
  data(){
    return {
      show: false  // 默认隐藏
    }
  },
  methods: {
    whenshow(){
      // do some thing when the modal shown ...
    }
  }
}
```

**@hidden**
> 模态框隐藏时触发事件

``` html
<modal v-modal="show" @hidden="whenhide"/>
<button @click="show = true">show modal</button>
```

``` js
export default {
  data(){
    return {
      show: false  // 默认隐藏
    }
  },
  methods: {
    whenhide(){
      // do some thing when the modal hidden ...
    }
  }
}
```
