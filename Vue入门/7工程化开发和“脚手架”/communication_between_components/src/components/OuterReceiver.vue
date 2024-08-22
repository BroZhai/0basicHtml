<template>
    <div id="outer">
        <h3>Hi，我是OuterReceiver</h3>
        <p>我从"虚空数据域中"inject到的数据为:</p>
        <InnerReceiver></InnerReceiver>
    </div>
</template>

<script>

import InnerReceiver from './InnerReceiver.vue';

export default {
    components:{
        InnerReceiver,
    }
}
</script>

<style>
        #outer{
        border:3px solid black;
        width: 440px;
        height: 300px;
        margin: 0px auto;
    }
</style>