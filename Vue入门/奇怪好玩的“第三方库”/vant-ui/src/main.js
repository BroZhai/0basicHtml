import Vue from 'vue'
import App from './App.vue'
import '@/utils/vant-ui'

// 我们现在这里尝试一下"直接导入全部组件"，按照官方的上手手册
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

// 按需导入(要用到某个组件的时候)
/* 在目前的视图中， 咱就只用到了 Button 和 Field，故"手动"只导入他们俩即可
import {Field, Button} from 'vant';
Vue.use(Button)
Vue.use(Field)
[对于以上'按需导入'的代码，我们可以再给它拆成'单独的Js模块'，放在utils文件夹里面]
*/

// 啊..工作日

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
