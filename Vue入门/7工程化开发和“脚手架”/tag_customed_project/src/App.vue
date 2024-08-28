<template>
  <div>
    <h4>伊布小册子</h4>
    <table class="table" border="1px">
        <thead>
            <tr>
                <td>序号</td>
                <td>宝可梦名</td>
                <td>等级</td>
                <td id="note">备注(双击可改)</td>
            </tr>
        </thead>
        <tbody> <!--准备渲染-->
            <tr v-for="(item,index) in pokeList" :key="item.id">
                <td>{{ index+1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.lv }}</td>
                <!-- 我草，这里item还可以这么用?!! -->
                <MyTag
                :item="item"
                :pokeList="pokeList"
                @clickChange="handleClick"
                @valueChange="handleValue"
                >

                </MyTag>   
            </tr>
        </tbody>
    </table>
    <button id="reset" @click="resetAllNotes">重置所有备注</button>
  </div>
</template>

<script>

import MyTag from './components/MyTag.vue';

export default {
  components:{
    MyTag,
  },

  data(){
    return{
      pokeList:[
        {id:1,name:"火伊布",lv:47,defaultMsg:"听说抱着Ta能把人烤熟OAO"},
        {id:2,name:"太阳伊布",lv:53,defaultMsg:"优雅，但又怕生"},
        {id:3,name:"月伊布",lv:51,defaultMsg:"喜欢干坏事"},
        {id:4,name:"水伊布",lv:67,defaultMsg:"可以随时随地当滋水枪~~"},
        {id:5,name:"仙子伊布",lv:23,defaultMsg:"这家伙，经常会调戏训练家"},
        {id:6,name:"叶伊布",lv:31,defaultMsg:"身上一股草木的香味"},
      ],
      // 备份"重置时"用
      backupList:[
        {id:1,name:"火伊布",lv:47,defaultMsg:"听说抱着Ta能把人烤熟OAO"},
        {id:2,name:"太阳伊布",lv:53,defaultMsg:"优雅，但又怕生"},
        {id:3,name:"月伊布",lv:51,defaultMsg:"喜欢干坏事"},
        {id:4,name:"水伊布",lv:67,defaultMsg:"可以随时随地当滋水枪~~"},
        {id:5,name:"仙子伊布",lv:23,defaultMsg:"这家伙，经常会调戏训练家"},
        {id:6,name:"叶伊布",lv:31,defaultMsg:"身上一股草木的香味"},
      ],
      // isEditing:false, 不用了(MyTag去单独控制每一项)
    }
  },

  methods:{
      handleClick(paraFromTag){
        console.log(`根组件已收到“双击tag”操作，已[在子组件中]改成了显示输入框`);
        this.isEditing=paraFromTag;
      },

      handleValue(paraFromTag){        
        console.log(`检测到id:${paraFromTag.pokeID} 的修改备注请求, 修改已生效！`);
        // 此时，我们需要在本地的pokeList中
        // 根据paraFromTag传过来的id用".find()"找值
        // 而不是直接“根据已有数据'拼出表达式'”来XD (偷懒偷过头了owo)
        /* 
          数组的.find()方法: 在数组中找到 "符合条件" 的第一个值，并返回这个"值"【结束】
          如果这个"符合条件"被嵌在某个对象中，那么则会返回这个"整体的对象"! (关键)
          找不到符合条件的就会返回一个undefined
          语法: 数组对象.find(每个'临时'单项名 => "符合条件")
        */
        let targetPokemon=this.pokeList.find( curPokemon => curPokemon.id===paraFromTag.pokeID);
        if(targetPokemon){
          if(paraFromTag.changedNote!=="")
          targetPokemon.defaultMsg=paraFromTag.changedNote;
          else{
            alert(`输入的备注不能为空哦~~`);
            return;
          }
        }else{
          alert(`未找到该宝可梦id QAQ...`);
          return;
        }
      },

      resetAllNotes(){
        this.pokeList=this.backupList;
      }
    },

    
}
</script>

<style>
      h4{
        display: block;
        text-align: center;
    }

    .table{
        margin: 0px auto;
        text-align: center
    }

    #note{
        width: 28em;
    }
    
    #reset{
      display: block;
      margin: 20px auto;
    }

</style>