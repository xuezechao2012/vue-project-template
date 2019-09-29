import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import _ from 'lodash' // lodash

import 'element-ui/lib/theme-chalk/index.css'
// ElementUI 按需引入
import { Form, Button, Table, TableColumn, Loading, Message, Image } from 'element-ui'

// ElementUI 按需使用
Vue.use(Form)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Image)

// 使用 lodash
Vue.prototype._ = _

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
