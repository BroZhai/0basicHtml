<template>
    <div>
        <select :value="selectedId">
            <option value="S1">选项1</option>
            <option value="S2">选项2</option>  
            <option value="S3">父组件定的默认选中选项3</option>  
            <option value="S4">选项4</option>  
        </select>
    </div>
</template>

<script>
export default {
    props:['selectedId'],
}
</script>

<style>
    
</style>