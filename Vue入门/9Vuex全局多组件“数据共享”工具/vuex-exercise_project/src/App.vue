<template>
  <div>
    <!-- 头部导航区 -->
    <TopNav></TopNav>

    <!-- 商品展示区 -->
    <!-- 重新构建了下逻辑，想着是这里的'根'用v-for
        主要是每个'项'对应的'操作方法'得是 互相独立的
    -->
    <CartItem
    v-for="item in itemList" :key="item.id"
    :singleItem="item"
    ></CartItem>

    <hr>
    <!-- 底部结算区 -->
    <BottomArea></BottomArea>

  </div>
</template>

<script>
import TopNav from './components/TopNav.vue';
import CartItem from './components/CartItem.vue';
import BottomArea from './components/BottomArea.vue';

// 仓库"四大天王"
import { mapState } from 'vuex';

export default {
  components: {
    TopNav,
    CartItem,
    BottomArea
  },

  computed: {
    // 在仓库的数据完成"首次更新"后，我们就可以在根组件中将state数据"传给子组件"
    // 然后再在子组件中完成相应的渲染awa
    // 使用...mapState辅函获取 小仓库cart 当前state中的数据
    ...mapState('cart',['itemList'])
  },

  created () {
    // 使用dispatch调用cart小仓库的某个特定actions(getList)
    this.$store.dispatch('cart/getList') //F12看看，发现成功啦！取得的数据也被赋值到了vuex 小仓库cart中
    // 可通过vue开发工具查看 cart的小仓库里面有没有存东西
  },
}
</script>

<style>
  
</style>