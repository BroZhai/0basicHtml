<template>
  <div id="cat_container">
      <button class="remind" ref="click_me">随机1只喵</button>
    <table>
      <thead>
        <tr>
          <th>图片id</th>
          <th>图片预览</th>
          <th>图片高度</th>
          <th>图片宽度</th>
          <th>图片地址</th>
          <th>删除图片</th>
        </tr>
      </thead>
      <tbody id="table-body">
        <tr>
          <td>idxxx</td>
          <td><img src="../assets/bakaCat.jpg" /></td>
          <td>高度xx</td>
          <td>宽度xx</td>
          <td>地址xx</td>
          <td><a href="#">X</a></td>
        </tr>
      </tbody>
    </table>
  </div>
	
</template>

<script setup lang="ts">
import {ref} from 'vue'

const cat_Api:string = 'https://api.thecatapi.com/v1/images/search' // 小猫图片请求Api
let click_me = ref<HTMLElement | null>(null) // 我靠, 这一步有点费脑细胞了 XD
const request_btn: HTMLButtonElement = click_me.value as HTMLButtonElement // 断言


</script>

<style>

body {
  width: 900px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  margin: 0px auto;
}

button {
  font-size: 1.5rem;
  color: rgb(7, 75, 99);
  width: 200px;
  margin: 10px;
}

table {
  text-align: center;
}

th, td {
  border: 1px solid rgb(118, 156, 148);
  padding: 5px;
}

a {
  text-decoration: none;
  color: red;
  font-weight: bolder;
}

img {
  height: 30px;
  width: 30px;
}

@keyframes changing {
  from {
      border-style: solid;
  }
  to {
      border-style: dotted;
      border-color: red;
  }
}

.remind {
  border-style: solid;
  animation-name: changing;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.green {
  background-color: rgb(106, 181, 118);
}
  
</style>