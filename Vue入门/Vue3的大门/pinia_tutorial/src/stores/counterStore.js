// 现在，我们又回到了'搞数据仓库'的时间
// 要想使用 Pinia创建仓库，那么就要用到 {defineStore} 这个宏
import { defineStore } from "pinia";
import { ref } from "vue";

/* defineStore 语法：
  defineStore('仓库名'，{对象}(Vue2写法) 或 () => {回调函数}(Vue3组合式写法))
  Tips: defineStore会返回一个 '函数', 因此在左边要有个 '接收变量' (别忘了还有export导出后，其他的组件才能用)
*/

// 以下例子用的是Vue3的写法
// (别忘了要把仓库里面的东西export导出去)
export const myStore = defineStore('helloCounter', () => {
  // 声明数据 state (但是在Vue3组合式的语法中压根都不用state, '直接ref()声明数据'就好了)
  const count = ref(818)
  const msg = ref('这是仓库里面一个额外的 消息数据')

  // 因为里面写的是一个'箭头函数'，我们便要将上面写的 各个变量/函数 return出去，才能用
  return{
    count,
    msg,
  }
})