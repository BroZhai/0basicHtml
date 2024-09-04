<template>
    <div>
        <div class="border">
            <h4>Ciallo~，这里是子组件2！pwd</h4>
            <p>我从vuex中获取到的值为: {{ publicCount }}</p>
            <em>{{ addInfo }}</em>
            <br>
            <button @click="sub">值 - 1</button>
            &nbsp;
            <!-- 仓库"异步方法"的封装'直接调用' -->
            <button @click="delaySet(666)">延迟1s，设置值为666</button>
            <p>使用mapGetters()得到的值: {{ filterList }}</p>
        </div>
    </div>
</template>

<script>
// 接下来我们来看看vuex给咱提供的一个"辅助函数" mapState()
// 省的每次访问state的时候 都要写一大串XD
// 首先将这个函数从vuex中导进来
import { mapState, mapGetters } from 'vuex'
//  导入mapGetters辅助函数
// import { mapGetters } from 'vuex'

export default {
  computed: {
    // 接着，我们在组件的computed内用"...mapState(['State中的公共数据1','...'])" 来获取state中的数据
    // "..."为 展开运算符，用了之后，()里面获取到的所有'xxx'数据名可以直接在上面使用
    // 并且这样还能预留空间给"其他computed方法"，而不是让mapStore()独占整个computed
    ...mapState(['publicCount', 'addInfo']),

    // 正如getters很像"计算属性"，对它的"拆解mapGetters(['xxx'])"就要放到computed中
    ...mapGetters(['filterList'])
  },
  methods: {
    sub () {
      // 类似的，这里用commit调用 仓库mutations中的"减方法"
      this.$store.commit('subinStore')
    },
    delaySet (passValue) {
      // 这里，我们来"直接调用"一下actions中'异步方法'
      this.$store.dispatch('delayChange', passValue)
    }
  }
}
</script>

<style>
</style>
