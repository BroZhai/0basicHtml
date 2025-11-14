const fs = require('fs')
let line = "";
let store_arr = [];
fs.readFile('./file_dir/b.txt','utf8', (err, data) => {
    if(err){
        console.log(`读取文件时发生了异常: ${err}`);
    }else{
        console.log(`成功读取了文件, 内容为: ${data}`);
        line = data;
        const line_arr = line.split(", "); // 按特定字符串分割不同的块, 此刻已成一个数组
        line_arr.forEach(cur => {
            cur = cur.replace("=",": ");
            store_arr.push(cur);
        })
        console.log(`转换出来的store_arr数组: ${store_arr}`);
    }
})


// console.log(line);

// let write_data = "114514";
// fs.writeFile('./file_dir/a.txt', write_data, (err) =>{
// 	if(err){
// 		console.log("在写入文件时发生了错误");
// 	}else{
// 		console.log("已成功写入文件!");
// 	}
// });