import { counter } from "./counter"; // 从当前的'相对路径'下, 导入couter.js的'命名变量'
import axios from "axios";

console.log(`从counter.js导入的值: ${counter}`);
console.log(axios);