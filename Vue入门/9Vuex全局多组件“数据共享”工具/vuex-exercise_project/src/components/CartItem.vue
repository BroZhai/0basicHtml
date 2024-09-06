<template>
  <div class="outer">
    <div id="img">

    </div>
    <p id="itemName">这里是一个商品(名字)</p>
    <p id="price">￥ xxx</p>
    <p id="num">
      <button> - </button> 
      <b>商品数量</b> 
      <button> + </button>
    </p>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
  .outer{
    height: 110px;
    border: 4px solid black;
    margin-top: 5px;
  }

  #itemName{
    margin-top: 2px;
    font: normal bold 18px "黑体";
  }

  #img{
    width: 100px;
    height: 100px;
    margin: 3px;
    float: left;
    position: relative;
    display: block;
    border: 2px solid grey;
  }

  #price{
    margin-top: 38px;
    position: relative;
    float: left;
    font: normal bold 18px "等线";
    color: red;
  }

  #num{
    position: relative;
    float: right;
    margin-right: 30px;
  }
</style>