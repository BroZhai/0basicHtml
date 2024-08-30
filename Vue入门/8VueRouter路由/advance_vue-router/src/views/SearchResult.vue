<template>
    <div>
        <!-- 在用"查询参数?"跳转后
        在template中用 $route.query.传进来的参数名 获取 "?参数名" 的值
        在script中则要多一个 "this."$route.query.传进来的参数名
        -->
        <!--<p>你搜索了: {{ $route.query.key }}</p>-->
        <p>你搜索了: {{ searchedKey }}</p>
        <ul>
            <li>......</li>
            <li>......</li>
            <li>......</li>
            <li>......</li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return{
            // 在script中用获取 "?"传的参
            searchedKey: this.$route.query.key,
        }
    },
}
</script>

<style>
    
</style>