<template>
  <div>
    <div class="larger-border">
      <h3>啊哈！我是最外面的根组件AwA！</h3>
      <!-- 在模版template中可以直接通过 $store.state 访问到存在state中的数据 -->
      <p>我从vuex中获取到的值为: {{ $store.state.publicCount }}</p>
      <input type="text">
      <SonComp1></SonComp1>
      <hr>
      <SonComp2></SonComp2>
      <br>
      <em>请在F12控制台查看更多信息 </em>
    </div>
  </div>
</template>

<script>
import SonComp1 from './components/SonComp1.vue'
import SonComp2 from './components/SonComp2.vue'

export default {
  components: {
    SonComp1,
    SonComp2
  },

  created () {
    console.log(this.$store)
  }
}
</script>

<style scoped>
  .larger-border{
    width: 600px;
    height: 480px;
    border: 4px solid grey;
  }
</style>
