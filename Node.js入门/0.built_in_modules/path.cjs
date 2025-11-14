const path = require("path");
const fs = require("fs");

const append_dir = '/file_dir/a.txt';
console.log(`当前文件的__dirname常量为: ${__dirname}`);
let joined_path = path.join(__dirname, append_dir);
console.log(`和append_dir拼接得到的结果为: ${joined_path}`);

fs.readFile(joined_path, (err,data) =>{
    if(err){
        console.log("文件不存在!");
    }else{
        console.log("File Hit!");
        console.log(`提取出来的文件名为: ${path.basename(joined_path)}, 去掉后缀为: ${path.basename(joined_path, ".txt")}`);
    }
})