const express = require("express");
const app = express();
const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`express服务器现已成功运行在 http://localhost:${PORT}`);
})

app.get('/repeat', (req, res) => {
    let client_query = req.query // 匹配get请求中 /?xxx = xxx 的请求参数
    console.log(`客户端发来的查询信息:`);
    console.log(client_query);
    res.send(client_query)
    console.log(`已进行json转化并原路发回`);
})

// 监听'动态参数'
app.get("/pass/:username/:password", (req, res)=>{
    let passed_parameters = req.params;
    console.log(`客户端动态传过来的参数`);
    console.log(passed_parameters);
    res.send(passed_parameters);
    console.log(`已进行json转化并原路发回`);
})

// 托管(提供返回)静态资源
app.use("/cirno", express.static("./web")); // 使用当前目录下的, web文件夹 (访问时需要加'指定前缀' /cirno, 该'指定前缀'在编写时可选, 有需要就加)


// 引入自己写的'路由模块' 组件
const imp_router = require("./express_router"); // 注: 此处imp_router 直接等价于express_router.js中的'router'对象 (独裁写法 无需'拆箱' owo)
app.use(imp_router);