<template>
  <div>
    <h4>监视单个ref()'对象'</h4>
    <p>simpleCount当前值: {{ simpleCount }}</p>
    <button @click="scAdd">+1</button>
    <h4>监视多个ref()'对象'</h4>
    <p>s1当前值: {{ s1 }}; s2当前值: {{ s2 }}</p>
    <button @click="s1Add">s1++</button>&nbsp;&nbsp;<button @click="s2Add">s2++</button>
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

// 2. 监视多个ref对象 (前面写成数组[]的形式就好了)
const s1=ref(88);
const s2=ref(77);
const s1Add= ()=>{
  s1.value++;
}
const s2Add= ()=>{
  s2.value++;
}
watch([s1,s2], (newValue,oldValue) => {
  console.log(`检测到s1/s2发生了变化: ${newValue},原来的值: ${oldValue}`);
  // 这里的old/newValue都是"数组[]"
})


</script>

<style>
  
</style>