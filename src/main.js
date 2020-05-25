import Vue from 'vue'
import App from './App.vue'
import './style/global.css'
import store from './store'
import router from './router'

import './style/'
import './core/lazy_use'

// 菜单权限处理
import './permission'
// 本地数据mock 正式打包请删除
import './mock'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
