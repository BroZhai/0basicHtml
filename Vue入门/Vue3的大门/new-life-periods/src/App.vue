<template>
  <div>
    <div class="title">
      Vue3学习计划重启了
    </div>
    <div class="content">
      <p>搞完之后去看看后端服务器之类的东西，好像蛮好玩的
        <br>
        <b>请去F12控制台查看'不同周期'的输出日志</b>
      </p>
      <em>2024/12/21</em>
    </div>
  </div>

  <!-- 下面是子组件，来研究一下 Vue3里面的父子组件通信
      和之前一样，以'附加属性'的方式把数据传给子组件，
      在这里用 "@xxx" 来监听子组件传过来的 '请求更改' 
  -->
  <Child1 
  @inclvReq="levelUp"
  @declvReq="levelDown"
  :someoneObj="pancake"
  ></Child1>

</template>


<script setup>
  import {onMounted,ref} from 'vue'
  import Child1 from '@/components/Child1.vue'
  const setupMsg = () => {
    setTimeout(()=>{
      console.log('啊哈，setup里面的消息被触发了');
    },2000) // 延迟2秒后执行
  }
  setupMsg();

  // Vue3 里面所有的生命周期，前面就多了一个'on' (除了原来的destroy 变成了 Unmount XDDD)
  // 由于Vue3 根据对象'要啥用啥'的特性，生命周期可以多次作用在不同的对象(逻辑)上
  
  // 1号业务逻辑
  onMounted(()=>{
    console.log(`这里是onMounted触发了'1号业务逻辑'`);
  })

  // 2号业务逻辑
  onMounted(()=>{
    console.log(`我是2号逻辑desu yo`);
  })

  // 构建了一个要发给子组件的对象 (先传个空的，延迟3秒后赋值)
  let pancake=ref(null)
  setTimeout(() => {
    // 注意: 在ref的变量'已经创建'之后，再需要改其值的话，就要用 '变量.value' (符合'响应式特征')
    pancake.value={
      degree:"Junior Baka collage",
      lv:37,
      isHappy: true,
    }
  },3000)


// 实现更改 pancake对象里面的'lv'
  const levelUp = (incomingValue) =>{
    // 右边的incomingValue形参 自动对应的就是 上面'子组件传过来的值'
    pancake.value.lv += incomingValue
    console.log(`已收到子组件传过来的'加lv'请求`);
  }

  const levelDown = (incomingValue) =>{
    pancake.value.lv -= incomingValue
    console.log(`已收到子组件传过来的'减lv'请求`);

  }
</script>


<style>
  .title{
    text-align: center;
    font-size: 40px;
    font-style: normal;
    color: red;
  }

  .content{
    text-align: center;
  }
</style>