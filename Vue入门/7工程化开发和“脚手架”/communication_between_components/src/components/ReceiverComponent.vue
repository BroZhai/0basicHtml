<template>
    <div class="eventBusBox">
        <h3>而我，则是接收端owo</h3>
        <p>从发送端接收到的消息为: <b> {{ receivedMsg }} </b> </p>
    </div>
</template>

<script>

import BusVue from '@/utils/eventBus';

export default {
    data(){
        return{
            receivedMsg:"",
        }
    },
    created(){
        /*"$on"事件监听函数
            语法: Vue对象.$on("监听事件名", 将触发的 回调函数(传的值)=>{...})
        */ 
        BusVue.$on("MsgIncoming",(paraFromEvent)=>{
            this.receivedMsg=paraFromEvent;
        })
    }
}
</script>

<style>
    .eventBusBox{
        border: 4px solid black;
        width:400px;
        height: 200px;
    }
</style>