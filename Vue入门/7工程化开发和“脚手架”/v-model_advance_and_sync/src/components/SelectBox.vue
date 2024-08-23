<template>
    <div>
        <!-- 这里不能直接用v-model! 我们得把它拆了
        主要针对的就是 后面的"改值部分"，将原来的"直接绑定改值" 变成 "发送改值请求 并传修改参数"(给父组件)
        这里的:value用于绑定接收从父组件传过来的"默认值" -->
        <select :value="selectedId" @change="ChangeSelection">
            <option value="S1">选项1</option>
            <option value="S2">选项2</option>  
            <option value="S3">父组件定的默认选中选项3</option>  
            <option value="S4">选项4</option>  
        </select>
    </div>
</template>

<script>
export default {
    props:['selectedId'],

    methods:{
        ChangeSelection($event){
            // 此时这里要去拿 变动的选项的"value",所以上面别忘了传个"获取事件"的$event参数 ("e"也行)
            // 然后获取到 这个事件的"对象"，再选择这个"对象"中我们想要的'值'
            let changedValue=$event.target.value;
            console.log(`已通过$event.target.value取得的变动值为: ${changedValue}`);
            
            // 然后$emit告知父组件进行修改
            this.$emit("plsChangeSid",changedValue);
        },
    }
}
</script>

<style>
    
</style>