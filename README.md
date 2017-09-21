# kfw-vue-template

> 快房传媒微信端基于 Vue.js 的开发模板

## 授权说明

`App.vue` 作为入口文件，检测是否存在 Auth，如果不存在，跳转至微信授权页面

`redirect_url` 为首次访问的路径，授权跳转回后，进入 `author/:auth` 路由的过渡页面，并将 `auth` 存入 `localStorage`

从而完成整个授权流程

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
