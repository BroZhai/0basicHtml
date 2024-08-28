<template>
    <div v-if="isLocalDisplay">
        <input 
        type="text" 
        placeholder="请输入要更改的备注" 
        ref="noteBox" 
        v-focus>
    </div>

    <div v-else class="msgDisplay" @dblclick="clickChange">
        <!-- 外边:item=“item”的绝妙用法，让这里也可以用v-for内的item -->
        {{ item.defaultMsg }}
    </div>
</template>

<script>

export default {

    props:{
        // editStatus:{
        //     type: Boolean
        // }, 不要依赖父组件传进来的Status, 
        // 要自己在本地单独写个变量 来控制 "每个单项"双击时 的显示与否
        // 这才是 “子组件” 所要控制的嘛XDDD
        pokeList:{
            type: Array
        },
        item:{
            type: Object
        },
    },

    data(){
        return{
            isLocalDisplay:false,
        }
    },

    methods:{
        clickChange(){
            // this.$emit("clickChange",true);
            //用本地变量 控制每个单项的显示与否
            this.isLocalDisplay=true; 
            
            // 由于Vue的"异步性"，接下来的"自动聚焦 闪现输入框"需要用到$nextTick
            // (当然，我们也可以把以下这块 到main.js中去封装成一个 "全局v-指令")

            /*
            this.$nextTick( ()=>{
                // 异步之后 用$refs找到 闪现输入框的dom，调用其focus()即可 自动完成聚焦
                this.$refs.noteBox.focus();
            })
            */
        },

        endChange(){

        }
    }

}
</script>

<style>
    .msgDisplay{
        border: 1.5px solid black;
    }

</style>