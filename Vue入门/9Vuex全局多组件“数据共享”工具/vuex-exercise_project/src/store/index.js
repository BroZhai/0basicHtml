import Vue from 'vue'
import Vuex from 'vuex'

// 导入"购物车"小仓库module
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
  }
})
