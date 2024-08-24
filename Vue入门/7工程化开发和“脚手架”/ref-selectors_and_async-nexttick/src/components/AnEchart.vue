<template>
    <div ref="trueCanavas" class="confused">
        <!-- 而这里的则是内部class名，querySelector'真正'想要作用到的地方 
            注意上面多加了一个"ref= XXX "标签，一会给$refs.XXX 用来定位该DOM
        -->
        <h3>啊喂！图表应该被绘制在这里啊QAQ...</h3>
        <h3>没看到上面显示都变形了吗 T^T</h3>
    </div>
  </template>
  
  <script>

// 因为要用echarts来做演示，
// 记得前cd到当前目录下 再npm install echarts, 然后导入
import * as echarts from 'echarts'

  export default {    

    mounted(){ // AnEcharts组件挂载完成后 即刻渲染雷达图
        /* 但是这里用querySelector会意外的选到最上面的confused class，导致图表画错地方
            Tips: 下方俩代码可以"二选一"注释来测试
        */
        // let myChart=echarts.init(document.querySelector(".confused"));

        /*在此，有请我们的ref 闪亮登场！
            ref的作用:
            1. 在"本组件内"选择特定的Dom
            2. 在"根组件"中能 选择"其他组件示例"，并调用"其内部"相应的属性和方法
        */
        let myChart=echarts.init(this.$refs.trueCanavas);

        let option = {
            title: {
            text: '煎饼先生的属性面板'
                },
            legend: {
                data: ['实际值', '期待值']
            },
            radar: {
                // shape: 'circle',
                indicator: [
                { name: '行动力', max: 1000 },
                { name: '想象力', max: 1000 },
                { name: '技术力', max: 1000 },
                { name: '心态力', max: 1000 },
                { name: '游戏力', max: 1000 },
                { name: '专注力', max: 1000 }
                ]
            },
            series: [
                {
                name: '理想vs现实',
                type: 'radar',
                data: [
                    {
                    value: [520, 750, 350, 720, 720, 500],
                    name: '实际值'
                    },
                    {
                    value: [800, 500, 780, 660, 400, 740],
                    name: '期待值'
                    }
                ]
            },
        ]
    };

    myChart.setOption(option);
    }
  }
  </script>
  
  <style scoped>
  /*注意: scoped仅是区别"本地样式"于"全局样式"的 独立设置
    并不代表着俩"同样式"名不能在页面中一齐出现
    出现的先后顺序还是看 根组件App.vue中定义的template结构
    (还有, "同样式名"不能嵌套存在！只能'同级')
  */
    h3{
        text-align: center;
    }

    .confused{
    width: 600px;
    height: 600px;
    margin: 20px auto;
    border: 2px solid black;
  }
    
  </style>