<template>
    <div class="header" @click="bodyAlert">
        Hello~ 我是"PageBody.vue" ٩(๑òωó๑)۶
        <GlobalButton></GlobalButton>
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
<style scoped> 
/* 由于CSS默认样式写出来就是"全局通用"的
    如果想让本组件的css"只作用于本组件"，那么在style后面加一个"scoped"关键字即可
    (相当于这里的样式"独立于"全局的样式" 自成一派独立作用于本组件[重名也OK!])
*/
    .header{  
    /* 这里虽然是.header, 但是它就已经和 全局的".header" 给独立出来了
        包括下面的".header:hover"也是一样的
    */
        height:300px;
        line-height: 140px;
        text-align: center;
        font-size: 18px;
        background-color: #eb7317;
        color:white;
        margin-bottom: 20px;
    }
    .header:hover{
        border: 6px solid black;
    }
</style>