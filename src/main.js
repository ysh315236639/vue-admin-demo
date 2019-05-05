import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import echarts from 'echarts'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
