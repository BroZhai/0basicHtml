<template>
  <div>
    <NavBar></NavBar>
  </div>

</template>
<script>
import NavBar from './views/NavBar.vue';
export default {
  components:{
    NavBar,
  }
}
</script>

<style scoped>
  .nav{
    border: 3px solid black;
    text-align: center;
  }

  .box{
    display: inline-block;
    border: 2px solid black;
    width:150px;
    position: relative;
    text-align: center;
    margin-left: 30px;
    margin-top: 20px;
  }

  .box:hover{
    background-color: cyan;
  }

  /* 设置 选中"模糊"router-link 的样式 
    设置其选中后背景变蓝
  */
  .router-link-active{
    background-color: #0da0e9;
  }
</style>