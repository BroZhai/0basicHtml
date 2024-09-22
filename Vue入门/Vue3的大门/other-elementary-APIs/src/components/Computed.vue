<template>
  <div>
    <h3>组合式API的computed()</h3>
    <p>原数组: {{ numlist }}</p>
    <p>组合式computed过滤后的: {{ filtered }}</p>
    <h4>computed{get: , set:}完整写法</h4>
    <p>当前Computed到的内容: {{ filGetSet }}</p>
    <input type='text' v-model="changedVal"></input>&nbsp;
    <button @click="changeLast">修改最后一个值</button>
  </div>
</template>

<script setup>
  /* 接下来我们来看看组合式API的computed()函数 */
  import { computed,ref } from 'vue';
  // 逻辑很简单，()里面直接写 '回调函数'就好啦 (对应特定的'数据块')
  const numlist=ref([1,2,3,4,5,6,7,8,9,10]); //目标: 用computed 过滤出>4的所有数字
  let filtered=computed( ()=>{
    return numlist.value.filter( (curItem)=> curItem>=4 );
  })

  // 别忘了computed还有get set语法 (外部修改computed的'结果值')
  let changedVal=ref(''); //注: 简单数据也要用".value"才能访问到它的内部数据 xwx
  let letterList=ref(["T","E","K","O","N"]);
    // 里面写个{}，里面再写get:... set:...
  let filGetSet=computed({
    // 保留"KON" (现用逻辑: 保留"E"下标之后的所有字母)
    get: ()=>{
     return letterList.value.filter( (curItem,index)=> {
      if(index>1){
        return curItem;
      }
     }) 
    //  补充一下filter的用法 .filter( (当前遍历item,该item的index) => {执行的逻辑 + 是否return当前item或其他})
    // 就不要记什么 奇怪的"简写"啦，务实的给他{条件+return}写全 xwx
    },
    set: (incomingValue) => {
      letterList.value[letterList.value.length-1]=incomingValue
      console.log(`已将letterList的最后一项变为: ${incomingValue}`)
    }
  })
  const changeLast=() =>{
    filGetSet.value=changedVal.value; //直接强行赋值computed的结果，触发上面的set
  }
</script>

<style>
  
</style>