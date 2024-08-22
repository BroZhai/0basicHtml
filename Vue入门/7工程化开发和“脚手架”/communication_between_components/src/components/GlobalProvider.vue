<template>
    <div class="provider">
        <h3>你好，我是最外层的"数据provider"</h3>
        <!-- <p>&nbsp;&nbsp;&nbsp;<input type="text" placeholder="请输入数据" v-model="GlobalMsg">&nbsp;&nbsp;&nbsp;&nbsp;<button>provide抛到"全局虚拟域"</button></p> -->
        <p>我提供了{{GlobalObj}}, <b>{{ color }}</b></p>
        <OuterReceiver></OuterReceiver>
    </div>
</template>

<script>
// GlobalProvider内导Outer
import OuterReceiver from './OuterReceiver.vue';
// import InnerReceiver from './InnerReceiver.vue';

export default {
    components:{
        OuterReceiver,
        // InnerReceiver
    },

    data(){
        return{
            color:"blue", //非响应式 简单数据
            GlobalObj:{// 响应式 复杂数据
                name:"cirno",
                age:9,
            },
        }
    },

    //provide(){return {...}} 将数据抛向 "全局虚拟域"
    // 数据写法: inject数据名:  数据对象
    provide(){
        return{
            Gobj:this.GlobalObj,
            Gcolor:this.color,
        }
    }
}
</script>

<style>
    .provider{
        border:3px solid black;
        width: 500px;
        height: 600px;
        margin: 0px auto;
    }
</style>