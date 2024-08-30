import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 从router文件夹中导入 "单独写的"路由模块
import router from "@/router/index.js"

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
