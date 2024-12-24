<template>
  <div>
    <div id="outer">
      <h3>你好，我是父组件, 我只包含了Middle</h3>
      <p>当前的值是: {{ bakaValue }}</p>
      <p><input type="number" placeholder="请输入要传的值(仅数字)" 
          ref="inputValue" style="height: 20px;" @keyup.enter="sendProvide"></p>
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
    bakaValue.value = inputValue.value.value
    console.log(`父组件已向'虚无空间'提供了值: ${inputValue.value.value}`);
  }
}


provide('receiveThis', bakaValue) // '提供'输入框内的数据

// 要想实现其他组件更改所provide的值，'丢数据的组件'也要把"修改方法"给丢进去
// (修改方法对应的的还是'本组件'里面的修改，谁丢的数据谁负责)
let addValue = () => {
  bakaValue.value++;
  console.log(`不知道哪个组件(其他组件)，请求的'添加方法+'已响应`);
}

// 今天生病了，休息一天xwx

let decValue = () => {
  bakaValue.value--;
  console.log(`不知道哪个组件(其他组件)，请求的'减小方法-'已响应`);
}

provide('addFunction', addValue)
provide('decFunction', decValue)

</script>

<style>
  #outer{
    text-align: center;
    border: 3px solid black;
  }
</style>