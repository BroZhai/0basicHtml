<script setup>
import { reactive,ref } from 'vue';
import Watch from './components/Watch.vue';
import Computed from './components/Computed.vue';
  // 根组件App.vue就用来演示reactive()和ref()了，剩下的其他组合式API就单独写成'对应的vue模块'放到components里面去了
  // 不然这里的script将会是一大坨，极度的不美观((

  /* 先来演示纯"死对象"转"或对象"的reactive() */
  const testObj={
    name:"Pancake",
    lv:26,
    skill:["煎饼冲击","恢复","振奋"]
  }
  
  let pureObj=reactive(testObj)
  //在控制台打印reactive出来的 "活对象"pureObj
  console.log(pureObj);

  /* 接下来咱来看看ref(),其实就多了个"简单数据"的支持(省的写对象) 【但通常来说这个用的更多，那就记它了】 */
  let simpleData=ref(65) //简单数据
  let pure2=ref({
    name:"Tekon",
    lv:43,
    skill:["近身搏斗",".45 ACP精准射击","M67范围空炸","EMP电子干扰"]
  })
  console.log(pure2.value.skill); //用ref()的话，对象也给存在'.value'里面了

  // 创建俩变动方法
  const dec = ()=>{
    // 注意在脚本中，ref()出来的对象 还要用".value"才能访问到里面的值，但是在模版中就不用了(真奇怪
    simpleData.value--;
  }
  const add = ()=>{
    simpleData.value++;
  }
  
</script>

<template>
  <div>
    <!-- 演示reactive() 和 ref()创建响应式数据 -->
    <h3>reactive</h3>
    <p>pureObj: {{ pureObj }}</p>
    <!-- 下面放了个输入框，去尝试直接改"活对象"pureObj.name -->
    <input type='text' v-model="pureObj.name"></input>
    <hr>
    <h3>ref()</h3>
    <p>simpleData当前的值为: {{ simpleData }}</p>
    <p>
      <button @click="dec"> -1 </button> <button @click="add"> +1 </button>
    </p>
    <p>pure2: {{ pure2 }}</p>
    <input type='text' v-model="pure2.name"></input>
    <hr>
    <!-- 接下来是 组合式computed -->
    <Computed></Computed>
    <hr>
    <!-- 接下来是 组合式watch -->
    <Watch></Watch>
    
  </div>
</template>

<style>
  
</style>