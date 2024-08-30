<template>
    <div>
        <!-- 这里则是"动态路由"传参了
            重点在于在"路由对象中"用":"设置'诱捕名'
            而获取的话:
            template中用 $route.params.诱捕名 就可以取到对应的值啦
            script中也是多个"this."就行~~
        -->
        <!-- <p>你搜索了: {{ $route.params.words }}</p> -->
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
            searchedKey: this.$route.params.words,
        }
    },
}
</script>

<style>
    
</style>