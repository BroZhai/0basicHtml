<template>
    <div id="inner">
        <h3>而我，则是Outer内部的InnerReceiver</h3>
        <p>我从"虚空数据域中"inject了: <b>"{{ Gcolor }}"</b></p>
        <p>这个是"非响应式(简单)数据"，<u>后台修改了视图也还不变xwx</u></p>
    </div>
</template>

<script>

export default {
    inject:['Gcolor'],
}
</script>

<style>
    #inner{
        border:3px solid black;
        width: 400px;
        height: 150px;
        margin: 0px auto;
    }
</style>