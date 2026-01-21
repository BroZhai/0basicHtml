import { counter } from "./counter"; // 从当前的'相对路径'下, 导入couter.js的'命名变量'
import axios from "axios";
// import axios from "./node_modules/axios/lib/axios.js"
import {skills} from "./test.json"


// console.log(`从counter.js导入的值: ${counter}`);
// console.log(axios);
// console.log(skills);

let scan_link = document.querySelector("#scan_link");
let file_list = document.querySelector("#file_list");

let addItem = (filename) => {
    if (!file_list) return;
    file_list.innerHTML += `<li><a href='/link_download?filename=${filename}'>${filename}</a></li>`;
}

scan_link.addEventListener("click", async (e) => {
    e.preventDefault();
    // console.log("扫描");
    let file_list = new Array();
    await axios.get("/scan")
    .then((result) =>{
        // console.log(result.data.dir);
        file_list = result.data.dir
    })
    .catch((err) => {
        console.log(`发生了错误: ${err}`);
    })
    // console.log(file_list);
    for (let filename of file_list){
        addItem(filename);
    }

})
