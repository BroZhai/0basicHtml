<template>
    <div class="eventBusBox">
        <h3>Hi，我是发送端</h3>
        <input type="text" placeholder="请输入要发送给接收端的消息" v-model="msg" @keyup.enter="sendMsg">
        &nbsp;&nbsp;&nbsp;<button @click="sendMsg">发送消息</button>
    </div>
</template>

<script>
//在发送方导入eventbus "数据缓存"
import BusVue from '@/utils/eventBus';

export default {
    //注: 事件总线 就不用再写components导入了，可以直接用上面导入的"对象名"

    data(){
        return{
            msg:"",
        }
    },

    methods:{
        //注意这里使用的'对象'是 "BusVue"
        sendMsg(){
            BusVue.$emit("MsgIncoming",this.msg);
            this.msg='';
        }
    }
}
</script>

<style scoped>
    input{
        width: 14em;
    }
</style>