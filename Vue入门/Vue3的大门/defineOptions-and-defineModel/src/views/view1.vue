// 我们看这个文件名不难发现，这个文件名好像有点'过于简单了'
<template>
  <div>
    <h4>假设我是一个'路由组件'，但是我的这个组件命名'并不符合规范' (大驼峰命名)</h4>
    <p>并且在该组件中也没有'重新给组件规范命名'并导出，这就出问题了((</p>
  </div>
</template>

<script setup>
/* 在原本Vue2的写法中，我们可以直接在script中
export{
  name: "xxx"
}
来'规范命名'，但是现在这里是Vue3的setup语法，所以肯定是出了个'更简单'的方法
不错，这正是我们'defineOptions'宏要干的
*/

//用前先导包，别忘了
import {defineOptions} from 'vue'

defineOptions({
  name:"FormalNameForRouter1"
  //...等其它属性
})

</script>

<style>
  
</style>