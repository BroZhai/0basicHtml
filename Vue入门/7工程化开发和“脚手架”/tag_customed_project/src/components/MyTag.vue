<template>
    <div v-if="editStatus">
        <input type="text" placeholder="请输入要更改的备注">
    </div>

    <div v-else>

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
    },

    data(){
        return{

        }
    },

}
</script>

<style>


</style>