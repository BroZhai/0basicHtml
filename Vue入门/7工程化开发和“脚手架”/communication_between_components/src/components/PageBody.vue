<template>
    <div class="common">
        <ul>
            <li v-for="(item,index) in tasklist" :key="item.id">
                {{ index+1 }}. {{ item.name }} <span v-html="'&nbsp;&nbsp;'"></span>
                <button>删除此项</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['tasklist']
}
</script>

<style>
    .common li{
        list-style: none;
        text-align: center;
    }
</style>