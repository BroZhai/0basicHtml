<template>
  <div>
    <div class="title">
      Vue3学习计划重启了
    </div>
    <div class="content">
      <p>搞完之后去看看后端服务器之类的东西，好像蛮好玩的
        <br>
        <b>请去F12控制台查看'不同周期'的输出日志</b>
      </p>
      <em>2024/12/21</em>
    </div>
  </div>
</template>


<script setup>
  import {onMounted} from 'vue'
  const setupMsg = () => {
    setTimeout(()=>{
      console.log('啊哈，setup里面的消息被触发了');
    },2000) // 延迟2秒后执行
  }
  setupMsg();

  // Vue3 里面所有的生命周期，前面就多了一个'on' (除了原来的destroy 变成了 Unmount XDDD)
  // 由于Vue3 根据对象'要啥用啥'的特性，生命周期可以多次作用在不同的对象(逻辑)上
  
  // 1号业务逻辑
  onMounted(()=>{
    console.log(`这里是onMounted触发了'1号业务逻辑'`);
  })

  // 2号业务逻辑
  onMounted(()=>{
    console.log(`我是2号逻辑desu yo`);
  })
</script>


<style>
  .title{
    text-align: center;
    font-size: 40px;
    font-style: normal;
    color: red;
  }

  .content{
    text-align: center;
  }
</style>