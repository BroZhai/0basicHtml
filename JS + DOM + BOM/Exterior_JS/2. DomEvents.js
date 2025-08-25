// 获取到'触发对象'
let btn_element = document.getElementById("myBtn");

// 设置对象的'触发器' + 触发时的'处理逻辑'

// ES6 箭头函数
btn_element.onclick = () => {
  alert("你弹出了一个警告框")
}

/**
 * old school写法
 * btn_element.onclick = function(){
 *   alert("你弹出了以警告框")
 * }
 */

// 来实现一下获取文本框中的内容, 并在页面中展示
let textbox = document.querySelector("#textbox");
let go_btn = document.querySelector("#pop");
let display_area = document.querySelector("#display_area");

go_btn.onclick = ()=> {
  display_area.innerHTML = "你输入了: " + textbox.value;
}

// 测试innerHTML 和 innerText的区别
let second_box = document.getElementById("second_box");
console.log("second_box中");
console.log("innerHTML的内容为: " + second_box.innerHTML); // 留意到'html换行结构有被保留', 且strong标签也在
console.log("innerText的内容为: " + second_box.innerText); // Strong标签不见了, 换行的结构也是

