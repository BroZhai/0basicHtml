const express = require("express");
const my_router = require("./router");
const app = express();

app.use('/api', my_router); // 注册'自定义路由'中间件 (加个'指定api前缀'才会触发)
