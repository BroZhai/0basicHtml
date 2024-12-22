<template>
  <div>
    <div id="outer">
      <h3>你好，我是父组件, 我只包含了Middle</h3>
      <p><input type="text" placeholder="请输入要传的值" ref="inputValue"></p>
      <p><button @click="sendProvide">传给最里面的组件</button></p>
      <MiddleComp></MiddleComp>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import MiddleComp from './components/MiddleComp.vue';

let inputValue = ref(null)

// 准备provide一个值 给最里面的 Inner组件使用
// 语法 provide('键名'，键值[变量])
let bakaValue = ref(null)
const sendProvide = () => {
  //蚌埠住了，这里会有两个value (第一个value是ref要查值用的，第二个value是'输入框的值')
  if(inputValue.value.value===""){
    alert(`诶，你有输入什么东西吗awa?`)
  }else{
    bakaValue.value = ref(inputValue.value.value)
  }
}
provide('receiveThis', bakaValue)
</script>

<style>
  #outer{
    text-align: center;
    border: 3px solid black;
  }
</style>