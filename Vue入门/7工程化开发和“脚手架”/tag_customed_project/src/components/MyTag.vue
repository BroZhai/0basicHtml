<template>
    <div v-if="editStatus">
        <input type="text" placeholder="请输入要更改的备注">
    </div>

    <div v-else class="msgDisplay" @dblclick="clickChange">
        <!-- 外边:item=“item”的绝妙用法，让这里也可以用v-for内的item -->
        {{ item.defaultMsg }}
    </div>
</template>

<script>

export default {

    props:{
        editStatus:{
            type: Boolean
        },
        pokeList:{
            type: Array
        },
        item:{
            type: Object
        },
    },

    data(){
        return{

        }
    },

    methods:{
        clickChange(){
            this.$emit("clickChange",true);
        }
    }

}
</script>

<style>
    .msgDisplay{
        border: 1.5px solid black;
    }

</style>