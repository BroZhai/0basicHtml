// 呐呐呐，这里就是拆分出来的"用户模块"modules啦~
// 在这里，我们就可以去单独的针对"用户模块"的数据进行 单独的设置(state,mutations,actions,getters)

const state = {
  userInfo: {
    name:"Pancake",
    age:"0x15",
  },
  magicItems: ["刀锋F2掌上移动PDA","idx调试手台","宝峰800GSM移动寻呼机","万能C-USB输入设备"],
  currency: 200,
}

// user数据的变动方法
const mutations = {
  resetUserInfo (state,incomingValue) {
    // 记得incomingValue要是个"{对象}"
    state.userInfo=incomingValue;
  },
}

// user数据的"异步"变动方法
const actions = {
  delayReset (context,incomingValue){
    // 注意，因为是在'小仓库'中，此处的context指的就是"本小仓库"的对象
    // 经典commit自己调自己XD
    setTimeout(() => {
      // 延迟1秒后更新用户数据 (commit调用本地的mutations)
      context.commit('resetUserInfo',incomingValue)
    }, 1000)
    
  }
}

// user数据的"计算操作"方法
// 别忘了"必须要return'操作结果'"awa
const getters = {
  // 让用户的名字变为全大写的"计算操作"方法
  upperName (state) {
    return state.userInfo.name.toUpperCase()
  }
}

// !!最后别忘了要将 上面所有数据"导出"，给总store当modules awa!!
export default {
  // 命名空间namespaced: 用于外部用'文件名'定位到这个 小仓库中，一般写成true
  namespaced: true,

  state,
  mutations,
  actions,
  getters,
}