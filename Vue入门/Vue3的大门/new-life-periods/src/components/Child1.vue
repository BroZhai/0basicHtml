<template>
  <div>
    <div id="display">
      <hr>
      <h3>这里是子组件Child1.vue</h3>
      <div id="box">
          <h4 v-if="props.someoneObj===null">目前还没有收到父组件传过来的数据，等待中...</h4>
          <div id="parentData" v-else>
            <p>学位: {{props.someoneObj.degree}}</p>
            <p>等级: {{props.someoneObj.lv}}</p>
            <p>对象开心吗: {{props.someoneObj.isHappy}}</p>
            <p><button @click="lvUp">请求升级</button>&nbsp;&nbsp;&nbsp;<button @click="lvDown">请求降级</button></p>
          </div>
      </div>
    </div>
  </div>

</template>

<script setup>
//  在Vue3中，因为有setup语法糖的加持，这里有点小变动
// (setup里面不能直接用props, 这就需要借助'编译器宏'defineProps的帮助)
// 用法: defineProps({ 传入键名: 数据类型})
const props = defineProps({
  someoneObj: Object
  // 拿到obj的数据后，直接放到上面template里面去渲染
})

// 这里则对应的是'子请求父改'(emit，但是不带$了)
// defineEmits宏，和上面的defineProps类似，里面填一个数组[] 用于标识 多个不同的emit操作

const emit = defineEmits(['inclvReq','declvReq'])

const lvUp = () => {
  emit('inclvReq',1) //请求父组件去'升一级' (一会儿父组件就要用"@" 来抓前面的'emit名')
}

const lvDown = () => {
  emit('declvReq',1) //请求父组件去'降一级'
}
</script>

<style>
  #display{
    text-align: center;
  }
  #box{
    width: 500px;
    height: 300px;
    border: 3px solid black;
    margin: 0px auto;
  }
  h4{
    position: relative;
    margin: 130px auto;
  }
  #parentData{
    position: relative;
    margin-top: 80px;
  }
</style>