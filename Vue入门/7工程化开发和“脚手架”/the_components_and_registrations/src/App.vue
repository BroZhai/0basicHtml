<!-- App.vue 也叫"根组件"，相当于就是整个项目的究极大容器owo,
  而它的内部就可以放很多其他的“小组件”(小Vue模块)，从而对应网页中不同的"功能区"
  一般来说，"根组件"只能有一个，我们要做的，就是往这个根组件里 "导入"另外写好的不同的"小vue模块"
-->

<!-- Tips: 可以安装一些 Vue snippet extensions 来快速构建结构
  (这里装的是"Vue 3 Snippets" v1.0.4,对应的快速结构样式设置为"vueInit")
-->

<!-- 快捷设置的根组件结构模版 -->
<template>
  <div class="App"> <!--根组件(大容器)，在这里面'引用(使用)'导入的 小vue模块-->
    <!-- 子组件1
         子组件2
         ...
    -->
        <PageHeader></PageHeader>
        <PageBody></PageBody>
        <PageFooter></PageFooter>
        <hr>
        <h2>以下为data()的展示</h2>
        <h4>在不同的"组件"中，为了维护数据的"独立性"，data现在必须写成一种"函数()"的形式，并进行return;
          <br>
          而不再像以前一样直接写data:{对象}惹...(会报错)
        </h4>
        <strong>可以看到以下三个数据对象是"独立的"owo</strong>
        <TheData></TheData>
        <TheData></TheData>
        <TheData></TheData>
  </div>
</template>

<script>
/* 局部注册: 在这里导入我们"在外部"写好的vue小包(在写命名时，必须使用"大驼峰"命名法!)
  语法: import 导入名(之后被当做对象) from '路径'
  ('导入'的包一定要去 '声明'和 '使用'！不然会报错[严格模式])
*/
import PageHeader from './components/PageHeader.vue';
import PageBody from './components/PageBody.vue';
import PageFooter from './components/PageFooter.vue';
import TheData from './components/TheData.vue';

export default {
  components:{ //将上面导入的"小vue包对象"在这里components中'声明'一下(直接写'导入名'就好，用","隔开)
    PageHeader,
    PageBody,
    PageFooter,
    TheData,
  }
}
</script>

<style>
  /* 设置一下根组件(底板)的样式 */
  .App{
    width: 600px;
    height: 540px;
    background-color: cyan;
    margin: 40px auto;
    padding: 20px;
  }
</style>
