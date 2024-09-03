<template>
    <div>
        <div class="border">
            <h4>Hi，这里是子组件1！owo</h4>
            <p>我从vuex中获取到的值为: {{ publicValue }}</p>
            <button @click="add">值 + 1</button>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    publicValue () {
    // 和$route一样，$store在组件的script中要多个"this."
      return this.$store.state.publicCount
    }
  },
  methods: {
    add () {
      // '提交'store的"请求修改"
      // 和父子组件通信一样，子组件不能直接修改父组件中的值，类似的，需要传一个"修改请求"
      // 用$store.commit('定义好的方法名') 去 访问 仓库mutations中写好的方法
      this.$store.commit('addinStore')
    }
  }
}
</script>

<style>
    .border{
        width: 500px;
        height: 160px;
        border: 2px solid grey;
        margin: 5px auto;
    }
</style>
