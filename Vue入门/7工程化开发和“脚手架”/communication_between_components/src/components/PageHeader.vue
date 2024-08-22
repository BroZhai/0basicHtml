<template>
    <div id="Header">
        <h1>用“组件”拆分重构+模块通信 の 妙妙记事本</h1>
            <div id="interact">
                <input type="text" placeholder="来输入你的计划活动?" v-model="listname" @keyup.enter="sendAddReq">
                <span v-html="'&nbsp;&nbsp;'"></span><!--在Vue中，'&nbsp'不再可用，我们得另寻方法'塞空格'-->
                <button @click="sendAddReq">添加任务</button>
            </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            listname:"", //"本地"的 待添加任务名
        }
    },

    methods:{
        sendAddReq(){
            // console.log(this.listname);
            this.$emit("sendAddReq",this.listname);
            this.listname="";//因为已经"模块化"了，想要提交后清空输入框 就得在该模块中进行^^        },
        }
    }
}
</script>

<style scoped> 
    #Header h1{
        text-align: center;
    }
    #interact{
    text-align: center;
    }
</style>