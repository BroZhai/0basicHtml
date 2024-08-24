<template>
    <div class="login">
        <h3>LoginBox子组件登录框</h3>
        <p>账户: &nbsp;&nbsp;<input type="text" placeholder="请输入账户名" v-model="account.username"></p>
        <p>口令: &nbsp;&nbsp;<input type="password" placeholder="请输入口令" v-model="account.password"></p>
        <!-- 注意，不是在这里写"登录"和"清除"按钮
            去根组件中写，咱来试试$refs.子Vue组件 调用下面的methods方法
        -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            // LoginBox子组件内部特有的'登录数据'
            account:{
                username:"",
                password:""
            },        
        }
    },
    methods:{
        getLoginObj(){
            console.log(`子组件的getLoginObj()被执行了`)
            console.log(`获取到的account信息为:
        账号: ${this.account.username}
        口令: ${this.account.password}
            `);
        },

        clearLogin(){
            this.account.username='',
            this.account.password='',
            console.log("子组件中的clearLogin()已被执行")
        },
    }
}
</script>
<style>
    .login{
        width: 300px;
        height: 160px;
        border: 3px solid black;
        border-radius: 15px;
        text-align: center;
    }
    .login p{
        margin-bottom: 20px;
    }
    .btn{
        margin: 0px 32px;
    }
</style>