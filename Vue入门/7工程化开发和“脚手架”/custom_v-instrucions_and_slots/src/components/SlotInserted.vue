<template>
    <!-- 接下来，我们在这个组件中研究一下'slot'插槽
        在以往我们写的各个vue组件中，它们虽然都是通用的‘模块’，但同时，它们内部的'结构内容'也给锁死了
        而slot的基本作用之一，就是'动态的传入值'来改变组件中的"结构内容"
    -->
    <div class="slot">
        <h3>你好，这里是Slot组件awa</h3>
        <p>此次从组件外部'动态传进来'的内容为: <br>
            <b style="text-indent: 2em; display: block;"><slot></slot></b>
        </p>


    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },


}
</script>

<style scoped>
    .slot{
        width: 400px;
        height: 150px;
        margin: 0px auto;
        border: 3px solid black;
    }
</style>