<template>
  <div>
    <a class="box">消息</a>
    <a class="box">联系人</a>
    <a class="box">动态</a>
  </div>
</template>
<script>

export default {
  
}
</script>

<style>
  .box{
    display: inline-block;
    border: 2px solid black;
    width:150px;
    position: relative;
    text-align: center;
    margin-left: 100px;
  }

  .box:hover{
    background-color: cyan;
  }
</style>