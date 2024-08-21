<template>
    <div id="Header">
        <h1>妙妙记事本</h1>
            <div id="interact">
                <input type="text" placeholder="来输入你的计划活动?">
                <span v-html="'&nbsp;&nbsp;'"></span><!--在Vue中，'&nbsp'不再可用，我们得另寻方法'塞空格'-->
                <button @click="add">添加任务</button>
            </div>
    </div>

</template>

<script>
export default {
    methods:{
        add(){

        },
    }
}
</script>

<style scoped> 
    #Header h1{
        text-align: center;
    }
    #interact{
    text-align: center;
    }
</style>