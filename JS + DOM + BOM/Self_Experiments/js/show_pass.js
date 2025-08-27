let input_box = document.querySelector("input");
let img_show = document.querySelector("img");
let go_btn = document.querySelector("button");

let show_password = false;

img_show.onclick = ()=>{

    show_password = !show_password;
    if(show_password){
        input_box.type = "text";
        // this.src = ... // 注意 箭头函数的内部取不到this, 可以用event.target(指向'最开始触发'的DOM, 这里即是最开始点击的img dom), 普通函数的this就正常
        event.target.src = "../../resources/JS/notshow.png"
    }else{
        input_box.type = "password";
        event.target.src = "../../resources/JS/show.png"
    }
}

go_btn.onclick = () =>{
    alert("输入的密码为: " + input_box.value);
}

// 额外小实验, RegExp
const numbers_and_letters = new RegExp("[0-9a-zA-Z]","g");
let test_str = "1@#B)c";
// 以RegExp对象为主体进行判断
let result_list = numbers_and_letters.exec(test_str);
console.log(result_list);