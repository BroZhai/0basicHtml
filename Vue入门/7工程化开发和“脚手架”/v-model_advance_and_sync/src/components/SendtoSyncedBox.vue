<template>
    <div>
        <h3>要Sync给父组件的消息 (回车进行数据同步)</h3>
        <input type="text" :value="updateMe" @change="passSync">
    </div>
</template>

<script>
export default {
    props:["updateMe"],
    methods:{
        passSync($event){
            let changedValue=$event.target.value;
            // $emit("update:抓取名",参数) 【update:抓取名 为固定格式】
            this.$emit("update:updateMe",changedValue);
        },
    }
}
</script>

<style>
    input{
        width: 20em;
    }
</style>