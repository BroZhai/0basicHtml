<template>
  <div>
    <div class="ext">
      <h3>Hello，我是父组件</h3>
      <SonComp></SonComp>
    </div>
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