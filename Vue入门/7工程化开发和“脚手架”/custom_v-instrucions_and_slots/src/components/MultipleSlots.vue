<template>
    <div class="slot">
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