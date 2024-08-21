<template>
    <div class="common">
        <ul>
            <li v-for="(item,index) in tasklist" :key="item.id">
                {{ index+1 }}. {{ item.name }} <span v-html="'&nbsp;&nbsp;'"></span>
                <button @click="sendDelReq(item.id)">删除此项</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['tasklist'],

    methods:{
        sendDelReq(listId){
            this.$emit("sendDelReq",listId);
        },
    }
}
</script>

<style>
    .common{
        text-align: center;
    }
    .common li{
        list-style: none;
    }
</style>