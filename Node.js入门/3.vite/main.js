import { counter } from "./counter"; // 从当前的'相对路径'下, 导入couter.js的'命名变量'
import axios from "axios";
// import axios from "./node_modules/axios/lib/axios.js"
import {skills} from "./test.json"

import { Model } from "survey-core";
import * as surveyUI from "survey-js-ui";


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

const json1 = {
  elements: [{
    type: "checkbox",
    name: "programmingLanguages",
    title: "What programming languages do I use?",
    choices: [
      { value: "c++", text: "C++"},
      { value: "js", text: "JavaScript" },
      { value: "java", text: "Java" }
    ],
    correctAnswer: "java",
    score: 20
  }, {
    type: "radiogroup",
    name: "AAA",
    title: "Who is baka?",
    choices: [
      { value: "IceWing", text: "IceWing"},
      { value: "Tekon", text: "Tekon" },
      { value: "Cirno", text: "Cirno" }
    ],
    correctAnswer: "IceWing",
    score: 30
  }]
};

const json2 = {
  elements: [{
    type: "radiogroup",
    name: "AAA",
    title: "What programming languages do you use?",
    choices: [
      { value: "BBB", text: "BBB"},
      { value: "js", text: "CCC" },
      { value: "java", text: "DDD" }
    ],
    // showOtherItem: true
  }]
};


let question = new Model(json1);
console.log(question.validate());

// question.data = "Baka";
// question.onCompleting.add( (sender) =>{
//   let total_score = 0;
//   let max_score = 0;

//   sender.getAllQuestions().forEach((question) => {
//     if (question.score !== undefined) {
//       max_score += question.score;
//     }
//     if (question.isAnswerCorrect()) {
//       total_score += Number(question.score);
//     }
//   });

//   sender.setVariable("total_score", total_score);
//   sender.setVariable("max_score", max_score);
//   console.log(`总分: ${total_score}, 得分: ${max_score}`);
// })

document.addEventListener("DOMContentLoaded", () => {
    question.render(document.getElementById("surveyContainer"));
});

let refresh_btn = document.querySelector("#refresh");
refresh_btn.addEventListener("click", () => {
    question = new Model(json2);
    question.render(document.getElementById("surveyContainer"));
    // question.render(document.getElementById("surveyContainer"));
});