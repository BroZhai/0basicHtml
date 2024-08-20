<template>
  <div class="App">
    你好，这里是父组件App.vue
    <!-- 在下面通过 ":子组件接收参数名='data中的数据名'" 给子组件传参-->
    <ChildPart 
    :pokemon="sylveon"
    :lv="lv"
    :skills="skills"
    :ismale="ismale"
    @changeSexPls="okLetsChange"
    ></ChildPart>
  </div>
</template>
<script>

import ChildPart from './components/ChildPart.vue';

export default {
  components:{
    ChildPart,
  },
  data(){
    return{ //父组件要传递的数据可以是任意数据类型 (对象，数值，布尔，字符串...)
      sylveon:{
            name:"仙布",
            species:"Fairy",
        },
      lv:47,
      skills:["Bite","Draining Kiss","Tackle","Swift"],
      ismale:false,
    }
  },
  methods:{
    okLetsChange(paraFromChild){
      console.log(`接收到子组件传过来的'changeSexPls'请求, 已将this.ismale修改为: ${paraFromChild}`);
      
      this.ismale=paraFromChild;
    }
  }
}
</script>
<style>

</style>