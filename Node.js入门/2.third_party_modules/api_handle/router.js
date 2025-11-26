const express = require('express')
const router = express.Router();

// 一个简单的get请求处理接口
router.get('/get', (req, res) => {
    const query = req.query; // 从客户端拿'get查询语句' (?key1=value1&key2=value2...)
    console.log(query);
    // 省略与后台SQL服务器交互的代码
    res.send({ // 发送回应给浏览器
        handle_status: 200,
        msg: "自定义的msg参数, 你触发了get请求的处理API",
        data: query
    })
});

// 写post请求接口也是完全同理 (处理post请求时, 需要提前配置[注册]'解析请求体'的中间件,)
router.post('/post', (req, res) => {
    const query = req.query;
    // 省略与后台SQL服务器交互的代码
    res.send({
        handle_status: 201,
        msg: "你成功出发了post请求的处理API",
        data: query
    })
})

module.exports = router; // 导出该路由