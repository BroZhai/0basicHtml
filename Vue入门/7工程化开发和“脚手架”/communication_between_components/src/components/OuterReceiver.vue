<template>
    <div id="outer">
        <h3>Hi，我是OuterReceiver</h3>
        <p>我从"虚空数据域中"inject了: "{{ Gobj }}"</p>
        <p>这个是"响应式(复杂)数据"，<u>修改数据会即刻在页面中更新</u></p>
        <InnerReceiver></InnerReceiver>
    </div>
</template>

<script>
// Outer内导Inner
import InnerReceiver from './InnerReceiver.vue';

export default {
    components:{
        InnerReceiver,
    },

    inject:['Gobj'],
}
</script>

<style>
        #outer{
        border:3px solid black;
        width: 440px;
        height: 400px;
        margin: 0px auto;
    }
</style>