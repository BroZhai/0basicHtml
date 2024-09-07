<template>
  <div>
    <!-- 头部导航区 -->
    <TopNav></TopNav>

    <!-- 商品展示区 -->
    <CartItem></CartItem>
    <CartItem></CartItem>
    <CartItem></CartItem>

    <hr>
    <!-- 底部结算区 -->
    <BottomArea></BottomArea>

  </div>
</template>

<script>
import TopNav from './components/TopNav.vue';
import CartItem from './components/CartItem.vue';
import BottomArea from './components/BottomArea.vue';

export default {
  components: {
    TopNav,
    CartItem,
    BottomArea
  },

  created(){
    // 使用dispatch调用cart小仓库的某个特定actions(getList)
    this.$store.dispatch('cart/getList') //F12看看，发现成功啦！取得的数据也被赋值到了vuex 小仓库cart中
    // 通过vue开发工具查看
  },
}
</script>

<style>
  
</style>