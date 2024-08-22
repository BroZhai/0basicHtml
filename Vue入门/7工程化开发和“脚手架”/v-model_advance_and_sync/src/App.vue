<template>
  <div>
    <SelectBox
      :selectedId="selectedId"

      @plsChangeSid="okLetsChange"
    ></SelectBox>
    <br>
    <em>请在F12控制台查看相关输出信息</em>
  </div>
</template>

<script>

import SelectBox from './components/SelectBox.vue';

export default {

  data(){
    return{
      selectedId:"S3",
    }
  },
  
  components:{
    SelectBox,
  },

  methods:{
    okLetsChange(paraFromChild){
      this.selectedId=paraFromChild;
      console.log(`接收了到子组件的'plsChangeSid'请求，已修改当前的selectedId为"${this.selectedId}"`);
    }
  }

}
</script>

<style>
  
</style>