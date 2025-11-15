const express = require("express");
const app = express();
const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`express服务器现已成功运行在 http://localhost:${PORT}`);
})

app.get('/repeat', (req, res) => {
    let client_query = req.query
    console.log(`客户端发来的查询信息:`);
    console.log(client_query);
    res.send(client_query)
    console.log(`已进行json转化并原路发回`);
})