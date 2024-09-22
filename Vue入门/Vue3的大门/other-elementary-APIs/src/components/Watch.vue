<template>
  <div>
    <p>simpleCount当前值: {{ simpleCount }}</p>
    <button @click="scAdd">+1</button>
  </div>
</template>

<script setup>
import {ref,watch} from 'vue'
const simpleCount=ref(66) //要监视的 '简单数据1'
const scAdd= ()=>{
  simpleCount.value++; //变动'简单数据1'
}

// 1. 监视单个ref()'对象' (简单数据1)
/* 语法 watch(ref对象名, ref数据发生变化后 触发的"回调函数":(变动的新值形参，就值形参) => {
      ...
    })
*/
watch(simpleCount, (newValue,oldValue)=>{
  console.log(`检测到simpleCount的值发生了变化，新值: ${newValue}，老值: ${oldValue}`);
})

</script>

<style>
  
</style>