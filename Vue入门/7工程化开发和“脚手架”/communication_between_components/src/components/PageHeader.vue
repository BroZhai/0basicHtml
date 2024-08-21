<template>
    <div id="Header">
        <h1>妙妙记事本</h1>
            <div id="interact">
                <input type="text" placeholder="来输入你的计划活动?" v-model="addtask">
                <button @click="add">添加任务</button>
            </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style scoped> 
    #Header h1{
        text-align: center;
    }
    #interact{
    text-align: center;
    }
    #interact ul li{
        list-style: none;
    }
</style>