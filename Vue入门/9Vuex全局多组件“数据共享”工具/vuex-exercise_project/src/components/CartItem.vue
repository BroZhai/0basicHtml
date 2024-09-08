<template>
  <div> <!--一个商品Item，这里是'根'，在下面用v-for渲染多个-->
    <div class="outer">
        <!-- 这里的'图片地址'要以'当前文件'为基准，而不是index.json的位置XD -->
        <img :src="singleItem.imgSrc" id="img" alt="加载失败了">
      <p id="itemName"> {{ singleItem.name }} </p>
      <p id="price">￥ {{ singleItem.price }}</p>
      <p id="num">
        <button> - </button> 
        <b> {{ singleItem.count }} </b> 
        <button> + </button>
      </p>
    </div>
</div>
</template>

<script>

export default {
  // 取得根组件传来的"购物车数据"
  props: ['singleItem']
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