import Vue from 'vue'
import Vuex from 'vuex'

// 还是和之前用VueRouter一样，使用前要用Vue的方式 "官方安装" 一下 (上面是导包)
Vue.use(Vuex)

// 创建一个"空仓库" 用来存放数据 [Vuex.Store()实例]
const store = new Vuex.Store()

// 导出给main.js使用
export default store
