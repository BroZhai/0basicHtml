import Vue from 'vue'
import App from './App.vue'
// 导入vuex export出来的仓库
import store from './store'

Vue.config.productionTip = false
// 在main.(js)中访问store时 不再需要"$""
console.log(`在main.js中首次访问到的publicCount值为:${store.state.publicCount}`)

new Vue({
  render: h => h(App),
  store
  // 将store仓库挂载到根组件上
}).$mount('#app')
