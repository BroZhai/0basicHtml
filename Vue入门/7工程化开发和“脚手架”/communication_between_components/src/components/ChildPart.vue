<template>
    <div class="App">
        <p>Ciallo~,这里是子组件<br>接下来将展示从父组件中接收到的"妙妙信息~~"</p>
        <hr>
        <p>宝可梦名: {{ pokemon.name }}</p>
        <p>类型: {{ pokemon.species }}</p>
        <p>当前等级Lv: {{ lv }}</p>
        <p>可用技能: {{ skills }}</p>
        <!-- 下面的按钮尝试"向父组件发送变性请求owo" -->
        <p>性别 {{ ismale? "♂": "♀"}} <button @click="changeSex">请求变换性别owo</button></p>

    </div>
</template>
<script>
export default {
  //下面的 "props:[]" 为一种最简单的"仅展示"写法
  props:['pokemon','lv','skills','ismale'],

  //除了"仅展示"的写法外，我们还能对 父组件"传入的值" 进行校验(类型 是否必填[非空] 设定默认值 自定义判断...)
  //这就涉及到props的复杂写法了(写成对象props:{数据:{...},...})
  /*
    props:{
      传入数据名:{
        type: 类型, //Number String Boolean ...
        required: true/false,  //是否为必填项(能为空)
        default: 默认值,  //如果该项没传参，就用这里定义的'默认值'
        validator(传入数据对象形参){
          // 自定义校验逻辑 (如"大小范围判断")
          return true/false (是否通过自定义判断) 【可以顺带加点console.error(提示信息)！】
        }
      }
    }
  */

  
  methods:{
    changeSex(){ 
      //子请求父 修改用.$emit("父接收响应名", 数据操作)【注意"数据操作"不能直接有"赋值=",这个操作得让父组件来】
      this.$emit("changeSexPls",!this.ismale);
    }
  },
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