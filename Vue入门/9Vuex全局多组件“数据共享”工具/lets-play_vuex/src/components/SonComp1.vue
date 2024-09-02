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
      // 传给store的"请求修改"
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
