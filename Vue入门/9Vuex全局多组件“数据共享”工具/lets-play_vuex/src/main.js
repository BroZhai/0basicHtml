import Vue from 'vue'
import App from './App.vue'
// 导入vuex export出来的仓库
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
  // 将store仓库挂载到根组件上
}).$mount('#app')
