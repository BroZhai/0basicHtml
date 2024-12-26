<template>
  <div>
    <h3>你好，我是根组件，我从仓库渲染的值为: {{ myStoreEntity.count }}</h3>
    <p v-if="myStoreEntity.msg!==null">{{ myStoreEntity.msg }}</p>
    <ZuJian1></ZuJian1>
    <ZuJian2></ZuJian2>
  </div>
</template>

<script setup>
// 导入两个写好的'子组件'
import ZuJian1 from './components/ZuJian1.vue';
import ZuJian2 from './components/ZuJian2.vue';

// 导入'@/store 仓库export的东西' (注意：这里到导进来的仓库是个'方法()'，要先调用才能用)
import { myStore } from '@/stores/counterStore';
const myStoreEntity = myStore(); // 调用之后会得到一个'仓库对象'，我们可以直接通过调用该仓库的各种'属性/方法'来实现数据的渲染 / 修改
// (上面的myStoreEntity.msg就是一个'渲染'的例子)



</script>

<style>
  
</style>