<template>
    <!-- 在Vue中，我们的执行顺序看起来是"分段按序"执行的
        但有时候，指令在同级下会被"同步执行"， 从而造成一些不必要的错误
        为了解决这个"误同时触发"的问题，$nextTick异步执行就出来了owo

        下面这堆东西想要实现的效果是: 
        1.点击'修改'后 
        2.自动选中输入框 focus()
        (这俩指令只能异步来，同步执行会失败...)
    -->
    <div>
        <h3>接下来，咱来看看Vue的'异步更新'的$nextTick</h3>
        <h4> {{ title }} &nbsp;&nbsp; 
            <button @click="changeVisibility">修改</button>
            &nbsp;&nbsp;(点了之后下面会多出来了一个框)
        </h4>
        <p v-show="visible">
            <input type="text" ref="tgtInput" placeholder="请输入修改内容" v-model="edited" @keyup.enter="changeTitle"> &nbsp;&nbsp;
            <button @click="changeTitle">确认</button>
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            visible:false,
            title:"我是一个一个大标题",
            edited:"",
        }
    },

    methods:{
        changeVisibility(){
            this.visible=true;
            // this.$reds.tgtInput.focus();
            /*理论上来说，上面注释的代码是完美的
            但是，它俩不能被同时成功执行,所以得想办法让他们异步(一个完了接一个)

            $nextTick语法: this.$nextTick( 要执行的函数体 )
            */
           this.$nextTick( () =>{
                this.$refs.tgtInput.focus();
                // 自动锁定成功！
           } )
        },

        changeTitle(){
            this.title=this.edited;
            this.edited=''; //清空修改值
            this.visible=false;
        }
    }
}
</script>
<style>
    
</style>