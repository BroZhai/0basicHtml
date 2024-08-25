<template>
  <div>
    <!-- 我们先尝试去'全局注册'一个v-focus自动聚焦指令
      一进页面立刻就"锁定输入框"
    -->
      <h2>自定义指令v-focus</h2>
      <input type="text" style="width: 20em;" placeholder="我将会因v-focus而被进来时自动选中owo" v-focus>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
  
</style>