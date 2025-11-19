const express = require("express");
const router = express.Router(); // 引入'路由对象' (专门干路由用的)

// 针对'路由对象'进行各种'路由挂载'
router.get("/rpath1", (req, res) =>{
    res.send("Welcome to Rpath 1!");
})
router.get("/rpath2", (req, res) =>{
    res.send("Welcome to Rpath 2!!");
})

// 将'路由对象'从该模块导出 (供其他模块引入使用) [独裁写法, 导出的module直接为 '这一个'实例对象]
module.exports = router 

// console.log(module);