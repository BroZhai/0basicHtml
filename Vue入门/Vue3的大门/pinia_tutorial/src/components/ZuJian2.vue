<template>
  <div>
    <p>我是ZuJian2: 值为 {{ myStoreEntity.count }} &nbsp;<button @click="myStoreEntity.subCount">-</button></p>
  </div>
</template>

<script setup>
import { myStore } from '@/stores/counterStore';
const myStoreEntity = myStore()
</script>

<style>
  
</style>