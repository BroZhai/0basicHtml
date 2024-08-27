<template>
  <div>
    <!-- 我们先尝试去'全局注册'一个v-focus自动聚焦指令
      一进页面立刻就"锁定输入框"
    -->
      <h2>自定义指令v-focus</h2>
      <input type="text" style="width: 20em;" placeholder="我将会因v-focus而被进来时自动选中owo" v-focus>
      <hr>
      <LocalRegistration></LocalRegistration>
<!-- --------------------------------------- -->
      <hr>
      <!-- 接下来我们来尝试实现一下"伪信息加载" -->
      <div class="dp" v-loading="isLoading">
        <p>以下的信息将会在3秒后加载出来...</p>
        <hr>
        <div>
          <p>宝可梦名: {{ sylveon.name }}</p>
          <p>类型: {{ sylveon.species }}</p>
          <p>当前等级Lv: {{ lv }}</p>
          <p>可用技能: {{ skills }}</p>
          <p>性别 {{ ismale? "♂": "♀"}}</p>
        </div>

      </div>
<!-- --------------------------------------- -->
      <hr>
      <div>
        <!-- 研究一下slot的基本引用，这里直接往<组件> 中传值 </组件>-->
        <SlotInserted>
          嗷嗷，我是第一个从外部动态传进去的值哟
        </SlotInserted>

        <SlotInserted>
          这是另一个传个slot显示的东西捏awa
        </SlotInserted>

        <SlotInserted>
          <!-- 这次我们不传内容，slot里面写的默认内容就会出来 -->
        </SlotInserted>
      </div>

<!-- --------------------------------------- -->
      <hr>
      <!-- 具名插槽，正常的组件中，slot的地方不可能'只有一个'
        这个时候，我们就要'给不同的slot起名'
        在根组件中用'整体<template v-slot:slot名>的形式'给不同的slot指定传值
      -->
      <div>
      <MultipleSlots>
        <template v-slot:title>
          吼吼吼，我是v-slot传给'title'的值
        </template>

        <!-- 注: v-slot:xxx 可以直接简写成 "#xxx" -->
        <template #contentA>
          我是给'contentA'的值
        </template>

        <template #contentB>
          那我就是给'contentB'的咯~~
        </template>
      </MultipleSlots>
    </div>
<!-- --------------------------------------- -->
    <hr>
    <!-- 接下来，我们来看看 作用域插槽
      说白了就是在父组件中进行某些"操作"时，在#template中 接收从子组件slot传来的参数(对象)
      来确定"操作对象"
    -->

    <TableSlots
    :list="listA"
    >
      <!-- 不论是给子组件传slot值 还是 接收从子组件slot过来的值
        都要在<template>的整体中进行！
      -->
        <template #title>
          <!-- A表标题slot -->
          这儿是listA的表
        </template>

        <!-- 这里接收子组件 名为"btn"的slot 传回来的"对象包"
          并重命名为incomingObj后 再进行后续的调用
        -->
        <template #btn="incomingObj">
          <!-- A表"放生按钮"实现 -->
          <button @click="del(incomingObj)">放生</button>
        </template>

    </TableSlots>
    <br><br>
    <TableSlots
    :list="listB"
    >
      <template #title>
        而这里则是另外一个表listB
      </template>

      <!-- 同上，这里也是同理 -->
      <template #btn>
        <button>查看</button>
      </template>

    </TableSlots>
    
  </div>
</template>

<script>

import LocalRegistration from './components/LocalRegistration.vue';
import SlotInserted from './components/SlotInserted.vue';
import MultipleSlots from './components/MultipleSlots.vue';
import TableSlots from './components/TableSlots.vue';

export default {

  components:{
    LocalRegistration,
    SlotInserted,
    MultipleSlots,
    TableSlots,
  },

  data(){
    return{
      sylveon:{
            name:"",
            species:"",
        },
      lv:"",
      skills:"",
      ismale:"",
      isLoading:true, //调试inserted用

      listA:[
        {id:1,name:"火伊布",lv:47},
        {id:2,name:"太阳伊布",lv:53},
        {id:3,name:"月伊布",lv:51},
      ],

      listB:[
        {id:1,name:"水伊布",lv:67},
        {id:2,name:"仙子伊布",lv:23},
        {id:3,name:"叶伊布",lv:31},
      ],
    }
  },

  methods:{
    del(obj){
      //console.log(obj); //想直接打印“整个返回的obj”看看
      
      console.log(`拿到了A表要放生的id: ${obj.row.id},在listA中放生了"${obj.row.name}"`);
      console.log(`诶?怎么还有个'额外信息'?: "${obj.msg}"`)
      this.listA=this.listA.filter( (filterItem) =>{
        return filterItem.id!=obj.row.id;
      })
    },

    // view(obj){

    // },
  },



  created(){
    // 实现"数据加载延迟"，在完成数据更新(加载后), dom中的"loading" class就会被移除掉owo
    // 对应下面directives中的update(){里面的操作}
    setTimeout(() => {
      this.sylveon.name="仙布";
      this.sylveon.species="Fairy",
      this.lv=47,
      this.skills=["Bite","Draining Kiss","Tackle","Swift"],
      this.ismale=true;
    },3000);
  },

  directives:{
    loading:{
      inserted(el,binding){
        // 调试用，去data中手动设置'isLoading'来"直接控制"这里 初始加载页面 的显示与否
        if(binding.value===true){
          // .classList，可直接通过一些方法, 对其标签内的class进行操作
          // 如add("其他class"), remove("已有的某个class") 【没错多个class可以一起叠着用】
          el.classList.add('loading');
          console.log(`初始化加载页面 已启用`);
          
        }
        else{
          el.classList.remove('loading');
          console.log(`已禁用 初始化加载页面 `);
        }
      },

      // 当数据完成'加载后'，去掉用于遮挡的 ‘加载页面’，展示数据
      update(el){
          el.classList.remove('loading');
          console.log(`DOM中数据发生了更新，判定为‘数据完成了加载’，现在隐藏了 "加载页面"...`);
          
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
    /* ::before伪类: 在dom被创建之前就被'优先应用'的样式 */
    /* 这里content的作用是"占厕所"，为了能让下面的'加载图片'显示出来的 “衬托”
      但是这儿的样式设置的...好怪异...算了能用就行ｘｗｘ...
    */
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