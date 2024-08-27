<template>
    <div>
        <h4 style="display: block; text-align: center;"><slot name=title>你好像忘记 给v-slot:title 传值了</slot></h4>
        <table class="table" border="1px">
            <thead>
                <tr>
                    <td>序号</td>
                    <td>宝可梦名</td>
                    <td>等级</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list" :key="item.id">
                    <td>{{ index+1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.lv }}</td>
                    <!-- 这里最后一列"操作"不写，因为要自订结构 -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>


export default {
    props:['list'],
}
</script>

<style scope>
    .table{
        margin: 0px auto;
        text-align: center
    }

</style>