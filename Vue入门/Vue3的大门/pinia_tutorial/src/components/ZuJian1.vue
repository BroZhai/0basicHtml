<template>
  <div>
    <p>我是ZuJian1: 值为 {{ myStoreEntity.count }} <button @click="myStoreEntity.addCount">+</button></p>
  </div>
</template>

<script setup>
import { myStore } from '@/stores/counterStore';
const myStoreEntity = myStore()
</script>

<style>
  
</style>