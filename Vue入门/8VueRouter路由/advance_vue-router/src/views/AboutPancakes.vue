<template>
    <div>
        <h4>关于煎饼</h4>
        <p>计算机第一笨蛋!! OAO</p>
        <p>没啦！<button @click="goback">点击返回"联系人"</button></p>
    </div>
</template>

<script>

export default {
    methods:{
        goback(){
            this.$router.push({
                path:"/contacts",
            })
        }
    }
}
</script>

<style>
    
</style>