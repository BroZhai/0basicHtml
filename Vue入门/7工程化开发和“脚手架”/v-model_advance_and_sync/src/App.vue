<template>
  <div>
    <SelectBox
      :selectedId="selectedId"

      @plsChangeSid="okLetsChange"
      
    ></SelectBox>
    <!-- 注意，上面的@plsChangeSid后面也可以直接写成 行内命令 
      @plsChangeSid="selectedId = $event" 
      (这里的$event会获取$emit传过来的参数)
    -->
    <br>
    <em>请在F12控制台查看相关输出信息</em>
    <hr>
    <div class="syncBox">
      <h4>父组件当前synced的值为:</h4>
      <b>{{ syncedValue }}</b>
    </div>
    <SendtoSyncedBox
        :updateMe.sync="syncedValue"
      ></SendtoSyncedBox>
  </div>
</template>

<script>

import SelectBox from './components/SelectBox.vue';
import SendtoSyncedBox from './components/SendtoSyncedBox.vue';

export default {

  data(){
    return{
      selectedId:"S3",
      syncedValue:"Default",
    }
  },
  
  components:{
    SelectBox,
    SendtoSyncedBox,
  },

  methods:{
    okLetsChange(paraFromChild){
      this.selectedId=paraFromChild;
      console.log(`接收了到子组件的'plsChangeSid'请求，已修改当前的selectedId为"${this.selectedId}"`);
    },

  }

}
</script>
  
<style>
  .syncBox{
    width: 300px;
    height: 200px;
    border: 3px solid black;
    display: block;
  }
</style>