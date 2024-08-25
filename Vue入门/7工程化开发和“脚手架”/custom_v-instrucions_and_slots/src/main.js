import Vue from 'vue'
import App from './App.vue'

// 如果想"全局注册"一个所有组件通用的 自定v指令
// 我们就需要在main.js中进行注册 
/* 语法: Vue.directive('指令名',{
          阶段(el,binding){
            el: dom元素对象 的'接收形参'，内部可以直接这个形参调用其方法和属性
            binding: 拿到v-自定义数据名=<u>数据</u> ，通过binding.value即可取得该 数据的值
           (一些操作...)
          },
          ...
          其他阶段...
        })
*/
Vue.directive('focus',{
  inserted(el){
    el.focus(); //
  },
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
