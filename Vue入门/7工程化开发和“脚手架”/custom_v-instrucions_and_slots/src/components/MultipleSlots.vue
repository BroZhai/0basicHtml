<template>
    <div class="slot">
        <!-- 在子组件中，用name="xxx"在slot后面给他们'起别名'
            到时候在父组件中 在template后的v-slot:这里起的名字 进行选中
        -->
        <h3><slot name="title">这个是默认Slot标题</slot></h3>
        <p><slot name="contentA">这是默认内容A</slot></p>
        <em><b><slot name="contentB">我是默认内容B</slot></b></em>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>