<template>
    <div class="header" @click="headerAlert">
        我是components中的"PageHeader.vue" ^^
        <GlobalButton class="btnpos"></GlobalButton>
    </div>
</template>
<script>
export default { //export 这里就意味着"向外导出"该包，到时候就可以在别处引入"该vue包的数据"再使用
    methods:{
        headerAlert(){
            alert("这里是header.vue中的方法哦~")
        },
    }
}
</script>
<style>
    .header{
        height:100px;
        line-height: 60px;
        text-align: center;
        font-size: 18px;
        background-color: #af22f5;
        color:white;
        margin-bottom: 20px;
    }
    .header:hover{
        border: 6px solid white;
    }
</style>