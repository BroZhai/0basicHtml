<template>
  <div class="bot">
    <button id="go" @click="checkout"><b>结算</b></button>
    <h4>共 {{ totalCount }} 件商品</h4>
      共计: <h3 style="color: orange;">￥ {{ totalPrice }} </h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart',['totalCount','totalPrice'])
  },

  methods:{
    checkout() {
      if(this.totalCount===0 || this.totalPrice===0){
        alert(`? 怎么又是你小子来0元购owo?`)
        return
      }
      alert(`您共购买了 ${this.totalCount} 件商品, 需要支付￥${this.totalPrice} (awa)`)
    }
  }
}
</script>

<style scoped>
  .bot{
    text-align: right;
  }

  #go{
    float: left;
    width: 80px;
    height: 40px;
  }
</style>