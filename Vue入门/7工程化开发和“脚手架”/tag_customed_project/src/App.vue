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
                <td v-if="isEditing">
                  <MyTag></MyTag>
                </td>
                <td v-else>
                    {{ item.defaultMsg }}
                </td>           
            </tr>
        </tbody>
    </table>

      
    <!-- <MyTag
    :pokeList="pokeList"
    >
      content
    </MyTag> -->
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
      isEditing:false,
      editedValue:"",
    }
  },

  methods:{
      
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

</style>