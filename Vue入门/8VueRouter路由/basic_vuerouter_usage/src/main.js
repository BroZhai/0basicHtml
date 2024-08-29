import Vue from 'vue'
import App from './App.vue'

// npm install好后引包
import VueRouter from 'vue-router'

Vue.config.productionTip = false
// 用Vue的"官方安装".use()方式装官方包
Vue.use(VueRouter)

// 创建一个路由对象
const router=new VueRouter({})

new Vue({
  render: h => h(App),
  // 将创建的路由对象挂载到根组件上
  router, //这是"router:router的简写"，如果路由对象为其他名字(r),这里要写成 router:r,
}).$mount('#app')
