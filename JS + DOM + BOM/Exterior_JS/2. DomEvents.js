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
  display_area.innerHTML = "你输入了: " + textbox.value; // 注意, 对于表单元素而言, 获取的是它的'值' value
}

// 测试innerHTML 和 innerText的区别
let second_box = document.getElementById("second_box");
console.log("second_box中");
console.log("innerHTML的内容为: " + second_box.innerHTML); // 留意到'html换行结构有被保留', 且strong标签也在
console.log("innerText的内容为: " + second_box.innerText); // Strong标签不见了, 换行的结构也是

// 修改img标签的src属性, 显示不同的图片
let img_src_list = ["../resources/html/3/cirno.gif", "../resources/html/3/star.png","../resources/html/3/vrc.png", "../resources/html/3/xiaomao.jpg"]; // 图片地址数组
let list_counter = 0;
let previous_btn = document.querySelector("#previous");
let next_btn = document.querySelector("#next");
let img_show = document.querySelector("img"); // 直接选中仅有的img标签

const range_detect = (index) =>{
  if(index === 0){ // 第一张图片
    previous_btn.disabled = true;
  } else if(index === img_src_list.length-1){ // 最后一张图片
    next_btn.disabled = true;
  }else{
    previous_btn.disabled = false
    next_btn.disabled = false;
  }
}

range_detect(list_counter);

previous_btn.onclick = ()=>{
    list_counter--;
    if(list_counter <= 0){
      this.disabled = true;
    }else{

    range_detect(list_counter);
    img_show.src = img_src_list[list_counter];
    console.log("已切换为上一张图片, list_counter = " + list_counter);
}

next_btn.onclick = ()=>{
  list_counter++;
  range_detect(list_counter);
  img_show.src = img_src_list[list_counter];
  console.log("已切换为上一张图片, list_counter = " + list_counter);
}



