<template>
  <div>
    <div id="inner">
      <h5>我是Inner</h5>
      <p>我当前收到的值为: {{ receivedValue }}</p>
      <p><button>拿方法来+</button>&nbsp;&nbsp;&nbsp;<button>拿方法来-</button></p>
    </div>
    <em style="text-align: center;">请在F12控制台中查看对应日志</em>
  </div>
</template>

<script setup>
import {inject, ref} from 'vue'
let receivedValue = ref(null)

// 直接用inject('键名')取值，然后赋值到变量
receivedValue = inject('receiveThis')
const addReq = () =>{
  
}

const decReq = () =>{

}
</script>

<style>
  #inner{
    text-align: center;
    border: 3px solid red;
    margin-top: 40px;
    margin-bottom: 50px;
  }
</style>