<template>
  <div>
    <input type="text" placeholder="这里是输入框的默认文字" ref="customizedName">
    &nbsp;&nbsp;&nbsp; <button @click="clickFocus">点击聚焦左侧方框</button>
    <p>当前获取到的子组件的值为: {{ childValue }} &nbsp;&nbsp;&nbsp; <button @click="getValue">立即获取</button></p>
  </div>
  <hr>
  <ChildWithValue ref="childComponent"></ChildWithValue>
</template>

<script setup>
import {ref} from 'vue'
import ChildWithValue from '@/components/ChildWithValue.vue'
// 建一个'空ref' 虚晃一枪，我们在标签中'只要它的名字'
const customizedName = ref(null)
const childComponent = ref(null)
let childValue = ref(0)


// 按钮'点击聚焦'的实现
const clickFocus = ()=>{
  // 现在想办法获取到'输入框的dom'
  console.log(customizedName);
  customizedName.value.focus(); // 用ref名定位到了上面的input，并调用了输入框的'focus()聚焦方法'
  // 注意不用再用'this'了
}

// 从子组件'获取值' 然后 渲染到根组件中
let getValue = ()=>{
  console.log(childComponent.value.myValue);
	childValue.value = childComponent.value.myValue; // 注意，子组件要'提前expose'这个myValue才能拿得到
  // 还有，要想‘响应式’的数据更新，就要用到'变量.value' (Vue3里面每一个变量都会有个.value)
}
</script>

<style>
  
</style>