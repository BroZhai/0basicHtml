<template>
  <div>
    <div id="middle">
      <h4>我是档在他俩之间的'中间组件'，我只包含了Inner</h4>
      <InnerComp></InnerComp>
    </div>
  </div>
</template>

<script setup>
import InnerComp from './InnerComp.vue';

</script>

<style>
  #middle{
    text-align: center;
    border: 3px solid cyan;
  }
</style>