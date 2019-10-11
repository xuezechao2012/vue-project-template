import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
