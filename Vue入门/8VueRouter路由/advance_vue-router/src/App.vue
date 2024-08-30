<template>
  <div>
      <div class="nav">
        <!-- 
        <a class="box" href="#/message">消息</a>
        <a class="box" href="#/contacts">联系人</a>
        <a class="box" href="#/moments">动态</a> 
        -->
        <router-link to="/message" class="box">消息</router-link>
        <router-link to="/contacts" class="box">联系人</router-link>
        <router-link to="/moments" class="box">动态</router-link>
        <!-- 接下来，我们来玩转一下跳转传参, 下面首先是"查询参数?名=值" -->
        <router-link to="/searchPage" class="box">搜索</router-link>
        <h4>这里是一直保持不变的"导航栏组件"，变动的是下面展示的不同的"路由组件"</h4>
        <em>注意上方的"路由地址"后面也在变</em>
      </div>
    <!-- 别忘了要用<router-view> 对 "路由组件"的内容 进行展示！ -->
    <router-view></router-view>
    <hr>
    
  </div>

</template>
<script>

export default {
  
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