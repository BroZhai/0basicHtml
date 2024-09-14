import Vue from 'vue'
import App from './App.vue'

// 我们现在这里尝试一下"直接导入全部组件"，按照官方的上手手册
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
