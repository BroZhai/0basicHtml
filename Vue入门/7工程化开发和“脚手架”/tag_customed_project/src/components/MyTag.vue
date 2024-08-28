<template>
    <div v-if="LocalDisplay">
        <input 
        type="text" 
        placeholder="请输入要更改的备注" 
        ref="noteBox"
        @blur="endChange"
        v-focus
        @keyup.enter="endChange">
        <!-- @blur : 元素失去焦点时 触发的监听 
            注意，按enter会触发"二次提交"XD，因为上面两个监听事件都触发了owo
        -->
    </div>

    <div v-else class="msgDisplay" @dblclick="clickChange">
        <!-- 外边:item=“item”的绝妙用法，让这里也可以用v-for内的item -->
        {{ item.defaultMsg }}
    </div>
</template>

<script>

export default {

    props:{
        // editStatus:{  原本有传:editStatus="isEditing"进来，但最后删了(要单独控制)
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
            LocalDisplay:false,
        }
    },

    methods:{
        clickChange(){
            // this.$emit("clickChange",true);
            //用本地变量 控制每个单项的显示与否
            this.LocalDisplay=true; 
            
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
            // 注意，输入框的值是value，不是values!! 不然也会抓不到...哈哈
            let changedContent=this.$refs.noteBox.value;
            this.$emit('valueChange',{pokeID:this.item.id, changedNote:changedContent})

            // 这里的"异步"很关键！不加异步大概率就会"先执行下面"，此时整个输入框元素就先消失啦！
            // 然后上面你还抓个毛线的value xwx，所以必须要确定"抓完value后"，再去执行"隐藏"!
            // (捏麻麻的查了我一个多小时，这下真长记性了...)
            this.$nextTick( ()=>{
                this.LocalDisplay=false;
            })
            
        }
    }

}
</script>

<style>
    .msgDisplay{
        border: 1.5px solid black;
    }

</style>