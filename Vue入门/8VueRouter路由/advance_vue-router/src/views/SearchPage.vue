<template>
    <div>
        <div class="searchBox">
            <h3>我是一个搜索框</h3>
            <input type="text" placeholder="请输入查询内容(暂时无用)">
            &nbsp;&nbsp;<button>搜索一下</button>
            <p><!-- 接下来，我们来玩转一下跳转传参, 下面首先是"查询参数?名=值" ，主要就是这个"?"-->
                猜你想搜:
                <router-link to="/resultPage?key=色图" class="sug">色图</router-link>
                <router-link to="/resultPage?key=查的寄屁替4" class="sug">查的寄屁替4</router-link>
                <router-link to="/resultPage?key=炫酷笔电外设" class="sug">炫酷笔电外设</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
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