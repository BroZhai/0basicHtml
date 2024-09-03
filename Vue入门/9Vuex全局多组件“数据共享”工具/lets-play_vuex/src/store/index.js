import Vue from 'vue'
import Vuex from 'vuex'

// 还是和之前用VueRouter一样，使用前要用Vue的方式 "官方安装" 一下 (上面是导包)
Vue.use(Vuex)

// 创建一个"空仓库" 用来存放数据 [Vuex.Store()实例]
const store = new Vuex.Store({
  // 这里的state就相当于一个"共享数据中心"，类似于组件内部的data(){}
  state: {
    publicCount: 100,
    addInfo: '我是一个额外信息'
  },
  mutations: {
    // 在mutations中写"修改全局store数据"的方法
    addinStore (state) {
      state.publicCount++
    },
    subinStore (state) {
      state.publicCount--
    },
    directChange (state, incomingValue) {
      state.publicCount = incomingValue
    }
  }
})

// 导出给main.js使用
export default store
