<template>
  <div id="cat_container">
      <button class="remind" ref="click_me" @click="api_respond">随机1只喵</button>
    <table ref="cat_table">
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
        <!-- <tr>
          <td>我是id笨蛋!</td>
          <td><img src="../assets/bakaCat.jpg"/></td>
          <td>600</td>
          <td>600</td>
          <td>我是本地的图片哦</td>
          <td><a href="#">X</a></td>
        </tr> -->
        <tr v-for="(item, index) in cat_list">
          <td>{{item.id}}</td>
          <td><img :src="item.url"/></td>
          <td>{{item.height}}</td>
          <td>{{item.witdth}}</td>
          <td>{{item.url }}</td>
          <td><a href="#" @click="drop_cat(item.id)">X</a></td>
        </tr>
      </tbody>
    </table>
  </div>
	
</template>

<script setup lang="ts">
import axios from 'axios'
import {ref} from 'vue'

const cat_Api:string = 'https://api.thecatapi.com/v1/images/search' // 小猫图片请求Api

// let click_me = ref<HTMLElement | null>(null) // 我靠, 这一步有点费脑细胞了 XD (获取大按钮DOM)
// const request_btn: HTMLButtonElement = click_me.value as HTMLButtonElement // 断言为Button(确信

// let cat_table = ref<HTMLElement | null>(null) // 获取表格dom
// const my_cat_table: HTMLTableElement = cat_table.value as HTMLTableElement

// let received_obj:any = {}

let cat_list = ref<MyCat[]>([])

const drop_cat = (id: string) => {
  console.log(`准备删除id为: ${id} 的猫咪`);
  cat_list.value =  cat_list.value.filter( item => {
    return item.id !== id // 忘记return了, debug了半天草, 还有注意"===" 不转类型比较!
  })
}

let api_respond = async() => { 
  axios.get(cat_Api).then( (received_obj) => {
    // 成功响应区
    console.log(received_obj);
    // console.log(received_obj.data[0]); 
    let cat_obj = new MyCat(received_obj.data[0].id, received_obj.data[0].url, received_obj.data[0].width, received_obj.data[0].height)
    cat_list.value.push(cat_obj)
    // console.log(cat_list);
  }, (received_obj) => {
    // 失败响应区
    console.log(`警告! Api请求未成功QAQ...`);
    console.log(received_obj);
  });

}

interface Cat_Type{
  id: string,
  url: string,
  witdth: number,
  height: number,
  optional?: boolean,
}

class MyCat implements Cat_Type{
  id: string;
  url: string;
  witdth: number;
  height: number;
  constructor(id: string, url: string, width: number, height: number){
    this.id = id;
    this.url = url;
    this.witdth = width;
    this.height = height;
    
  }
}



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