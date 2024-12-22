<template>
  <div>
    <h3>你好，我是子组件，我的值是: {{ myValue }}</h3>
  </div>
</template>

<script setup>
const myValue=1017
defineExpose({
  myValue
})
</script>

<style>
  h3{
    text-align: center;
  }
</style>