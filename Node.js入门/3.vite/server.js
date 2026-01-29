import express from "express";
import multer from "multer";
import path from "node:path"; // ESM的 require('path')
import { CLIENT_RENEG_WINDOW } from "node:tls";
import fs from "node:fs"
import { access, readdir, mkdir } from "node:fs/promises";

const app = express();

app.use(express.static(import.meta.dirname));

// 存储配置
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload_folder/files'); // 设置保存路径
    },
    filename: (req, file, cb) => {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random * 1E9); // 加个'独特后缀'确保'文件名'唯一
        // const ext_name = path.extname(file.originalname);
        // console.log(file.originalname);
        cb(null, file.originalname); // 确定保存的'文件名'
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
        // res.download(filepath);
        res.sendFile(filepath, (err) => {
            if(err){
                console.log('sendFile发送文件时发生了错误');
                res.status(404).send('sendFile发送文件时发生了错误');
            }
        });
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
app.get('/link_download', async (req,res) => {
    console.log("成功访问/link_download");
    // res.sendStatus(502);
    const cur_dir = import.meta.dirname;
    const filename = req.query.filename;
    // console.log(filename);

    // res.sendStatus(502);
    const filepath = path.join(cur_dir, "/upload_folder/files",filename);
    if(await check_exist(filepath)){
        console.log("link成功找到文件!");
        res.download(filepath);
    }else{
        console.log(`错误: ${filepath} 文件不存在! 请查错...`);
        res.sendStatus(404);
    }
})

// 扫描'目录中的文件' /scan 路由
app.get('/scan', async(req, res) => {
    console.log('/scan路由触发');
    const cur_dir = import.meta.dirname;
    const tgt_path = path.join(cur_dir,"/upload_folder/files");
    const dir_list = await readdir(tgt_path);
    // console.log(dir_list);


    res.send({
        dir: dir_list
    });
})

// 扫描'可用目录'
app.get('/scan_folder', async (req, res) => {
    console.log("/scan_folder路由触发");
    const cur_dir = import.meta.dirname;
    const tgt_path = path.join(cur_dir, "/upload_folder");
    let folders = await readdir(tgt_path);

    res.send({
        dir: folders
    })
})

// 扫描'给定目录'中的可用文件
app.get('/check_folder', async (req, res) => {
    console.log('/deep_scan路由触发');
    // console.log(req.query);
    let tgt_folder = req.query.folder;
    const cur_dir = import.meta.dirname;
    const tgt_path = path.join(cur_dir, "/upload_folder",tgt_folder);
    let files = await readdir(tgt_path);
    res.send({
        available_files: files
    });
})

// 处理'创建文件夹'get响应 (在upload_folder) 中, 字段通过get请求发来 (实际可能会换成post来确保安全)
app.get('/create_folder', async (req, res) => {
    console.log('/create_folder路由触发');
    // console.log(req.query);
    let folder_name = req.query.folder_name;
    // console.log(`拿到的folder_name: ${folder_name}`);
    const cur_dir = import.meta.dirname;
    const target_folder = path.join(cur_dir,"/upload_folder",folder_name);

    try{
        await mkdir(target_folder);
        await access(target_folder);
        res.send("Success!")
    }catch(err){
        console.log(`发生了错误: ${err}`);
        res.send("Failed...")
    }
    // await mkdir(target_folder).then((result) => {
    //     console.log("创建成功");
    // })
    // .catch((err) => {
    //     console.log(`发生了错误: ${err}`);
    //     res.send("Failed...")
    //     return;
    // })
    
    // await access(target_folder).then((res) => {
    //     console.log(`文件夹 ${target_folder} 存在`);
    //     res.send("Success!");
    // })
    // .catch((err) => {
    //     console.log(`创建失败, 目录 ${target_folder}`);
    //     console.log(`具体错误: ${err}`);
    //     res.send("Failed...")
    // })
    
    
})
