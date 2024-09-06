<template>
  <div class="inner">
    <h4>我是里面的子组件awa</h4>
      <!-- mapStates辅函俩用法 -->
      <h5>mapStates():</h5>
      <p>"namespaced"原理得到的'纯用户信息'为: <br>
        <em>{{ userInfo }}</em>
      </p>
      <p>"直接挂载"得到的其他信息:
        <br> 
        <em>{{ user.magicItems }} 和 {{ user.currency }}</em>
      </p>
      <hr>
      <!-- mapGetters辅函用法 -->
      <h5>mapGetters():</h5>
      <p>"namespaced"原理得到的大写名字getters为: {{ upperName }}</p>
      <!-- <p>"直接挂载"得到的大写名字为: {{ user.upperName}}</p> -->
      <hr>
      <!-- mapMutations 和 mapActions 辅函用法 -->
      <h5>mapMutations() & mapActions:</h5>
      <p> >> 来修改一下user信息</p>
      <em>(传整个"user对象",注意内部'属性名'要对应！ [才会覆盖])</em>
      <br>
      <input 
        type="text" 
        v-model="userObj.name"
        placeholder="请输入要更改的name"
        class="inp"
      > <br>
      <input 
        type="text" 
        v-model="userObj.age"
        placeholder="请输入要更改的age"
        class="inp"
      > <br>
      <button 
      style="margin-left: 8px; margin-top: 4px;"
      @click="resetUserInfo(userObj)"
      >立即提交更改</button>
      <button 
      style="margin-left: 8px; margin-top: 4px;"
      @click="delayReset(userObj)"
      >1s后提交</button>
  </div>
</template>
<script>
// 导入辅函"四大天王"
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  data(){
    return{
      userObj:{
        name:"",
        age:"",
      },
    }
  },

  computed: {
    // 我们来试一下mapState整一下小仓库的state (state数据属于‘直接数据’，因此放到computed中)
    /* 共两种方式:
      1. 根据"直接挂载"原理，直接quote(['state挂载名'])
      2. 根据"namespaced: true"，用mapState('小仓库文件名', ['里面的state数据',...])进行导入
    */
    ...mapState('user',['userInfo']), //namespaced原理, 导入user.js小仓库state中的userInfo数据
    ...mapState(['user']), //直接挂载 (整个user小仓库都State)

    //接下来看下mapGetters，它的"小仓库"语法有点不太一样
    /* 
      用法其实和上面一样，换个关键字mapGetters()就好了
      对于剩下的辅助函数来说 都一样哦owo
    */
    ...mapGetters('user',['upperName']), // namespaced原理，只导入upperName()的getters
    // ...mapGetters(['user']) //直接挂载，导入了user小仓库getters中的所有东西 (还需手动'进一步选择')
    // 上面的"直接挂载"不知道怎么搞定，炸了，算了，只记 namespaced通用方法就够了xwx
  },

  methods: {
    //然后是mapMutations()，这里开始就只用"namespaced"
    ...mapMutations('user',['resetUserInfo']),

    // mapActions()，调用delayReset'延迟提交'
    ...mapActions('user',['delayReset']),
  },
}
</script>
<style>
  .inner{
    border: 2px solid grey;
    margin: 50px;
  }
  .inp{
    margin-left: 8px;
    margin-top: 5px;
  }
</style>