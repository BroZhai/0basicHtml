import ContactMembers from "@/views/ContactMembers.vue";
import MessageBox from "@/views/MessageBox.vue";
import MomentPosts from "@/views/MomentPosts.vue";
import SearchPage from "@/views/SearchPage.vue";
import SearchResult from "@/views/SearchResult.vue";
import RouteSearchResult from "@/views/RouteSearchResult.vue";
// Tips: "@"直接代表的就是 从"src"目录开始

// 由于安装VueRouter要用到"大Vue"实例，路由模块默认没有，这里就要手动导入一下
import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter); //安装完成

const router=new VueRouter({
    routes:[
        {path:"/message",component:MessageBox},
        {path:"/contacts",component:ContactMembers},
        {path:"/moments",component:MomentPosts},
        {path:"/searchPage",component:SearchPage},
        // 下面这个是处理"?参数"的 查询参数传参
        {path:"/resultPage",component:SearchResult},

        // 这个是"设置诱捕器"的 动态路由传参 (用":"设置'诱捕名')
        {path:"/RoutePassingResultPage/:words",component:RouteSearchResult},
    ],
})
// 配置完后，别忘了导出这个router对象
export default router;