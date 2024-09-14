<template>
  <div>
    <!-- OK，经典中的经典，我们来"重写扩张"一下HTML 9表单里面的东西
        但这次是用别人"预制好"的组件，让整个页面更美观，且还有多出来的nb东西
    -->
        <div class="LoginBox">
          <h3>劲爆登录Site</h3>
          <!-- 下面就是vant-ui里面的"预制输入框"了awa  -->
            <van-field v-model="username" label="你的新劲爆id:" placeholder="请输入用户名" />
            <van-field v-model="password" type="password" label="绕绕的口令: " placeholder="密码呢"/>
            <van-field label="不要管我uwu" value="我只是一个被禁用的输入框owo" disabled></van-field>
          <div class="btn">
            <!-- 注意，按钮本身就已经"内置样式"了,
              直接在van-button内再写class将不再生效，要想额外设置它，咱给它单独用个div套起来awa
            -->
            <van-button color="#7232dd" @click="login">提交信息</van-button>
          </div>
          <div class="btn">
            <van-button color="grey" @click="resetInputs">重置</van-button>  
          </div> 
        </div>
        <hr>
        <!-- 单选框 -->
        <van-radio-group v-model="type" direction="horizontal">你是: &nbsp;
          <van-radio name="good">好人</van-radio>
          <van-radio name="bad">坏人</van-radio>
          <van-radio name="faq">我去你的你管我是谁</van-radio>
        </van-radio-group>
        
  </div>
</template>
<script>
export default {
  data () {
    return{
      username: "",
      password: "",
      type:"",
    }
  },
  methods:{
    login(){
      if(this.username === "" | this.password === ""){
        alert('请填写完整哦owo')
        return
      }
      alert(`登录成功，获取到的用户名为: ${this.username}, 口令为: ${this.password}`)
    },

    resetInputs(){
      this.username=''
      this.password=''
    }
  }
}
</script>
<style>
  .LoginBox {
    border: 3px solid black;
    width: 380px;
  }
  .LoginBox h3{
    text-align: center;
  }
  .btn{
    margin: 10px;
    display: inline-block;
    position: relative;
    margin-left: 60px;
  }

</style>