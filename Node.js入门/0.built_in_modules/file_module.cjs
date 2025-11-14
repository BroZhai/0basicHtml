const fs = require('fs')
fs.readFile('./file_dir/a.txt','utf8', (err, data) => {
    if(err === null){
        console.log("无错发生, 成功读取了文件:");
        console.log(data);
    }else{
        console.log("发生了如下的错误:");
        console.log(err);
    }
})

let write_data = "114514";
fs.writeFile('./file_dir/a.txt', write_data, (err) =>{
	if(err){
		console.log("在写入文件时发生了错误");
	}else{
		console.log("已成功写入文件!");
	}
});