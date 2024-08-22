<template>
    <div class="provider">
        <h3>你好，我是最外层的"数据provider"</h3>
        <OuterReceiver></OuterReceiver>
    </div>
</template>

<script>
import OuterReceiver from './OuterReceiver.vue';
// import InnerReceiver from './InnerReceiver.vue';

export default {
    components:{
        OuterReceiver,
        // InnerReceiver
    }
}
</script>

<style>
    .provider{
        border:3px solid black;
        width: 500px;
        height: 600px;
        margin: 0px auto;
    }
</style>