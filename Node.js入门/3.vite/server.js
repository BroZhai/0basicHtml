import express from "express";

const app = express();

app.listen(5050, ()=>{
    console.log(`Backend Server running at http://localhost:5050`);
})

app.get('/api/test', (req, res) =>{
    console.log("/api/test 后台路由已被访问!");
    res.send("Check node.js console");
})