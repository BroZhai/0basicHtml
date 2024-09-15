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
          <!-- 接下来，我们来看一下它"提供的layout布局"，据说这个才是核心 -->
          <van-row>
            下面是用vant2的layout重新排的俩按钮:
            <van-col span="8" offset="4">
              <van-button color="#7232dd" @click="login">提交信息</van-button>
            </van-col>
            <van-col span="4">
              <van-button color="grey" @click="resetInputs">重置</van-button>
            </van-col>
          </van-row>
        </div>
        <hr>
        <!-- 单选框 -->
        <van-radio-group v-model="type" direction="horizontal">你是: &nbsp;
            <van-radio name="good">好人</van-radio>
          <van-radio name="bad">坏人</van-radio>
          <van-radio name="faq">我去你的你管我是谁</van-radio>
        </van-radio-group>
        <!-- 多选框 -->
        <van-checkbox-group v-model="attributes" >请选择你的属性: 
          <van-checkbox name="打工人" shape="square" checked-color="green">打工人</van-checkbox>
          <van-checkbox name="摆烂人" shape="square" checked-color="green">摆烂人</van-checkbox>
          <van-checkbox name="动漫人" shape="square" checked-color="green">动漫人</van-checkbox>
          <van-checkbox name="游戏人" shape="square" checked-color="green">游戏人</van-checkbox>
          <van-checkbox name="直播人" shape="square" checked-color="green">直播人</van-checkbox>
          <van-checkbox name="普通人" shape="square" checked-color="green">普通人</van-checkbox>
          <van-checkbox name="有钱人" shape="square" checked-color="green">有钱人</van-checkbox>
        </van-checkbox-group>
        <!-- 一条这是一个来自vant-ui的分割线，中间可带文字展示 -->
        <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
        >
          这是一个来自vant-ui的分割线awa
        </van-divider>
        <!-- 来点tag显示系统，展示上面多选选择的东西
          用v-for来渲染多选(attributes)里面的信息到tag中qwq
        -->
        <h4>以下是你多选的"属性"tag展示awa:</h4>
        <div class="tags"
        v-for="(item,index) in attributes" :key="index">
          <van-tag round type="primary" size="large"
          >{{ item }}</van-tag>
        </div> 

        <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
        >
          接下来我们来了解一下viewport
          <!-- vw: css3的新单位，可根据实际设备屏幕大小 来'动态设置' -->
        </van-divider>
        <div class="viewbox">

        </div>
  </div>
</template>
<script>
export default {
  data () {
    return{
      username: "",
      password: "",
      type:"",
      attributes:[],
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
  .tags{
    display: inline-block;
    margin-left: 10px;
    margin-top: 5px;
  }
  .viewbox{
    width: 300px;
    height: 300px;
    background-color: pink;
    margin: 0px auto;
    position: relative;
  }

</style>