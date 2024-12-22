<template>
  <div>
    <input type="text" placeholder="这里是输入框的默认文字" ref="customizedName">
    &nbsp;&nbsp;&nbsp; <button>点击聚焦左侧方框</button>
    <p>获取到的子组件的值为: {{ childValue }} &nbsp;&nbsp;&nbsp; <button>立即获取</button></p>
  </div>
  <hr>
</template>

<script setup>
import {ref} from 'vue'
// 建一个'空ref' 虚晃一枪，我们在标签中'只要它的名字'
const customizedName = ref(null)
const childValue = ref(0)
</script>

<style>
  
</style>