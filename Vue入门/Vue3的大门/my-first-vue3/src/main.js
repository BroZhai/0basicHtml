
// 导入一个全局的样式文件main.css
import './assets/main.css'

// main.js还是之前那个main.js, 但是vue3这里创建"Vue实例"的方法不太一样了
// 之前vue2的时候，咱是在最下面直接new Vue()了一个Vue实例对象，这里直接变成"调用创建函数 createApp()了" OAO

import { createApp } from 'vue' // 从vue3中导入 "创建Vue实例" createApp()方法
import App from './App.vue' // 导入默认的根组件 "App.vue"

// 使用导入的"App.vue"根组件 创建为一个Vue实例， 并挂在到index.html中 id="app"的dom
// (没错目录下"多了一个index.html"，数据最终会“挂载”在那里完成渲染！)
createApp(App).mount('#app')
