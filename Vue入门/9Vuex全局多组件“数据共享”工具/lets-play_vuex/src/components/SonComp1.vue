<template>
    <div>
        <div class="border">
            <h4>Hi，这里是子组件1！owo</h4>
            <p>我从vuex中获取到的值为:</p>
            <button>值 + 1</button>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
    .border{
        width: 500px;
        height: 150px;
        border: 2px solid grey;
        margin: 5px auto;
    }
</style>
