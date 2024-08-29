<template>
  <div>
      <div class="nav">
        <!-- 配置"自定义'路由'名"，一会对应main.js router对象中的 "path"项
          注意别忘了"挂载路由"后 多出来的"#"
          (这里"发出path请求")
        -->
        <a class="box" href="#/message">消息</a>
        <a class="box" href="#/contacts">联系人</a>
        <a class="box" href="#/moments">动态</a>
        <h4>这里是一直保持不变的"导航栏组件"，变动的是下面展示的不同的"路由组件"</h4>
        <em>注意上方的"路由地址"后面也在变</em>
      </div>
    <!-- 别忘了要用<router-view> 对 "路由组件"的内容 进行展示！ -->
    <router-view></router-view>
  </div>

</template>
<script>

export default {
  
}
</script>

<style>
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
</style>