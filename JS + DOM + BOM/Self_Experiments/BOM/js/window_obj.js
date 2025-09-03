let win_loc = window.location;
console.log(win_loc);

let input_box = document.querySelector("#address");
let go_btn = input_box.nextElementSibling; // input下一个元素就是 button, 同级直接调

// 利用window.location 让页面'重定向'到新网站
go_btn.addEventListener("click", ()=>{
    let address = input_box.value;
    console.log(address);
    win_loc.href = "https://" + address;
    // console.log(`你已跳转至${win_loc.href}`);
})

console.log(window.navigator);