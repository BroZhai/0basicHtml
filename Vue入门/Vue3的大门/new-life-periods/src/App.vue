<template>
  <div>
    <div class="title">
      Vue3学习计划重启了
    </div>
    <div class="content">
      <p>搞完之后去看看后端服务器之类的东西，好像蛮好玩的</p>
      <em>2024/12/21</em>
    </div>
  </div>
</template>


<script setup>
  import {ref} from 'vue'
  const setupMsg = () => {
    console.log('啊哈，setup里面的消息被触发了');
  }
  setupMsg();
</script>


<style>
  .title{
    text-align: center;
    font-size: 40px;
    font-style: normal;
    color: red;

  }
</style>