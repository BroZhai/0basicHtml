<template>
    <div>
        <h3>要Sync给父组件的消息</h3>
        <input type="text" :value="updateMe" @change="passSync">
    </div>
</template>

<script>
export default {
    props:["updateMe"],
    methods:{
        passSync($event){
            let changedValue=$event.target.value;
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