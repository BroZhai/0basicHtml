<script setup>
import { reactive,ref } from 'vue';

  // 先来演示纯"死对象"转"或对象"的reactive()
  const testObj={
    name:"Pancake",
    lv:26,
    skill:["近身搏斗",".45 ACP精准射击","M67范围空炸","EMP电子干扰"]
  }
  
  let pureObj=reactive(testObj)
  //在控制台打印reactive出来的 "活对象"pureObj
  console.log(pureObj);



</script>

<template lang="">
  <div>
    {{ pureObj }}
  </div>
</template>

<style>
  
</style>