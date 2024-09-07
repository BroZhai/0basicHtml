// 构建 "购物车" 小仓库模块

// 导入axios网络请求包，'异步'请求时要用(记得提前装好)
import axios from "axios"

const state = { 
  // 对象数组itemList，里面一个对象就是一个CartItem商品数据
  itemList: [
    // 我们将这里初始化为空
    // 因为数据一会儿会从'后台'获取更新到这里来
    {},
  ],

}
// 只要是想要操作state里面的数据，那就必然少不了"经过mutations"这一步
const mutations = {
  // 我们来大胆一点，直接更新"整个购物车" (newList接收形参，接收整个变动的购物车)
  // (可应用于： 页面首次created后，请求json-server中的所有cart数据awa)
    updateList(context,newList){
      context.itemList=newList
    }
 }
const actions = {
  // 因为是网络请求，这里的"异步"肯定是不能少的
  async getList(context){
    // 这里axios的get地址即为我们"后台模拟器"的地址 (别忘了'异步'await等待！不然这段代码就没意义啦owo)
    let listGet= await axios.get("http://localhost:3000/cart")
    // 拿到数据后，用commit调用+传参 上面mutations里面的updateList()
    context.commit('updateList',listGet.data) //咱只要成功返回数据中的.data
    console.log(listGet) // F12打印一下get到的数据成没成功

    // 接下来去根组件的created中直接调用一下这里，看会不会有东西
  }
 }
const getters = { }

export default {
  namespaced: true,

  state,
  mutations,
  actions,
  getters
}