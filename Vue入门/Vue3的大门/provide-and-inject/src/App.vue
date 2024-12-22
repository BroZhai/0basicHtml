<template>
  <div>
    <div id="outer">
      <h3>你好，我是父组件</h3>
      <p><input type="text" placeholder="请输入要传的值"></p>
      <p><button>传给最里面的组件</button></p>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
  #outer{
    text-align: center;
    border: 3px solid black;
  }
</style>