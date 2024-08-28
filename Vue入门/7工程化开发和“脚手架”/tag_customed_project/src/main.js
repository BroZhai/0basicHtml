import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.directive("focus",{ //v-focus
  inserted(el){
    // 简单粗暴，获取到"新插入"到页面中的dom,并直接用el抓到他调取其focus()
    el.focus();
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
