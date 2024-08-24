<template>
  <div class="App">
    <h2>诶嘿，我是来捣乱的-w-</h2>
    <div class="confused">
      <h2>哎呀？捣乱失败了owo...</h2>
      <!--这是外部(最'上'层)的class名，是刻意用来误导querySelector的-->
    </div>
    <AnEchart></AnEchart>
    <hr>
    <!-- 现在，我们来试下 给子组件加ref
      然后看能不能通过$refs选中该组件，并调用其内部的方法()
    -->
    <LoginBox ref="logbox"></LoginBox>
    <p>
        <button class="btn" @click="loginBoxObj">获取登录信息</button> 
        <button class="btn" @click="loginBoxClr">清除输入</button>
    </p>
    <em>请在F12控制台查看相应输出信息</em>
    <hr>
    <!-- Vue的异步更新(等待按序执行): $nextTick (就相当于ES6中的async) -->
    <AsyncEdit></AsyncEdit>
  </div>
</template>

<script>

import AnEchart from './components/AnEchart.vue';
import LoginBox from './components/LoginBox.vue';
import AsyncEdit from './components/AsyncEdit.vue';

export default {
  components:{
    AnEchart,
    LoginBox,
    AsyncEdit,
  },

  methods:{

    loginBoxObj(){
      // 定位到LoginBox组件后，调用其内部的getLoginObj()方法
      this.$refs.logbox.getLoginObj();
    },

    // 调用其内部的clearLogin()方法
    loginBoxClr(){
      this.$refs.logbox.clearLogin();
    },

  },
}

</script>

<style>
  .confused{
    width: 600px;
    height: 100px;
    margin: 20px auto;
    border: 2px solid black;
  }
  
</style>