import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

// 全局配置的页面默认title
import { baseTitle } from '@/config'

// ElementUI 按需引入
import { Form, Button, Table, TableColumn, Loading, Message } from 'element-ui'

// ElementUI 按需使用
Vue.use(Form)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)

// 按需使用 ElementUI 按需使用
Vue.use(Loading.directive)
// 挂载到vue实例上面
Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message

//关闭生产模式下给出的提示
Vue.config.productionTip = false

// 设置页面title
router.beforeEach((to, from, next) => {
  const title = to.meta.title
  title ? (document.title = title) : (document.title = baseTitle)
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
