<template>
    <div class="body" @click="bodyAlert">
        Hello~ 我是"PageBody.vue" ٩(๑òωó๑)۶
    </div>
</template>
<script>
export default {
    methods:{
        bodyAlert(){
            alert("你戳到我的身体啦OAO!!")
        },
    }
}
</script>
<style>
    .body{
        height:300px;
        line-height: 300px;
        text-align: center;
        font-size: 18px;
        background-color: #eb7317;
        color:white;
        margin-bottom: 20px;
    }
    .body:hover{
        border: 6px solid white;
    }
</style>