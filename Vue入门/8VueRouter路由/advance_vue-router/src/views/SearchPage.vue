<template>
    <div>
        <div class="searchBox">
            <h3>我是一个搜索框</h3>
            <input type="text" placeholder="请输入查询内容" v-model="searchInput">
            &nbsp;&nbsp;
            <button @click="letsSearch">搜索一下</button>
            <p><!-- 接下来，我们来玩转一下跳转传参, 下面首先是"查询参数?名=值" ，主要就是这个"?"-->
                猜你想搜:
                <router-link to="/resultPage?key=色图" class="sug">色图</router-link>
                <router-link to="/resultPage?key=查的寄屁替4" class="sug">查的寄屁替4</router-link>

                <!-- 下面这个route-link我们来用"动态路由"实现awa...
                    不需要再用"?"了，重点在"路由对象"path里面设置一个"参数诱捕器"
                    ("下面RoutePassingResultPage/ "后面的内容"，即对应"诱捕器的格式"(:words) 传给它的对应参数)
                -->
                <router-link to="/RoutePassingResultPage/炫酷笔电外设" class="sug">炫酷笔电外设</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchInput:""
        }
    },

    methods:{
        letsSearch(){
            /* 简单写法，注意这里的操作对象是$route"r",先来看看"?请求传参"
            (巧用模版字符串的反引号``读本地存的参数)
            push()里面直接写上要访问的路由 ( ?参数名= +对应的"本地data参数")
            */ 
            this.$router.push(`/resultPage?key=${this.searchInput}`);
        }
    },
}
</script>

<style scoped>
    .searchBox{
        width: 600px;
        height: 300px;
        margin: 20px auto;
        border: 2px solid black;
        text-align: center;
    }

   .sug{
        margin-left: 8px;
    }
</style>