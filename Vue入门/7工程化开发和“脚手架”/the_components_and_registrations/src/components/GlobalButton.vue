<!-- 这个vue模块是一个"全局通用"模块，已在main.js中注册过了
    使用的话，直接跑到"其他子模块"中在<template>中 直接"嵌入用"就完事了owo
-->
<template>
    <div>
        <!-- ".stop"阻止向外"冒泡"(点击按钮外 "元素本身"触发的弹窗) -->
        <button id="btn" @click.stop="buttonHit">全局通用按钮</button>
    </div>
</template>
<script>
export default {
    methods:{
        buttonHit(){
            alert("全局通用按钮被点击啦！！并且用了@click.stop阻止了'向外冒泡owo'");
        }
    }
}
</script>
<style>
/* 设置按钮样式 */
    #btn{ 
        height: 50px;
        line-height: 50px;
        padding: 0px 20px;
        background-color: #10abbf;
        border: 3px solid white;
        border-radius: 5px;
        color:white;
    }
</style>