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
├─.browserslistrc --------------- // 浏览器兼容性
├─.env.development -------------- // 开发环境的环境变量
├─.env.production --------------- // 生产环境的环境变量
├─.env.test --------------------- // 测试环境的环境
├─.eslintignore ----------------- // eslint忽略文件
├─.eslintrc.js ------------------ // eslint配置
├─.gitignore -------------------- // git提交忽略文件
├─.prettierignore --------------- // prettier忽略文件
├─.prettierrc.js ---------------- // prettier配置
├─babel.config.js --------------- // babel配置
├─package-lock.json 
├─package.json 
├─postcss.config.js ------------- // postcss配置
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
│ ├─router ---------------------- // 路由
│ │ ├─index.js 
│ │ └─modules 
│ │   ├─about.js 
│ │   ├─home.js 
│ │   └─list.js 
│ ├─store ----------------------- // vuex数据
│ │ ├─getters.js 
│ │ ├─index.js 
│ │ └─modules 
│ │   └─app.js 
│ ├─styles ---------------------- // 全局样式
│ │ ├─btn.scss 
│ │ ├─element-ui.scss 
│ │ ├─element-variables.scss 
│ │ ├─index.scss 
│ │ ├─mixin.scss 
│ │ ├─reset.css 
│ │ ├─transition.scss 
│ │ └─variables.scss 
│ ├─utils ----------------------- // 全局工具
│ │ ├─auth.js 
│ │ ├─index.js 
│ │ └─request.js 
│ └─views ----------------------- // 页面
│   ├─About.vue 
│   ├─Home.vue 
│   └─List.vue 
└─vue.config.js ----------------- // vue及webpack配置
```

## 使用方法
```
npm i // 安装依赖
npm run dev // 运行项目
npm run build-test // 构建测试包 
npm run build-prod // 构建正式包 
npm run report // 项目打包分析 
```
