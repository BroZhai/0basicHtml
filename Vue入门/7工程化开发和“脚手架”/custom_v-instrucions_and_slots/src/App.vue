<template>
  <div>
    <!-- 我们先尝试去'全局注册'一个v-focus自动聚焦指令
      一进页面立刻就"锁定输入框"
    -->
      <h2>自定义指令v-focus</h2>
      <input type="text" style="width: 20em;" placeholder="我将会因v-focus而被进来时自动选中owo" v-focus>
      <hr>
      <LocalRegistration></LocalRegistration>
      <hr>

      <div class="dp" v-loading="isLoading">
        <p>以下信息将会在2秒后加载出来...</p>
        <hr>
        <div>
          <p>宝可梦名: {{ sylveon.name }}</p>
          <p>类型: {{ sylveon.species }}</p>
          <p>当前等级Lv: {{ lv }}</p>
          <p>可用技能: {{ skills }}</p>
          <p>性别 {{ ismale? "♂": "♀"}}</p>
        </div>

      </div>

  </div>
</template>

<script>

import LocalRegistration from './components/LocalRegistration.vue';

export default {
  data(){
    return{
      sylveon:{
            name:"",
            species:"",
        },
      lv:"",
      skills:"",
      ismale:"",
      isLoading:true,
    }
  },

  components:{
    LocalRegistration,
  },

  created(){
    setTimeout(() => {
      this.sylveon.name="仙布";
      this.sylveon.species="Fairy",
      this.lv=47,
      this.skills=["Bite","Draining Kiss","Tackle","Swift"],
      this.ismale=true;
    },2000);
  },

  directives:{
    loading:{
      inserted(el,binding){
        if(binding.value===true){
          el.classList.add('loading');
        }
        else{
          el.classList.remove('loading');
        }
      },

      update(el){
          el.classList.remove('loading');
      },
    }
  }
}
</script>

<style>
  .dp{
    width: 600px;
    height: 400px;
    border: 4px solid black;
    margin: 0px auto;
    padding: 20px;
    font-size: 24px;
  }
  
  .loading::before{
    /* 这里content的作用是"占厕所"，为了能让下面的'加载图片'显示出来的 “衬托” */
    content: '';
    top: 91%;
    left: -1%;
    width: 98%;
    height: 66%;
    margin-top: -214px;
    position: relative;
    display: block;
    background: white url(assets/loading.gif) no-repeat center;
  }
</style>