// 这里就相当于 整个项目的"js核心"，这里的东西必定被执行
console.log("HiHi~ main.js现在被执行力owo");

//默认的写的作用: 先引入基础的vue开发包，导入App.vue，并利用App.vue里面写的"模版内容"去渲染指定的dom 
//导基础vue开发包
import Vue from 'vue'

//导入 App.vue (根/默认自带 组件)
import App from './App.vue'

Vue.config.productionTip = false; //提示文本: F12控制台是否显示"开发环境"文本提示

// Vue实例化，告知使用App.vue的"模版内容"去index.html中对指定dom(#app)进行渲染
new Vue({
  //render: 选择某个"模版内容"，要记得return!
  // render: h => h(App), 高级懒人简写xwx
  
  render: (anyNames) => { //这里的"anyNames" 是一个 "接收形参"，到时候会有个方法createElement()传给它
    //然后在下面调用它,"()"里面放要引用的.vue文件名
    return anyNames(App)
  }

}).$mount('#app') //和el:"xxx"功能一样，只是另外一种"挂载"写法XDD
