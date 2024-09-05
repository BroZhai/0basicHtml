<template>
  <div>
    <div class="ext">
      <h3>Hello，我是父组件</h3>
      <!-- 因为大仓库中的modules会把所有的小仓库state 直接挂在到"自身"上 -->
      <!-- 我们就可以直接通过 大仓库$store.state.小仓库名(.具体哪个属性) 来进行直接访问 -->
      <!-- (以下演示的均为'根state目录') -->
      <p>这里"直接访问"user模块的state数据为: {{ $store.state.user }}</p>
      <p>env模块中的数据为: {{ $store.state.env }}</p>
      <SonComp></SonComp>
    </div>
    <em style="display: block; text-align: center;"><h4>请在F12控制台查看更多信息</h4></em>
  </div>
</template>

<script>
import SonComp from './components/SonComp.vue';
export default {
  components:{
    SonComp,
  }
}
</script>
<style scoped>
  .ext{
    width: 600px;
    border: 3px solid black;
    margin: 0px auto;
  }
</style>