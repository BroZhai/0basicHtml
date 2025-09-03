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
    // let new_win = window.open("https://www.bilibili.com","_blank");
})

console.log(window.navigator);
console.log(window.screen);

// 注: 下面的这个方法处于安全考虑, 大部分浏览器仅支持'用户交互'才能实现open, 大多数浏览器或'拦截' 直接open
// let new_win = window.open("https://www.bilibili.com","_blank"); // 移至第13行

// 定时器 & 周期定时器
let pop_btn = document.querySelector("#pop");
let cancel_pop_btn = pop_btn.nextElementSibling;
let timer_1;
pop_btn.addEventListener("click", ()=>{
    console.log("已触发3秒弹窗倒计时");
    timer_1 = window.setTimeout(()=>{
        alert("这是3秒后的弹窗");
    }, 3000);
})

cancel_pop_btn.addEventListener('click', ()=>{
    window.clearTimeout(timer_1);
    console.log("已终止3秒弹窗倒计时...");
})

let print_btn = document.querySelector("#print");
let cancel_print_btn = print_btn.nextElementSibling;
let timer_2;
print_btn.addEventListener("click", ()=>{
    timer_2 = window.setInterval(()=>{
        console.log("我是每隔2秒打印的信息");
    }, 2000)
})

cancel_print_btn.addEventListener('click', ()=>{
    window.clearInterval(timer_2);
    console.log("已终止间隔打印的Interval计时器");
})