# vue-project-template

## 内置功能
* vuex 
* vue-router 路由模块化配置
* sass 模块化样式
* lodash 按需加载
* element-ui 按需加载
* axios 请求封装
* vue cli3 构建
* esint + prettier 代码校验
* 根据环境打包生成不同目录

## 目录结构
```
├─babel.config.js 
├─package-lock.json 
├─package.json 
├─postcss.config.js 
├─public 
│ ├─favicon.ico 
│ └─index.html 
├─README.md 
├─src 
│ ├─api 
│ │ └─api-test.js 
│ ├─App.vue 
│ ├─assets 
│ │ └─logo.png 
│ ├─components 
│ │ └─HelloWorld.vue 
│ ├─main.js 
│ ├─router 
│ │ ├─index.js 
│ │ └─modules 
│ │   ├─about.js 
│ │   ├─home.js 
│ │   └─list.js 
│ ├─store 
│ │ ├─getters.js 
│ │ ├─index.js 
│ │ └─modules 
│ │   └─app.js 
│ ├─styles 
│ │ ├─btn.scss 
│ │ ├─element-ui.scss 
│ │ ├─element-variables.scss 
│ │ ├─index.scss 
│ │ ├─mixin.scss 
│ │ ├─reset.css 
│ │ ├─transition.scss 
│ │ └─variables.scss 
│ ├─utils 
│ │ ├─auth.js 
│ │ ├─index.js 
│ │ └─request.js 
│ └─views 
│   ├─About.vue 
│   ├─Home.vue 
│   └─List.vue 
└─vue.config.js 
```