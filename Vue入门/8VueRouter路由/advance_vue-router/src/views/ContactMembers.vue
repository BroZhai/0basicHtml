<template>
    <div>
        <ul>
            <!-- 注意，这里的"煎饼"是个二级路由哦~ -->
            <li><router-link to="/contacts/pancakeInfo">煎饼</router-link>: 一个喜欢吃蜜糖煎饼的路过小猫</li>
            <li>Cirno: 雾之湖算术大神，喜欢冻青蛙</li>
            <li>布布: 谁是布布?</li>
            <router-view></router-view>
        </ul>
    </div>
</template>

<script>

export default {
    
}
</script>

<style>
    
</style>