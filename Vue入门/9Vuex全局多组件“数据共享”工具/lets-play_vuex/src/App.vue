<template>
  <div>
    <div class="larger-border">
      <h3>啊哈！我是最外面的根组件AwA！</h3>
      <input type="text">
      <SonComp1></SonComp1>
      <hr>
      <SonComp2></SonComp2>
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
  }
}
</script>

<style scoped>
  .larger-border{
    width: 600px;
    height: 440px;
    border: 4px solid grey;
  }
</style>
