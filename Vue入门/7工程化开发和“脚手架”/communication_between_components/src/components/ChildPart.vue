<template>
    <div class="App">
        <p>Ciallo~,这里是子组件<br>接下来将展示从父组件中接收到的"妙妙信息~~"</p>
        <hr>
        <p>宝可梦名: {{ pokemon.name }}</p>
        <p>类型: {{ pokemon.species }}</p>
        <p>当前等级Lv: {{ lv }}</p>
        <p>可用技能: {{ skills }}</p>
        <p>性别 {{ ismale? "♂": "♀"}}</p>

    </div>
</template>
<script>
export default {
  //
  props:['pokemon','lv','skills','ismale']
    
}
</script>
<style scoped>
  .App{
    width: 600px;
    height: 400px;
    border: 4px solid black;
    margin: 0px auto;
    padding: 20px;
    font-size: 24px;
  }
    
</style>