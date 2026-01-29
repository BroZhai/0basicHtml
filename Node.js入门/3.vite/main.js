import { counter } from "./counter"; // 从当前的'相对路径'下, 导入couter.js的'命名变量'
import axios from "axios";
// import axios from "./node_modules/axios/lib/axios.js"
import {skills} from "./test.json"


// console.log(`从counter.js导入的值: ${counter}`);
// console.log(axios);
// console.log(skills);

let scan_link = document.querySelector("#scan_link");
let scan_folder = document.querySelector("#scan_folder");

let file_list_ele = document.querySelector("#file_list");
let folder_list_ele = document.querySelector("#folder_list");

let addItem = (filename, list_ele) => {
    if (!file_list) return;
    list_ele.innerHTML += `<li><a href='/link_download?filename=${filename}'>${filename}</a></li>`;
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
        addItem(filename, file_list_ele);
    }

})

scan_folder.addEventListener("click", async (e) => {
    e.preventDefault();
    let dir_list = new Array();
    await axios.get("scan_folder")
    .then((result) => {
        dir_list = result.data.dir;
    })
    .catch((err) => {
        console.log(`发生了错误: ${err}`);
    })
    for (let dirname of dir_list){
        folder_list_ele.innerHTML += `<li><a href="/check_folder?folder=${dirname}">${dirname}</a></li>`;
    }
})