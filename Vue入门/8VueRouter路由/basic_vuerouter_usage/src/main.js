import Vue from 'vue'
import App from './App.vue'

// npm install好后引包
import VueRouter from 'vue-router'

//在main.js中导入其他的"路由组件"
import ContactMembers from './views/ContactMembers.vue'
import MessageBox from './views/MessageBox.vue'
import MomentPosts from './views/MomentPosts.vue'

Vue.config.productionTip = false
// 用Vue的"官方安装".use()方式装官方包
Vue.use(VueRouter)

// 创建一个路由对象
const router=new VueRouter({
  // 之后就是往里面写routes: [ {path: 路径, component: 从views文件夹导入的路由组件}, {...}]
  routes:[
    // 这里就像是 绑定 “组件文件” 和 "自定访问url映射"
    // (这里"捕获path请求")
    {path:"/message",component:MessageBox},
    {path:"/contacts",component:ContactMembers},
    {path:"/moments",component:MomentPosts},
  ]
})

new Vue({
  render: h => h(App),
  // 将创建的路由对象挂载到根组件上
  router, //这是"router:router的简写"，如果路由对象为其他名字(r),这里要写成 router:r,

  // 当一切配置成功后，我们访问根组件时，会看到导航栏地址后面多了个"#/"
}).$mount('#app')
