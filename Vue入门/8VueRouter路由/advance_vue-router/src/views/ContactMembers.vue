<template>
    <div>
        <router-view v-if="isMemberAccess"></router-view>
        <ul v-else>
            <!-- 注意，这里的"煎饼"是个二级路由哦~ -->
            <li><router-link to="/contacts/pancakeInfo">煎饼</router-link>: 一个喜欢吃蜜糖煎饼的路过小猫</li>
            <li>Cirno: 雾之湖算术大神，喜欢冻青蛙</li>
            <li>布布: 谁是布布?</li>
        </ul>   
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    computed:{
        isMemberAccess(){
            let path=this.$route.path;
            return path==='/contacts/pancakeInfo';

        }
        
    }
}
</script>

<style>
    
</style>