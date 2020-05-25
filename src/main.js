import Vue from 'vue'
import App from './App.vue'
import './style/global.css'
import store from './store'
import router from './router'
import './style/'
import './core/lazy_use'
import './permission'
import './mock'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
