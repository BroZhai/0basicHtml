<template>
  <div class="App">
    <h2>诶嘿，我是来捣乱的-w-</h2>
    <div class="confused">
      <h2>哎呀？捣乱失败了owo...</h2>
      <!--这是外部(最'上'层)的class名，是刻意用来误导querySelector的-->
    </div>
    <AnEchart></AnEchart>
  </div>
</template>

<script>

import AnEchart from './components/AnEchart.vue';

export default {
  components:{
    AnEchart,
  }
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