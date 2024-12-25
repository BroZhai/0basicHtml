<template>
  <div class="inputModel">
    <h5>我是子组件InputModel.vue</h5>
    <input type="text"
    :value="received_V_model"
    @input="e => received_V_model = e.target.value"
    >
    <!-- 快速复习一下'拆v-model'
    :xxx = "数据值" (绑定'数据的显示')
    @xxx = "e => {xxx}" (这里的'e'是'$event'的缩写，表示'正在触发的'该事件，用e.target拿到'触发事件的dom实体'
    {内写'直接写出'想要执行的操作} (defineModel的特性)
    tips: '只有一行'的操作可省略'{}'不写
    )
    -->
  </div>
</template>

<script setup>
// 现在，我们就可用用上defineModels了
import { defineModel } from 'vue';
const received_V_model = defineModel()
</script>

<style scoped>
  .inputModel{
    width: 500px;
    height: 120px;
    border: 3px solid black;
  }
</style>