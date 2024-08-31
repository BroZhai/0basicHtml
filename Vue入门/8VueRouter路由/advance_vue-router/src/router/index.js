// import NavBar from "@/views/NavBar.vue";
import ContactMembers from "@/views/ContactMembers.vue";
import MessageBox from "@/views/MessageBox.vue";
import MomentPosts from "@/views/MomentPosts.vue";
import SearchPage from "@/views/SearchPage.vue";
import SearchResult from "@/views/SearchResult.vue";
import RouteSearchResult from "@/views/RouteSearchResult.vue";
import NotFound from "@/views/NotFound.vue";
import AboutPancakes from "@/views/AboutPancakes.vue";
// Tips: "@"直接代表的就是 从"src"目录开始

// 由于安装VueRouter要用到"大Vue"实例，路由模块默认没有，这里就要手动导入一下
import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter); //安装完成

const router=new VueRouter({
    routes:[
        {path:"/message",component:MessageBox},
        // 我们来试着给"/contacts"追加一个二级路由，用来展示Pancake的信息
        {
            path:"/contacts",
            component:ContactMembers,
            /* 用children:数组[
            {path:...,component:...},
            ...
            ]来继续配置该一级路由下的二级路由*/ 
            children:[
                {
                    path:"/contacts/pancakeInfo",
                    component:AboutPancakes},
            ],
        },
        {path:"/moments",component:MomentPosts},
        {path:"/searchPage",component:SearchPage},
        // 下面这个是处理"?参数"的 查询参数传参
        {path:"/resultPage",component:SearchResult},

        // 这个是"设置诱捕器"的 动态路由传参 (用":"设置'诱捕名')
        {path:"/RoutePassingResultPage/:words?",name:"customRoute",component:RouteSearchResult},
        // Tips：最后面跟着的"?"表示 不传值时也可以访问该组件

        // 追加一个"根页面"重定向redirect，自动跳转到"消息"路由组件
        {path:"/",redirect:"/message"},

        // 再来一个"404页面处理"，本质的原理就是"捕获全部*‘无效访问’"
        {path:"*",component:NotFound},
    ],
})
// 配置完后，别忘了导出这个router对象
export default router;