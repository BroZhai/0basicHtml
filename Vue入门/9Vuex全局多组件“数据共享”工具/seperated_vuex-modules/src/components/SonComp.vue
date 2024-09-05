<template>
  <div class="inner">
    <h4>我是里面的子组件awa</h4>
      <p>"namespaced"原理得到的'纯用户信息'为: <br>
        <em>{{ userInfo }}</em>
      </p>
      <p>"直接挂载"得到的其他信息:
        <br> 
        <em>{{ user.magicItems }} 和 {{ user.currency }}</em>
      </p>
      <hr>

  </div>
</template>
<script>
// 导入辅函"四大天王"
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapMutations(),
    ...mapActions(),
  },

  computed: {
    // 我们来试一下mapState整一下小仓库的state
    /* 共两种方式:
      1. 根据"直接挂载"原理，直接quote(['state挂载名'])
      2. 根据"namespaced: true"，用mapState('小仓库文件名', ['里面的state数据',...])进行导入
    */
    ...mapState('user',['userInfo']), //namespaced原理
    ...mapState(['user']), //直接挂载

    //接下来看下mapGetters，它的"小仓库"语法有点不太一样
    /* 
    
    */
    ...mapGetters(),

  }
}
</script>
<style>
  .inner{
    height: 200px;
    border: 2px solid grey;
    margin: 50px;
  }
</style>