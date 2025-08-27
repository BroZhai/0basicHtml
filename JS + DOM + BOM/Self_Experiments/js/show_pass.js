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
let result_list = [];
let current_matched;
while(( current_matched = numbers_and_letters.exec(test_str))!==null){
    result_list = result_list.concat(current_matched);
}
console.log("用RegExp的exec方法取得的匹配数组: ");
console.dir(result_list);
// 以String对象为主体进行判断
let str_result_list = test_str.match(numbers_and_letters);
console.log(`String的match方法取得匹配的数组:`);
console.dir(str_result_list);


// 数组对象的相关方法
console.log("");
console.log("下面开始是数组对象的相关实验");
let test_arr = [3,2,1,5,4,6,0,9];
let range = test_arr.slice(1,3);
console.log(range);