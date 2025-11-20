const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server Now Running at http://localhost:${PORT}`);
})

// 创建'中间件'
const mid_fun_1 = (req, res, next) => {
    req.cus_value = 114;
    console.log("已执行mid_fun_1中间件\n");
    next();
}

const mid_fun_2 = (req, res, next) => {
    console.log(`从req中得到的cus_value的值为: ${req.cus_value}`);
    console.log("已执行mid_fun_2中间件\n");
    next();
}

const mid_fun_3 = (req, res, next) => {
    req.cus_str = "mid_fun_3给的变量:3";
    console.log("已执行mid_fun_3中间件\n");
    next();
}

const mid_fun_4 = (req, res, next) => {
    console.log("已执行mid_fun_4中间件, 但这个中间件纯摆烂不干活:3\n");
    next();
}


// 注册为'全局中间件' (每当有请求过来时, 按照'.use()'的顺序依次调用)
app.use(mid_fun_1);
app.use(mid_fun_2);

// 路由匹配部分
app.get("/glo_mid", (req, res) => {
    res.send("已匹配路由/glo_mid, 请查看后端控制台的变化")
})

// '局部中间件'
app.get("/loc_mid", [mid_fun_3, mid_fun_4], (req, res) =>{
    console.log(`路由: 从req中得到的cus_str的值为: ${req.cus_str}`);
    res.send("看看后端控制台有没有'局部组件'运行的打印信息?")
})