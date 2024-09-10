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
    },

    // 修改单个Item
    updateItemCount (context,itemObj) {
      // itemObj:{itemId: ID号，newCount: 变动的数值}
      const tagertID = itemObj.itemId
      let locatedItem = context.itemList.find( currentItem => currentItem.id === tagertID)
      locatedItem.count = itemObj.newCount
    },
 }
const actions = {
  // 因为是网络请求，这里的"异步"肯定是不能少的
  async getList (context) {
    // 这里axios的get地址即为我们"后台模拟器"的地址 (别忘了'异步'await等待！不然这段代码就没意义啦owo)
    let listGet= await axios.get("http://localhost:3000/cart")
    // 拿到数据后，用commit调用+传参 上面mutations里面的updateList()
    context.commit('updateList',listGet.data) //咱只要成功返回数据中的.data
    console.log(listGet) // F12打印一下get到的数据成没成功

    // 接下来去根组件的created中直接调用一下这里，看会不会有东西
  },

  // 再来一个后续的"异步count更新"，等待后台数据更新后，再来尝试变动vuex中的数据
  async delayUpdate (context,itemObj) {
    // 做个简单的"非0"判断
    if (itemObj.newCount < 0){
      console.log(`由于可能导致"异常数据"，已中断该操作`);
      alert('你在尝试空手套白狼嘛👀?');
      return
    }
    console.log(`请求修改的数据为:`);
    console.log(itemObj);
    // 先尝试变动一下后端的数据，卡个点
    // 注: 这里url的api访问原理是 json-server内置的，知道可以这么用就好啦awa
    // (api 奇妙方式: 数据对象/内部任一'属性' )
    let result = axios.patch(`http://localhost:3000/cart/${itemObj.itemId}`,{
      count: itemObj.newCount
    })
    console.log(`后台修改操作的返回结果为(展开Promise看[[PromiseState]]):`)
    console.log(result);
    context.commit('updateItemCount',itemObj)
  }
 }
const getters = { 
  // cart的"计算属性"，我们将用来计算"商品总数" 和 "价格总数" 并进行返回输出给 底部的BottomArea组件渲染用

  // 统计总商品数 并 返回输出
  totalCount(context){
    return context.itemList.reduce((sum,curItem) => {
      return sum += curItem.count;
    }, 0) // 从0开始
  },

  // 统计总价格 并 返回输出
  totalPrice(context){
    return context.itemList.reduce((sum,curItem) => {
      return sum += curItem.price * curItem.count;
    }, 0) //同上
  }
}

export default {
  namespaced: true,

  state,
  mutations,
  actions,
  getters
}