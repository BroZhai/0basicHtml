<template>
    <div class="common">
        <p>合计任务项:{{tasklist.length}} &nbsp;&nbsp;&nbsp;&nbsp;<button @click="sendClrReq">清除所有任务</button></p>
        <span id="tips">F12控制台有相关输出信息owo</span>
    </div>
</template>

<script>
export default {
    props:['tasklist'],

    methods:{
        sendClrReq(){

        },
    }
}
</script>

<style>
    #tips{
        font: italic bold 20px "微软雅黑";
    }
</style>