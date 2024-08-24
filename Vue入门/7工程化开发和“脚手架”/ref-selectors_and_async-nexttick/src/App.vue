<template>
  <div class="App">
    <h2>诶嘿，我是来捣乱的-w-</h2>
    <div class="confused">
      <h2>哎呀？捣乱失败了owo...</h2>
      <!--这是外部(最'上'层)的class名，是刻意用来误导querySelector的-->
    </div>
    <AnEchart></AnEchart>
    <hr>
    <!-- 现在，我们来试下 给子组件加ref, 看能不能过 -->
    <LoginBox ref="logbox"></LoginBox>
    <p>
        <button class="btn" @click="loginBoxObj">获取登录信息</button> 
        <button class="btn" @click="loginBoxClr">清除输入</button>
    </p>
  </div>
</template>

<script>

import AnEchart from './components/AnEchart.vue';
import LoginBox from './components/LoginBox.vue';

export default {
  components:{
    AnEchart,
    LoginBox,
  },

  methods:{

    loginBoxObj(){
      this.$refs.logbox.getLoginObj();
    },

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