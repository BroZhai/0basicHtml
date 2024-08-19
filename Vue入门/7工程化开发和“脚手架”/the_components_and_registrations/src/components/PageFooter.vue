<template>
    <!-- 注意: 看上去各个小vue组件是相互独立的，但实际上，它们在App.vue的根组件内是 "互通的"！
        比如说下面这个footer的class, 它就还可以直接引用到PageHeader里面的".header"样式
        (前提是这两组件必须 在"同一根组件"中！)
    -->
    <div class="footer" @click="footerAlert">
        那么，我就是"PageFooter.vue"啦ʕ•̀ω•́ʔ✧
        <GlobalButton class="btnpos"></GlobalButton>
    </div>
</template>
<script>
export default {
    methods:{
        footerAlert(){
            alert("PageFooter被点击力！")
        },
    }
}
</script>
<style>
    .footer{
        height:100px;
        line-height: 60px;
        text-align: center;
        font-size: 18px;
        background-color: #3eeb17;
        color:white;
        margin-bottom: 20px;
    }
    .footer:hover{
        border: 6px solid white;
    }
    .btnpos{
        position: relative;
        top:-20px;
        margin: 0px auto;
    }
</style>