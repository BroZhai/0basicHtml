<script>
export default {
  setup(){ //注意setup语法糖 不能和这个 setup(){}并存！
    
    console.log(`哦吼，我比下面的beforeCreated哥们执行的更早耶~~`);
    // 注意，在setup函数中，你是获取不到"this"的 (因为太太太太太早了XDDD)

    // setup的本质作用: 给"数据块"(数据+对应函数)提供存放的地方
    const mydata=919 //一个数据
    const printMydata= ()=>{ //与这个数据相关的方法
      console.log(`mydata的数据为: ${mydata}`);
    }
    
    // 在一般情况下，在setup里面写的所有"数据"和"方法"都要'手动return'出去
    return{
      // 但是咱可以在<script>后面加个setup,之后这里面的setup(){}都可以不要了，直接写东西就好
      mydata,
      printMydata
    }

    // 我们现在来看一下setup语法糖 

  },
  beforeCreate(){
    console.log(`来自beforeCreated的消息: wc外挂！`);
  }
  // 可以在控制台看到是setup()更先于执行
}
</script>

<template>
  <div>
    <button @click="printMydata">点我在打印mydata</button><br>
    <p>{{ mydata }}</p>
    <em>请在F12控制台中查看相应信息</em>
  </div>
</template>


<style>
  
</style>