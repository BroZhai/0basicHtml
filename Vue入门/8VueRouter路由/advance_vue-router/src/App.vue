<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
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

</style>