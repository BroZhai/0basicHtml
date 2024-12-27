// 现在，我们又回到了'搞数据仓库'的时间
// 要想使用 Pinia创建仓库，那么就要用到 {defineStore} 这个宏
import { defineStore } from "pinia";
import { computed, ref } from "vue";

/* defineStore 语法：
  defineStore('仓库名'，{对象}(Vue2写法) 或 () => {回调函数}(Vue3组合式写法))
  Tips: defineStore会返回一个 '函数', 因此在左边要有个 '接收变量' (别忘了还有export导出后，其他的组件才能用)
*/

// 以下例子用的是Vue3的写法
// (别忘了要把仓库里面的东西export导出去)
export const myStore = defineStore('helloCounter', () => {
  // 声明数据 state (但是在Vue3组合式的语法中压根都不用state, '直接ref()声明数据'就好了)
  let count = ref(818)
  let msg = ref('这是仓库里面一个额外的 消息数据')

  // 给这个仓库提供两个'变动数值'的方法 (这里先写同步的)，可以让不同的组件去调用 改仓库值
  const addCount = () => { // 直接es6暴力传个箭头函数过来 XD
    count.value++; // 注意，因为是在'本仓库'的范围内，k'直接用变量'即可访问对应的数据 [十分的方便好用]
    msg.value = ref("count的值已由仓库的'addCount()'方法增加")
    console.log(`count的值已由仓库的'addCount()'方法增加`);
  }
  const subCount = () => {
    count.value--;
    msg.value = ref("count的值已由仓库的'subCount()'方法减小")
    console.log(`count的值已由仓库的'addCount()'减小变动`);
  }
  
  // 基于'数据计算' 直接产生的新结果 (配置getters [computed属性])
  // 语法: computed (回调函数)
  const doubledCount = computed(() => {
    let dValue = count.value*2;
    return dValue
  })
  // 因为里面写的是一个'箭头函数'，我们便要将上面写的 各个变量/函数 return出去，才能用
  return{
    count, 
    msg,
    // 俩'变动方法'
    addCount,
    subCount,

    // 一个'计算属性'computed
    doubledCount,
  }
})