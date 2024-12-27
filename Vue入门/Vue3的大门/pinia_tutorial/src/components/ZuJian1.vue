<template>
  <div>
    <!-- 当我们在下面完成用 storeToRef()的解构赋值后，上面这里就可以直接用下面解出来的 '带响应式' 的值了awa -->
    <p>我是ZuJian1: 值为 {{ count }} <button @click="myStoreEntity.addCount">+</button></p>
  </div>
</template>

<script setup>
import { myStore } from '@/stores/counterStore';
import { storeToRefs } from 'pinia';
// 右侧先用 storeToRefs作用在'仓库方法'上，左侧申明你要抽出来的东西 (ES6)
const { count } = storeToRefs(myStore())

// 但是对于一般的方法来说，我们不能解构，还是按照'新建对象' = 调用函数() 的套路来
const myStoreEntity = myStore()
</script>

<style>
  
</style>