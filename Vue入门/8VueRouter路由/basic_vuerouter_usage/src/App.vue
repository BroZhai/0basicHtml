<template>
  <div>
    <!-- 配置"自定义'路由'名"，一会对应main.js router对象中的 "path"项
      注意别忘了"挂载路由"后 多出来的"#"
    -->
    <a class="box" href="#/message">消息</a>
    <a class="box" href="#/contacts">联系人</a>
    <a class="box" href="#/moments">动态</a>
    
    <router-view></router-view>
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