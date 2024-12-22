<template>
  <div>
    <div id="outer">
      <h3>你好，我是父组件, 我只包含了Middle</h3>
      <p><input type="text" placeholder="请输入要传的值"></p>
      <p><button>传给最里面的组件</button></p>
      <MiddleComp></MiddleComp>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import MiddleComp from './components/MiddleComp.vue';

// 准备provide一个值 给最里面的 Inner组件使用
// 语法 provide('键名'，键值[变量])
let bakaValue = ref(9)
provide('receiveThis', bakaValue)
</script>

<style>
  #outer{
    text-align: center;
    border: 3px solid black;
  }
</style>