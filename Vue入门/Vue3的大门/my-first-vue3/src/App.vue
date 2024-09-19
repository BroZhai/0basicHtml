<!-- 哇哦? script和template换位置啦owo?
    说是这样更符合逻辑
-->

<!-- 这里的"setup"关键字，就意味着用"组合式API"的方式去写 -->
<script setup>
// wow，Vue3这里导入组件之后就可以"直接在模版中用"了awa，不用再像以前一样额外写个components:{挨个注册...}
// 即导即用
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <!-- 在Vue3的template里面，我们发现根里面可以有多个"根元素"了
      如下面的<header> 和 <main>，它俩就处于同一“根级别”下
      而不像Vue2，template下只能有一个“大div” XDDDD
    -->
  <header> <!--第一个"根元素"-->
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" /> <!--上面script导入的"HelloWorld组件"，无需再注册直接用-->
    </div>
  </header>

  <main>  <!--第二个"根元素"-->
    <TheWelcome /> <!--另外导入的一个组件，同上-->
  </main>
</template>

<!-- 一如既往的CSS设置区，没什么太大的变化 -->
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
