import express from "express";
import multer from "multer";
import path from "node:path"; // ESM的 require('path')
import { CLIENT_RENEG_WINDOW } from "node:tls";
import fs from "node:fs"
import { access } from "node:fs/promises";

const app = express();

app.use(express.static(import.meta.dirname));

// 存储配置
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload_folder/files'); // 设置保存路径
    },
    filename: (req, file, cb) => {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random * 1E9); // 加个'独特后缀'确保'文件名'唯一
        const ext_name = path.extname(file.originalname);
        console.log(file.originalname);
        cb(null, file.fieldname + ext_name); // 确定保存的'文件名'
    }
});


// 文件过滤 (未使用)
const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image/')){
        cb(null,true);
    }else{
        cb(new Error('只允许上传图片!'), false);
    }
};

const upload = multer({
    storage: storage,
    limits: {fileSize: 50*1024*1024}, // 设定文件大小限制, 最大50MB
    // fileFilter: fileFilter
});

app.listen(5050, ()=>{
    console.log(`Backend Server running at http://localhost:5050`);
})

app.get('/api/test', (req, res) =>{
    console.log("/api/test 后台路由已被访问!");
    res.send("Check node.js console");
})

// 单文件上传处理路由
app.post("/upload/single", upload.single('myfile'), (req, res) =>{
    console.log(req.file);
    res.json({
        success: true,
        filename: req.file.fieldname
    })
})

// 判断文件是否存在 (异步方法), 返回true / fasle
async function check_exist(path){
    try{
        await access(path);
        return true;
    }catch(err){
        console.log(`发生了错误: ${err}`);
        return false;
    }
}

// 单文件的'下载'处理路由 (get请求)
app.get("/download/single", async (req, res) => {
    // console.log(req.query);
    const query_list = Object.entries(req.query);
    console.log(query_list);
    const cur_dir = import.meta.dirname;
    const filepath = path.join(cur_dir,query_list[0][0],query_list[0][1]);
    console.log(`计算出来的路径: ${filepath}`);
    if(await check_exist(filepath)){
        res.download(filepath);
        // res.sendFile(filepath, (err) => {
        //     if(err){
        //         console.log('sendFile发送文件时发生了错误');
        //         res.status(404).send('sendFile发送文件时发生了错误');
        //     }
        // });
        console.log("成功返回文件下载");
    }
    else{
        console.log("文件不存在!");
        res.sendStatus(404);
    }
    
    
    // res.send({
    //     success: true,
    //     parm: `读取的键名为: ${query_list[0][0]}, 对应的值为: ${query_list[0][1]}`,
    //     path: `计算出来的路径: ${filepath}`
    // })
})

// 处理 a链接的下载
app.get('/link_download/single', async (req,res) => {
    console.log("成功访问/link_download/single!");
    // res.sendStatus(502);
    const cur_dir = import.meta.dirname;
    const filepath = path.join(cur_dir, "/upload_folder/link/lucky.jpg");
    if(await check_exist(filepath)){
        console.log("link成功找到文件!");
        res.download(filepath);
    }else{
        console.log(`错误: ${filepath} 文件不存在! 请查错...`);
        res.sendStatus(404);
    }
})