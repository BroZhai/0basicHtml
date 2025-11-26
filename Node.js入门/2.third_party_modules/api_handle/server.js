const express = require("express");
const my_router = require("./router.js");
const app = express();

// 运行服务器
app.listen(8080, () => {
    console.log("Server is now running at http://locathost:8080");
})

// 配置'解析表单数据'的中间件 (用内置的URL-encoded, 处理post请求时就会触发)
app.use(express.urlencoded({extended: false}));

app.use('/api', my_router); // 注册'自定义路由'中间件 (加个'指定api前缀'才会触发)
