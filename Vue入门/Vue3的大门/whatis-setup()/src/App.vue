<script>
export default {
  setup(){
    console.log(`哦吼，我比下面的beforeCreated哥们执行的更早耶~~`);
  },
  beforeCreate(){
    console.log(`来自beforeCreated的消息: wc外挂！`);
  }
  // 可以在控制台看到是setup()更先于执行
}
</script>

<template>
  <div>
    
  </div>
</template>



<style>
  
</style>