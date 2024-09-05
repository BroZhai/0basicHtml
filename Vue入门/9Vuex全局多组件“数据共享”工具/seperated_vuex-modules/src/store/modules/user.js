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
  taticalAct () {
    // console.log(`${store.state.userInfo.name} 使用了 ${store.state.userInfo.magicItems[2]} 进行了通讯`);
    
  }
}

// user数据的"异步"变动方法
const actions = {

}

// user数据的"计算方法"
const getters = {

}

// !!最后别忘了要将 上面所有数据"导出"，给总store当modules awa!!
export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
}