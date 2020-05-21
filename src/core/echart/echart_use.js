import Vue from 'vue'
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
Vue.component('v-chart', ECharts)
