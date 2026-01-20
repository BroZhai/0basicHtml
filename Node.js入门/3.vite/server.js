import express from "express";
import multer from "multer";
import path from "node:path"; // ESM的 require('path')

const app = express();

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