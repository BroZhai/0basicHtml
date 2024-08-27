<template>
    <div>
        <h4 style="display: block; text-align: center;">
            <slot name=title>你好像忘记 给v-slot:title 传值了</slot>
        </h4>
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
                    <!-- 这里最后一列"操作"在外面写，因为要自订'结构' 
                        同时，我们要尝试把"当前行"的数据 往父组件传，
                        让"操作"取得操作 返回的'行对象' 后再进行不同的操作
                        注:返回的信息会是一个整体的‘对象’，在父组件中用#slot名后 右边再多个="自动obj名"来接收'返回的对象'
                        子组件 <slot :xxx="本地已有数据"(对象) ...其他数据>
                        父组件【v-slot: / #slot名="自订名 接收'返回对象'"】
                        (如下面的就是)
                        {
                            row:{id:xxx,name:"xxx",lv:xx},
                            msg:"我是传回来的额外的附加信息"
                        }
                    -->
                    <td>
                        <!-- 将'当前行' item 命名成'row' 和 其他信息 打成一个'整体对象包' 传给 父组件
                            (这里像row这样的各种'标签小名'无所谓，父组件到时自己又要 重新给整个"对象包"再次命名调用的
                            '标签小名'只是定义"对象包"内部值的"小键名"，用于后面的"层层递进"定位
                            )
                        -->
                        <slot name="btn" :row="item" msg="我是传回来的额外的附加信息"></slot>
                    </td>
                    
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