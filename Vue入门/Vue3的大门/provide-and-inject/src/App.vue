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
import MiddleComp from './components/MiddleComp.vue';

</script>

<style>
  #outer{
    text-align: center;
    border: 3px solid black;
  }
</style>