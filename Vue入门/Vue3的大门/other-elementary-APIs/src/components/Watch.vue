<template>
  <div>
    <h2>组合式watch()</h2>
    <h4>监视单个ref()'对象'</h4>
    <p>simpleCount当前值: {{ simpleCount }}</p>
    <button @click="scAdd">+1</button>

    <h4>监视多个ref()'对象'</h4>
    <p>s1当前值: {{ s1 }}; s2当前值: {{ s2 }}</p>
    <button @click="s1Add">s1++</button>&nbsp;&nbsp;<button @click="s2Add">s2++</button>

    <h4>监视'复杂数据'(对象)和deep, immediate的配置</h4>
    <p>pokemon的当前值: {{ pokemon }}</p>
    <button @click="changeLv">lv++</button>

    <h4>仅监视对象中的"某单一属性"</h4>
    <p>Tekon的当前值: {{ Tekon }}</p>
    <p>
      <input type="text" 
      v-model="newTitle"
      placeholder="请输入要更改的title"></input> &nbsp;&nbsp;
      <button @click="cTitle">更改title</button> (仅这里的变动会在控制台被打印)
    </p>
    <button @click="cRate">funkyRating++</button>
  </div>
</template>

<script setup>
import {isMemoSame, ref,watch} from 'vue'
const simpleCount=ref(66) //要监视的 '简单数据1'
const scAdd= ()=>{
  simpleCount.value++; //变动'简单数据1'
}

// 1. 监视单个ref()'对象' (简单数据1)
/* 语法 watch(ref对象名, ref数据发生变化后 触发的"回调函数":(变动的新值形参，就值形参) => {
      ...
    })
*/
watch(simpleCount, (newValue,oldValue)=>{
  console.log(`检测到simpleCount的值发生了变化，新值: ${newValue}，老值: ${oldValue}`);
})

// 2. 监视多个ref对象 (前面写成数组[]的形式就好了)
const s1=ref(88);
const s2=ref(77);
const s1Add= ()=>{
  s1.value++;
}
const s2Add= ()=>{
  s2.value++;
}
watch([s1,s2], (newValue,oldValue) => {
  console.log(`检测到s1/s2发生了变化: ${newValue},原来的值: ${oldValue}`);
  // 这里的old/newValue都是"数组[]"
})

// 3. 监视一个"复杂数据"(对象)，涉及到deep和immediate(监听全部属性 和 是否一进页面就监听)
// (我们需要在回调函数后面 ",加多个对象{}" 里面就写deep和immediate的true/false)
const pokemon=ref({ //创建一个"复杂数据"(对象)
  name:"Flareon",
  lv:33,
  skill:["bite","swift","Fireball"]
})
const changeLv= ()=>{
  pokemon.value.lv++
}
watch(pokemon, (newValue,oldValue) => {
  console.log(`pokemon发生了变化，新值:`);
  console.log(newValue);
}, {
  deep:true, //是否监听该对象的'全部属性'
  immediate:false //是否'一进页面'就监听
})

// (*新！！*) 4. 仅监视对象中的'某个属性'，而非全部
// 主要就是在watch的时候 不再是'直接丢整个ref对象'，用 () => ref对象.value."要监视的单一属性"

// 我们这里只监视"title"而不关心funkyRating
const Tekon=ref({
  title:"blackCat",
  funkyRating: 233
})
const newTitle=ref('')
const cTitle = () => {
  Tekon.value.title=newTitle.value
}
const cRate = () => {
  Tekon.value.funkyRating++
}

watch( () => Tekon.value.title, (newValue,oldValue)=>{
  console.log(`Tekon的称号变化为: ${newValue}, 之前是: ${oldValue} (funkyRating的变动I don't care~~)`);
} )
</script>

<style>
  
</style>