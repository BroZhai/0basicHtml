/*有关"全局注册"
  在一般情况下，我们都是在写各个不同组件的“局部注册”
  但当某个组件"全局的复用性"很高的时候，我们不妨给它在main.js中来一个全局注册
  (这个通用的组件也要写在components中新建vue文件来写，和局部注册一样一样哒.w.)
*/
import Vue from 'vue'
import App from './App.vue'
// 和App.vue中一样的导包方式
import GlobalButton from './components/GlobalButton.vue'

Vue.config.productionTip = false

//用"Vue.component("导入包名", 包对象)" 来 "直接声明"全局模块，声明好之后直接去 其他子模块中的template内调用即可
Vue.component("GlobalButton",GlobalButton);

new Vue({
  render: h => h(App),
}).$mount('#app')
