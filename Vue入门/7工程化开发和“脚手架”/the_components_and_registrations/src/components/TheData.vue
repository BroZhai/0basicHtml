<template>
    <div>
        <p>
            <button @click="sub">-</button>
            {{ counter }}
            <button @click="add">+</button>
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            counter:100,
        }
    },
    methods:{
        sub(){
            this.counter--;
        },
        add(){
            this.counter++;
        }
    }
}
</script>
<style>
    
</style>