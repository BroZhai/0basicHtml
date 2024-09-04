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
      // 传入"state"参数，这里就不用再this了，直接用state即可
      state.publicCount++
    },
    subinStore (state) {
      state.publicCount--
    },
    directChange (state, incomingValue) {
      // 多出来一个incomingValue形参，用于接收传过来的参数
      state.publicCount = incomingValue
    }
    // Note: 对于mutations来说，里面的任何操作都是即刻的，所以不能再里面实现"异步操作"
  },
  // 要想实现"异步操作"，就不得不用到actions啦owo
  // actions的本质原理其实还是"commit请求"mutations里面的方法，像是一种"外部封装"，不过能用"处理异步"了
  // 但是在组件中调用时，调用的是actions里面的"封装方法"，用关键字dispatch
  actions: {
    delayChange (context, incomingValue) {
      // 我们在里面用setTimeout()函数来"模拟异步"操作
      // 上面的"context"形参即为"state对象"(这里state中的数据未"模块化"分类)
      setTimeout(() => {
        context.commit('directChange', incomingValue)
        console.log('publicCount现已被改变！')
      }, 1000)
    }
  }
})

// 导出给main.js使用
export default store
