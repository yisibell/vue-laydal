# @aidol/vue-laydal

A popup component for vue.js.

## Introduce

- `loading` 加载提示服务。其中定义了 3 种动画效果。

## Installation

**Using npm**

``` bash
$ npm install @aidol/vue-laydal --save
```

## Usage

``` js
// mian.js
import Vue from 'vue'
import laydal from '@aidol/vue-laydal'

Vue.use(laydal)

// new Vue({ //...})
```

## `Loading` 服务的使用

**使用方式**

``` js
const loadingInstance = new this.$LayLoading()

loadingInstance.open();  //开启 loading

// 随后使用 `loadingInstance.close()` 关闭 loading 即可

```

**按需导入**

``` js
import { LayLoading } from '@aidol/vue-laydal'
const loadingInstance = new LayLoading()
```

**Loading配置**

你可以向构造函数传入选项配置。

``` js
const loadingInstance = new LayLoading({ theme : "wave" , bgcolor: "red"})
```

| 选项 | 类型 |默认值 | 可选值 | 描述 |
| :---: | :---: | :---: | :---: | :---: |
| theme | String | `three-bounce` | `fading-circle` , `wave` | 动画类型 |
| bgcolor | String | `#27A2FF`(淡蓝) | 合法的 css 颜色值 | 设置loading 的颜色 |


# Logs

> 2018-10-23 新增 `loading` 功能

> 2020-4-17 去除 `model` 及 `layer`。
