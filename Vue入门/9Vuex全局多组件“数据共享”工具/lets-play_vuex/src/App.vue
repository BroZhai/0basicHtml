<template>
  <div>
    <div class="larger-border">
      <h3>啊哈！我是最外面的根组件AwA！</h3>
      <!-- 在模版template中可以直接通过 $store.state 访问到存在state中的数据 -->
      <p>我从vuex中获取到的值为: {{ $store.state.publicCount }}</p>
      <input
      type="text"
      placeholder="请在这里输入要直接变动的值..."
      style="width: 15em;"
      v-model="inputValue"
      @keyup.enter="directChange(inputValue)"
      > <!--上面的direcrChange(传参)和下面的...mapMutations(['xxx']对应，且成功调用！)-->
      <!-- 顺带提醒一下，在template中访问本地data不需要this，不然会报错OAO -->
      &nbsp;&nbsp;
      <button @click="passChange">直接变动！</button>
      <SonComp1></SonComp1>
      <hr>
      <SonComp2></SonComp2>
      <br>
      <em>请在F12控制台查看更多信息 </em>
    </div>
  </div>
</template>

<script>
import SonComp1 from './components/SonComp1.vue'
import SonComp2 from './components/SonComp2.vue'

// 接下来我们来看看mapMutation辅助函数，导个包先，在methods中'拆包'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    SonComp1,
    SonComp2
  },

  created () {
    console.log(this.$store)
  },

  methods: {
    // methods中对应mapMutations拆仓库"方法包"
    ...mapMutations(['directChange']),
    passChange () {
      // 接下来，我们试一下给commit带个(自定义)参数"传参"
      // (注意，对应的mutation方法后面 要有个"接受形参")
      // Tips: commit默认只能带一个参数传递，如果想要传递多个参数，可以考虑用下对象{}awa
      this.$store.commit('directChange', this.inputValue)
    }
  }
}
</script>

<style scoped>
  .larger-border{
    width: 600px;
    border: 4px solid grey;
  }
</style>
