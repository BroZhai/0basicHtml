import Vue from 'vue'
import Vuex from 'vuex'

// 这里别忘了导入modules
import user from './modules/user'
import env from './modules/env'

Vue.use(Vuex)

export default new Vuex.Store({
  // vuex插件默认自己建好的东西
  state: {
    indexMsg: "哦呀，这个大仓库state中的信息哦~"
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  // 诶? 这个modules就是用来 导入"子modules"的啦~
  // 要创建一份子modules, 在store目录下新建一个"modules"文件夹
  // 然后里面建各种js文件对应不同的"小仓库模块"
  // （在里面完善各个state,mutations,actions...啥的，最后导出到这里来使用）
  modules: {
    //modules中的'文件名'
    user,
    env,

    /*我们可以在浏览器的Vue调试插件中的vuex 来查看modules是否导入成功 */
  }
})
