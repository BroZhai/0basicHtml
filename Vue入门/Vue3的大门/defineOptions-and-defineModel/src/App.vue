<template>
  <div>
    <h3>这里是暂时没有啥用的根组件</h3>
    <!-- defineOptions的用法在/views的组件中有示例 -->

    <!-- 下面的子组件用于演示 defineModels，父组件将'bianliang'值传给了子组件，同步到本组件的数据 -->
    <InputModel v-model="bianliang"></InputModel>
    <h4>父组件渲染的值: {{ bianliang }}</h4>
  </div>
</template>

<script setup>
import InputModel from './components/InputModel.vue';

import {ref} from 'vue'
const bianliang = ref(114514)
</script>

<style>
  
</style>