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
    <hr>
    <!-- 在以下的部分，我们尝试去实现"妙妙记事本"的组件化 -->
    <!-- 头部组件，包含 标题 和 输入框 -->
    <PageHeader
    
    @sendAddReq="headRequestAdd"
    ></PageHeader>

    <!-- 身体组件，主要就为 任务列表的展示 -->
    <PageBody 
    :tasklist="tasklist"
    @sendDelReq="bodyRequestDel"
    ></PageBody>

    <!-- 底部组件，显示 合计任务 和 一键清除功能-->
    <PageFooter
    :tasklist="tasklist"

    @sendClrReq="footRequestClr"
    ></PageFooter>
    
    <hr>
    <h2>接下来，让我们来看看"事件总线"eventbus是个啥?</h2>
    <SenderComponent></SenderComponent>
    <ReceiverComponent></ReceiverComponent>

    <hr>
    <h2 id="h2text">然后"provide"和"inject"的话，和上面是差不多的，但它可以直接用一个"虚拟全局数据域"</h2>
    <GlobalProvider>
    <!-- 这样"直接嵌套"不行，需要自己一步步手动来 -->
    <!--<OuterReceiver>
          <InnerReceiver></InnerReceiver>
        </OuterReceiver>
     -->
    </GlobalProvider>
   

  </div>
</template>
<script>

import ChildPart from './components/ChildPart.vue';

import PageHeader from './components/PageHeader.vue';
import PageBody from './components/PageBody.vue';
import PageFooter from './components/PageFooter.vue';

import SenderComponent from './components/SenderComponent.vue';
import ReceiverComponent from './components/ReceiverComponent.vue';

// 注意，在想要实现"嵌套层级"的情况下，"组件"得自己'从外到内'手动一步一步套
import GlobalProvider from './components/GlobalProvider.vue';
// import OuterReceiver from './components/OuterReceiver.vue';
// import InnerReceiver from './components/InnerReceiver.vue';

export default {
  components:{
    ChildPart,

    PageHeader,
    PageBody,
    PageFooter,

    SenderComponent,
    ReceiverComponent,

    GlobalProvider,
    // OuterReceiver,
    // InnerReceiver,
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

      // 上面的数据为"父子组件通信"用的，下面的则是"妙妙记事本"的"任务列表"数据
      tasklist:[ //设置俩 默认任务项
        {id:1, name:"劲爆敲代码"},
        {id:2, name:"爽爽玩游戏"}
      ],

    }
  },
  methods:{
    okLetsChange(paraFromChild){  //这里记得写一个"形参"来接收 子组件的"请求修改参数"
      console.log(`接收到子组件传过来的'changeSexPls'请求, 已将this.ismale修改为: ${paraFromChild}`);
      this.ismale=paraFromChild; //应用子组件的"请求修改参数"到 父组件对应data上
      // (paraFromChild="!this.ismale")
    },

    headRequestAdd(paraFromChild){
      if(paraFromChild===''){
        alert('你传了个甚owo?');
        return;
      }
      this.tasklist.push({
        id: +new Date(), //仅作为'唯一标识符'，index会更根据不同的:key 自动确定index
        name: paraFromChild,
      })
      console.log(`接收到子组件传过来的'sendAddReq'请求,传过来的任务名为: ${paraFromChild}`);
      
    },

    bodyRequestDel(listIdFromChild){ //孩子传"任务id"过来进行删除
      this.tasklist=this.tasklist.filter( task => {
        return task.id!=listIdFromChild;
      })
      console.log(`接收到子组件传过来的'sendDelReq'请求, 要删除的任务id‘唯一标识符’为: ${listIdFromChild}`);
      
    },

    footRequestClr(){
      this.tasklist=[];
      console.log(`接收到子组件传过来的'sendClrReq'请求, 已经任务列表设置为'空'`);
    },
  },


}
</script>
<style>
  #h2text{
    text-align: center;
  }

</style>