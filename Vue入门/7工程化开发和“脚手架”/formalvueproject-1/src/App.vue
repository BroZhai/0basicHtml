<!-- 双标签template —— 结构区
    可以理解成事这个Vue实例"自带的"一小段html
    在Vue2中，template内只能有一个"根元素"(最外层只能有一个div)
    但是Vue3就没有这样的限制了
    (工程项目创建的为Vue2)
-->
<template>
  <div id="app">
    <img id="cirno" @click="shout" alt="Vue logo" src="./assets/cirno.gif"><br>
    <strong id="baka">邪恶冰精，在这里宣布:</strong>
    <HelloWorld msg="Welcome to Your First Baka Vue.js App"/>
    <hr>
    <button @click="welcome">你好，我是来自App.vue中的按钮owo</button>
  </div>
</template>

<!-- 逻辑(js)区 -->
<script>
import HelloWorld from './components/HelloWorld.vue'

// !! 也就是在这下面去写 data(在这里有点'特殊') methods computed watch 还有八个钩子函数 !!
export default { //导出当前组件的配置项
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{ //methods方法
      shout(){
        alert('baka');
      },
      welcome(){
        alert("点我干嘛;w;")
      }
  },
  created(){ //钩子函数
    console.log("App.vue模版现在已经加载完成力!")
  }
}
</script>

<!-- 样式区，对应设置的是上面template的css -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#cirno{
  width: 130px;
  border: cyan dashed 10px;
}
#baka{
  font-size:20px;
  position: relative;
  bottom: -10px;
}
</style>
