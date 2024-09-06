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
  }
}
</script>

<style>
  
</style>