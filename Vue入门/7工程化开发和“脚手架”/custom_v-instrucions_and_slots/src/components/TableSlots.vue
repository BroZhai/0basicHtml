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
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <!-- 这里最后一列"操作"不写，因为要自订结构 -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>


export default {
    
}
</script>

<style scope>
    .table{
        margin: 0px auto;
    }
</style>